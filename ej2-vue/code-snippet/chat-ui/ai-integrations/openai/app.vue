<template>
<div id="container" style="height: 380px; width: 450px; margin: 0 auto;">
  <ejs-chatui
    ref="chatUI"
    :user="currentUser"
    headerText="Chat with OpenAI"
    headerIconCss="e-icons e-ai-chat"
    :headerToolbar="headerToolbar"
    emptyChatTemplate="emptyChatTemplate"
    @messageSend="onMessageSend"
    :typingUsers="typingUsers"
  >
  <template v-slot:emptyChatTemplate="">
  <div class="emptychat-content">
    <h3><span class="e-icons e-assistview-icon"></span></h3>
    <div class="emptyChatText" style="font-size: 16px; font-style: italic">Syncfusion Chat UI with OpenAI</div>
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
      openaiApiKey: "", // Replace with your OpenAI API key
      currentUser: {
        id: "user1",
        user: "You",
      },
      aiModel: {
        id: "ai",
        user: "Open AI",
      },
      headerToolbar: {
        items: [
          { iconCss: "e-icons e-refresh", align: "Right", tooltip: "Clear Chat" },
        ],
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
      // Append the user's message first
      chatUI.addMessage({
        text: args.message.text,
        author: this.currentUser,
      });
      // Show typing indicator for AI
      this.typingUsers = [this.aiModel];
      try {
        if (!this.openaiApiKey) {
          throw new Error("OpenAI API key is missing");
        }
        // OpenAI API Call
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.openaiApiKey}`,
            },
            body: JSON.stringify({
              model: "gpt-4o-mini",
              messages: [{ role: "user", content: args.message.text }],
              max_tokens: 150,
            }),
          }
        );
        const data = await response.json();
        const responseText = data.choices[0].message.content.trim() || "No response received.";
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Append the bot's response
        chatUI.addMessage({
          text: marked.parse(responseText),
          author: this.aiModel,
        });
      } catch (error) {
        console.error("Error fetching OpenAI response:", error);
        await new Promise(resolve => setTimeout(resolve, 2000));
        chatUI.addMessage({
          text: "Error generating response. Please check your API key and try again.",
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