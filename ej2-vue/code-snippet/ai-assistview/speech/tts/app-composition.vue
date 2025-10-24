<template>
  <div class="integration-texttospeech-section">
    <ejs-aiassistview
      id="aiAssistView"
      ref="aiAssist"
      bannerTemplate="bannerTemplate"
      :prompt-request="onPromptRequest"
      :toolbarSettings="toolbarSettings"
      :responseToolbarSettings="responseToolbarSettings"
      :stop-responding-click="stopRespondingClick"
    >
      <template v-slot:bannerTemplate="">
        <div class="banner-content">
          <div class="e-icons e-audio"></div>
          <i>Ready to assist voice enabled !</i>
        </div>
      </template>
    </ejs-aiassistview>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AIAssistViewComponent as EjsAiassistview } from '@syncfusion/ej2-vue-interactive-chat';
import { marked } from 'marked';

const azureOpenAIApiKey: '', // YOUR_AZURE_OPENAI_API_KEY
const azureOpenAIEndpoint: '', // YOUR_AZURE_OPENAI_API_ENDPOINT
const azureOpenAIApiVersion: '', // YOUR_AZURE_OPENAI_API_VERSION
const azureDeploymentName: '', // YOUR_DEPLOYMENT_NAME

const stopStreaming = false;
const currentUtterance = null;
const toolbarSettings = {
  items: [
    {
      iconCss: 'e-icons e-refresh',
      align: 'Right',
      tooltip: 'Clear Prompts',
    },
  ],
  itemClicked: () => {
    aiAssist.value.ej2Instances.prompts = [];
    stopStreaming.value = true;
  },
};
const responseToolbarSettings = {
  items: [
      { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
      { type: 'Button', iconCss: 'e-icons e-audio', tooltip: 'Read Aloud' },
      { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
      { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
  ],
  itemClicked: (args) => onResponseToolbarItemClicked(args)
},

const aiAssist = ref(null);

// Streams the AI response character by character to create a typing effect
const streamResponse = async (response) => {
  let lastResponse = '';
  const responseUpdateRate = 10;
  let i = 0;
  const responseLength = response.length;
  while (i < responseLength && !this.stopStreaming) {
    lastResponse += response[i];
    i++;
    if (i % responseUpdateRate === 0 || i === responseLength) {
      const htmlResponse = marked.parse(lastResponse);
      aiAssist.value.ej2Instances.addPromptResponse(
        htmlResponse,
        i === responseLength
      );
      aiAssist.value.ej2Instances.scrollToBottom();
    }
    await new Promise((resolve) => setTimeout(resolve, 15)); // Delay for streaming effect
  }
};

// Handles prompt requests by sending them to the Azure OpenAI API and streaming the response
const onPromptRequest = (args) => {
    const url= azureOpenAIEndpoint.replace(/\/$/, '') +
    `/openai/deployments/${encodeURIComponent(azureDeploymentName)}/chat/completions` +
    `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;
    fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': azureOpenAIApiKey,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: args.prompt }],
      max_tokens: 150,
      stream: false,
    }),
  })
    .then(response => response.json())
    .then(reply => {
      const responseText = reply.choices[0].message.content.trim() || 'No response received.';
      stopStreaming.value = false;
      streamResponse(responseText);
    })
    .catch(error => {
      aiAssist.value.ej2Instances.addPromptResponse(
        '⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.',true);
      stopStreaming.value = true;
    });
};

// Stops the ongoing streaming response
const stopRespondingClick = () => {
  stopStreaming.value = true;
};

// Handles clicks on response toolbar items, such as copying, reading aloud, liking, or disliking the response
const onResponseToolbarItemClicked = (args) => {
    const responseHtml = aiAssist.value.ej2Instances.prompts[args.dataIndex].response;
    if (responseHtml) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = responseHtml;
        const text = (tempDiv.textContent || tempDiv.innerText || '').trim();
        if (args.item.iconCss === 'e-icons e-audio' || args.item.iconCss === 'e-icons e-assist-stop') {
            if (currentUtterance) {
                speechSynthesis.cancel();
                currentUtterance = null;
                aiAssist.value.ej2Instances.responseToolbarSettings.items[1].iconCss = 'e-icons e-audio';
                aiAssist.value.ej2Instances.responseToolbarSettings.items[1].tooltip = 'Read Aloud';
            } else {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.onend = () => {
                    currentUtterance = null;
                    aiAssist.value.ej2Instances.responseToolbarSettings.items[1].iconCss = 'e-icons e-audio';
                    aiAssist.value.ej2Instances.responseToolbarSettings.items[1].tooltip = 'Read Aloud';
                };
                speechSynthesis.speak(utterance);
                currentUtterance = utterance;
                aiAssist.value.ej2Instances.responseToolbarSettings.items[1].iconCss = 'e-icons e-assist-stop';
                aiAssist.value.ej2Instances.responseToolbarSettings.items[1].tooltip = 'Stop';
            }
        }
    }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>