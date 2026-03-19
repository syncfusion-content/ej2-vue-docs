<template>
  <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
    <br />
    <button id="summarizeBtn" @click="showPopup">Open Inline AI Assist</button>
    <div id="editableText" contenteditable="true" style="min-height:80px;border:1px solid #ccc;padding:8px;margin-top:8px;">Editable content goes here.</div>
    <ejs-inlineaiassist :prompts="promptsData" relate-to="#summarizeBtn" popup-width="500px" :prompt-request="onPromptRequest" :response-settings="responseSettings" ref="inlineAiAssist"></ejs-inlineaiassist>
  </div>
</template>

<script>
import { InlineAIAssistComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: { 'ejs-inlineaiassist': InlineAIAssistComponent },
  data() {
    return {
      promptsData: [
        {
          prompt: 'What is AI?',
          response: '<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>'
        }
      ],
      responseSettings: {
        itemSelect: (args) => {
          if (args.command.label === 'Accept') {
            const editable = document.getElementById('editableText');
            if (editable && this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.prompts) {
              editable.innerHTML = '<p>' + this.$refs.inlineAiAssist.prompts[this.$refs.inlineAiAssist.prompts.length - 1].response + '</p>';
            }
            if (this.$refs.inlineAiAssist) this.$refs.inlineAiAssist.hidePopup();
          } else if (args.command.label === 'Discard') {
            if (this.$refs.inlineAiAssist) this.$refs.inlineAiAssist.hidePopup();
          }
        }
      }
    };
  },
  methods: {
    onPromptRequest(args) {
      const prompt = args.prompt;
      const self = this;
      setTimeout(() => {
        const foundPrompt = self.promptsData.find((p) => p.prompt === prompt);
        const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        if (self.$refs.inlineAiAssist && self.$refs.inlineAiAssist.addResponse) {
          self.$refs.inlineAiAssist.addResponse(foundPrompt ? foundPrompt.response : defaultResponse);
        }
      }, 1000);
    },
    showPopup() {
      if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.showPopup) this.$refs.inlineAiAssist.showPopup();
    }
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
</style>
