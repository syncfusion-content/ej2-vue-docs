<template>
<div id="container" style="height: 380px; width: 450px; margin: 0 auto;">
  <ejs-chatui
    ref="chatUI"
    :user="currentUser"
    headerText="Chat with Azure OpenAI"
    headerIconCss="e-icons e-ai-chat"
    :headerToolbar="headerToolbar"
    emptyChatTemplate="emptyChatTemplate"
    @messageSend="onMessageSend"
    :typingUsers="typingUsers"
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

<script>
import { ChatUIComponent } from "@syncfusion/ej2-vue-interactive-chat";
import { marked } from "marked";

export default {
components: {
  "ejs-chatui": ChatUIComponent,
},
data() {
  return {
    azureOpenAIApiKey: "YOUR_AZURE_OPENAI_API_KEY",
    azureOpenAIEndpoint: "YOUR_AZURE_OPENAI_API_ENDPOINT",
    azureOpenAIApiVersion: "YOUR_AZURE_OPENAI_API_VERSION",
    azureDeploymentName: "YOUR_DEPLOYMENT_NAME",

    currentUser: { id: "user1", user: "You" },
    aiModel: { id: "ai", user: "Azure OpenAI" },

    headerToolbar: {
      items: [{ iconCss: "e-icons e-refresh", align: "Right", tooltip: "Clear Chat" }],
      itemClicked: () => {
        this.$refs.chatUI.ej2Instances.messages = [];
      },
    },
    typingUsers: [],
    messages: [],
  };
},
methods: {
  async onMessageSend(args) {
    args.cancel = true;
    const chatUI = this.$refs.chatUI.ej2Instances;

    chatUI.addMessage({
      text: args.message.text,
      author: this.currentUser,
    });

    // Show typing indicator for AI
    this.typingUsers = [this.aiModel];

    try {
      const { azureOpenAIApiKey, azureOpenAIEndpoint, azureOpenAIApiVersion, azureDeploymentName } = this;
      if (!azureOpenAIApiKey || !azureOpenAIEndpoint || !azureDeploymentName) {
        throw new Error("Azure OpenAI configuration is missing (API Key, Endpoint, or Deployment Name).");
      }

      const base = azureOpenAIEndpoint.replace(/\/$/, "");
      const url =
        `${base}/openai/deployments/${encodeURIComponent(azureDeploymentName)}/chat/completions` +
        `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": azureOpenAIApiKey, // Azure uses 'api-key' header
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: args.message.text }],
          temperature: 0.7,
          max_tokens: 150,
        }),
      });

      if (!response.ok) {
        let details = `HTTP ${response.status}`;
        try {
          const err = await response.json();
          details += ` - ${err?.error?.message || err?.message || JSON.stringify(err)}`;
        } catch {}
        throw new Error(details);
      }

      const data = await response.json();
      const responseText =
        (data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content || "").trim() ||
        "No response received.";
      chatUI.addMessage({
        text: marked.parse(responseText),
        author: this.aiModel,
      });
    } catch (error) {
      chatUI.addMessage({
        text:
          "Error generating response. Please verify your Azure OpenAI setup (API Key, Endpoint, Deployment Name, and API Version) and try again.",
        author: this.aiModel,
      });
    } finally {
      this.typingUsers = [];
    }
  },
},
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
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