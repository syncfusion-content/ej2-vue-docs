<template>
  <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
    <br />
    <div style="display:flex; gap:8px; align-items:center; margin-bottom:8px;">
      <button id="summarizeBtn" @click="showPopup">Summarize</button>
      <button id="toolbarBtn" @click="toggleToolbarPosition">Toggle Toolbar Position</button>
      <div id="editableText" contenteditable="true" style="flex:1; border:1px solid #ddd; padding:8px; min-height:40px;">Select text and click Summarize</div>
    </div>

    <ejs-inlineaiassist id="inlineAiAssist"
      popup-width="500px"
      :relate-to="'#summarizeBtn'"
      :prompt-request="onPromptRequest"
      :response-settings="responseSettings"
      :inline-toolbar-settings="inlineToolbarSettings"
      ref="inlineAiAssist">
    </ejs-inlineaiassist>
  </div>
</template>

<script>
import { InlineAIAssistComponent } from '@syncfusion/ej2-vue-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
  components: { 'ejs-inlineaiassist': InlineAIAssistComponent },
  data() {
    return {
      // sample prompts used by toolbar-settings variant
      promptsData: [
        {
          prompt: 'What is AI?',
          response: '<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>'
        }
      ],
      inlineToolbarSettings: {
        toolbarPosition: 'Bottom',
        items: [
          { iconCss: 'e-icons e-assistview-icon', align: 'Left' },
          { text: 'Welcome User !', align: 'Right' }
        ]
      },
      responseSettings: {
        itemSelect: this.onResponseItemSelect
      }
    };
  },
  methods: {
    onPromptRequest(args) {
      const prompt = args && args.prompt ? args.prompt : '';
      setTimeout(() => {
        const found = this.promptsData.find(p => p.prompt === prompt);
        const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.addResponse) {
          this.$refs.inlineAiAssist.addResponse(found ? found.response : defaultResponse);
        }
      }, 1000);
    },
    onResponseItemSelect(args) {
      const label = args && args.command && args.command.label ? args.command.label : '';
      if (label === 'Accept') {
        const editable = document.getElementById('editableText');
        if (editable && this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.prompts) {
          const prompts = this.$refs.inlineAiAssist.prompts;
          const last = prompts && prompts.length ? prompts[prompts.length - 1] : null;
          if (last && last.response) editable.innerHTML = '<p>' + last.response + '</p>';
        }
        this.$refs.inlineAiAssist.hidePopup();
      } else if (label === 'Discard') {
        this.$refs.inlineAiAssist.hidePopup();
      }
    },
    toggleToolbarPosition() {
      if (this.inlineToolbarSettings.toolbarPosition === 'Inline') {
        this.inlineToolbarSettings.toolbarPosition = 'Bottom';
      } else {
        this.inlineToolbarSettings.toolbarPosition = 'Inline';
      }
      // apply to component instance if available
      if (this.$refs.inlineAiAssist) {
        this.$refs.inlineAiAssist.inlineToolbarSettings.toolbarPosition = this.inlineToolbarSettings.toolbarPosition;
      }
    },
    showPopup() {
      if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.showPopup) this.$refs.inlineAiAssist.showPopup();
    }
  },
  mounted() {
    if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.showPopup) this.$refs.inlineAiAssist.showPopup();
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
