<template>
  <div id="container" style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui
      ref="chatui"
      :user="currentUser"
      :messages="chatMessages"
      :typingUsers="typingUsers"
      headerText="Chat UI with Azure OpenAI"
      headerIconCss="e-icons e-ai-chat"
      :headerToolbar="headerToolbar"
      emptyChatTemplate="emptyChatTemplate"
      @messageSend="onMessageSend"
    >
      <template v-slot:emptyChatTemplate="">
        <div class="emptychat-content">
          <h3><span class="e-icons e-assistview-icon"></span></h3>
          <div class="emptyChatText" style="font-size: 16px; font-style: italic">
            Syncfusion Chat UI with Azure OpenAI
          </div>
        </div>
      </template>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChatUIComponent as EjsChatui } from '@syncfusion/ej2-vue-interactive-chat';
import { marked } from 'marked';

const azureOpenAIApiKey = 'YOUR_AZURE_OPENAI_API_KEY';              // From Azure portal (Keys and Endpoint)
const azureOpenAIEndpoint = 'YOUR_AZURE_OPENAI_API_ENDPOINT'; // e.g., https://my-resource.openai.azure.com
const azureOpenAIApiVersion = 'YOUR_AZURE_OPENAI_API_VERSION';                          // Verify latest supported version
const azureDeploymentName = 'YOUR_DEPLOYMENT_NAME';                  // Your model's deployment name

const currentUser = { id: 'user1', user: 'You' };
const aiModel = { id: 'ai', user: 'Azure OpenAI' };

const chatMessages = ref([]);
const typingUsers = ref([]);

const headerToolbar = {
  items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Chat' }],
  itemClicked: () => {
    chatMessages.value = [];
  },
};

const onMessageSend = async (args) => {
  args.cancel = true;

  // Add user message
  chatMessages.value = [
    ...chatMessages.value,
    {
      text: args.message.text,
      author: currentUser,
      timeStamp: new Date(),
    },
  ];

  // Show typing indicator
  typingUsers.value = [aiModel];

  try {
    if (!azureOpenAIApiKey || !azureOpenAIEndpoint || !azureDeploymentName) {
      throw new Error('Azure OpenAI configuration is missing (API Key, Endpoint, or Deployment Name).');
    }

    const base = azureOpenAIEndpoint.replace(/\/$/, '');
    const url =
      `${base}/openai/deployments/${encodeURIComponent(azureDeploymentName)}/chat/completions` +
      `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': azureOpenAIApiKey, // Azure uses 'api-key' header
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: args.message.text }],
        temperature: 0.7,
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      let details = `HTTP ${response.status}`;
      try {
        const err = await response.json();
        details += ` - ${err?.error?.message || err?.message || JSON.stringify(err)}`;
      } catch {
      }
      throw new Error(details);
    }

    const data = await response.json();
    const responseText =
      data?.choices?.[0]?.message?.content?.trim?.() || 'No response received.';

    // Add AI response
    chatMessages.value = [
      ...chatMessages.value,
      {
        text: marked.parse(responseText),
        author: aiModel,
        timeStamp: new Date(),
      },
    ];
  } catch (error) {
    chatMessages.value = [
      ...chatMessages.value,
      {
        text:
          'Error generating response. Please verify your Azure OpenAI setup (API Key, Endpoint, Deployment Name, and API Version) and try again.',
        author: aiModel,
        timeStamp: new Date(),
      },
    ];
  } finally {
    typingUsers.value = [];
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
.emptychat-content {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.e-ai-chat {
  margin-top: 10px;
  font-size: 18px;
}
.e-message-content p {
  margin: 0;
  display: inline-block;
}
.e-assistview-icon {
  font-size: 24px;
}
</style>