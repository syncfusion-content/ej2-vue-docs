import Vue from 'vue';
import { InlineAIAssistPlugin } from "@syncfusion/ej2-vue-interactive-chat";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

Vue.use(InlineAIAssistPlugin);

new Vue({
  el: '#app',
  template: `
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <div style="display:flex; gap:8px; align-items:center; margin-bottom:8px;">
      <button id="summarizeBtn" @click="showPopup">Summarize</button>
      <button id="toolbarBtn" @click="toggleToolbarPosition">Toggle Toolbar Position</button>
      <div id="editableText" contenteditable="true" style="flex:1; border:1px solid #ddd; padding:8px; min-height:40px;">Select text and click Summarize</div>
    </div>
    <ejs-inlineaiassist id='inlineAiAssist' popup-width="500px" :relate-to="'#summarizeBtn'" :prompt-request="onPromptRequest" :inline-toolbar-settings="inlineToolbarSettings" :response-settings="responseSettings" ref="inlineAiAssist"></ejs-inlineaiassist>
  </div>
`,

  data () {
    return {
      promptsData: [
        { prompt: 'What is AI?', response: '<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>' }
      ],
      inlineToolbarSettings: {
        toolbarPosition: 'Bottom',
        items: [{iconCss: 'e-icons e-assistview-icon', align: 'Left'}, { text: 'Welcome User !', align: 'Right'}]
      },
      responseSettings: {
        itemSelect: function (args) {
          var label = args && args.command && args.command.label ? args.command.label : '';
          if (label === 'Accept') {
            var editable = document.getElementById('editableText');
            if (editable && this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.prompts) {
              var prompts = this.$refs.inlineAiAssist.prompts;
              var last = prompts && prompts.length ? prompts[prompts.length - 1] : null;
              if (last && last.response) {
                editable.innerHTML = '<p>' + last.response + '</p>';
              }
            }
            this.$refs.inlineAiAssist.hidePopup();
          } else if (label === 'Discard') {
            this.$refs.inlineAiAssist.hidePopup();
          }
        }
      }
    }
  },
  methods: {
    onPromptRequest(args) {
      var prompt = args && args.prompt ? args.prompt : '';
      var self = this;
      setTimeout(function () {
        var found = self.promptsData.find(function (p) { return p.prompt === prompt; });
        var defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        if (self.$refs.inlineAiAssist && self.$refs.inlineAiAssist.addResponse) {
          self.$refs.inlineAiAssist.addResponse(found ? found.response : defaultResponse);
        }
      }, 1000);
    },
    toggleToolbarPosition() {
      this.inlineToolbarSettings.toolbarPosition = this.inlineToolbarSettings.toolbarPosition === 'Inline' ? 'Bottom' : 'Inline';
      if (this.$refs.inlineAiAssist) this.$refs.inlineAiAssist.inlineToolbarSettings.toolbarPosition = this.inlineToolbarSettings.toolbarPosition;
    },
    showPopup() {
      if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.showPopup) this.$refs.inlineAiAssist.showPopup();
    }
  },
  mounted() {
    if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.showPopup) this.$refs.inlineAiAssist.showPopup();
  }

});