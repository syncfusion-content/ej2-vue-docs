<template>
<div id="container" style="height: 380px; width: 450px; margin: 0 auto;">
  <ejs-chatui
    ref="chatUI"
    :user="currentUser"
    headerText="Chat UI"
    headerIconCss="e-icons e-ai-chat"
    :headerToolbar="headerToolbar"
    emptyChatTemplate="emptyChatTemplate"
    @messageSend="onMessageSend"
    :typingUsers="typingUsers"
  >
  <template v-slot:emptyChatTemplate="">
  <div class="emptychat-content">
  <h3><span class="e-icons e-assistview-icon"></span></h3>
  <div class="emptyChatText" style="font-size: 16px; font-style: italic">Syncfusion Chat UI with Gemini AI</div>
</div>
</template>
  </ejs-chatui>
</div>
</template>

<script>
import { ChatUIComponent } from "@syncfusion/ej2-vue-interactive-chat";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "marked";

export default {
components: {
  "ejs-chatui": ChatUIComponent,
},
data() {
  return {
    geminiApiKey: "", // Replace with your Gemini API key
    currentUser: {
      id: "user1",
      user: "You",
    },
    aiModel: {
      id: "ai",
      user: "Gemini",
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
    args.cancel=true;
    const chatUI = this.$refs.chatUI.ej2Instances;

    // Append the user's message first
    chatUI.addMessage({
      text: args.message.text,
      author: this.currentUser,
    });

    // Show typing indicator for AI
    this.typingUsers = [this.aiModel];

    try {
      if (!this.geminiApiKey) {
        throw new Error("Gemini API key is missing");
      }
      const genAI = new GoogleGenerativeAI(this.geminiApiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(args.message.text);
      const response = result.response.text();
      console.log("Gemini response:", response); // Debug log

      // Append the bot's response
      chatUI.addMessage({
        text: marked.parse(response),
        author: this.aiModel,
      });
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      chatUI.addMessage({
        text: "Error generating response. Please try again.",
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
.e-ai-chat{
  margin-top:10px;
  font-size:18px;
}
.e-message-content p {
  margin: 0;
  display: inline-block;
}
.e-assistview-icon{
  font-size: 24px;
}
</style>
