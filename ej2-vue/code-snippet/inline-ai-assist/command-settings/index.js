import Vue from 'vue';
import { InlineAIAssistPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(InlineAIAssistPlugin);

new Vue({
  el: '#app',
  template: `
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <button id="summarizeBtn" @click="showPopup">Open Inline AI Assist</button>
    <div id="editableText" contenteditable="true" style="min-height:80px;border:1px solid #ccc;padding:8px;margin-top:8px;">Editable content goes here.</div>
    <ejs-inlineaiassist id='inlineAiAssist' relateTo="#summarizeBtn" :prompt-request="onPromptRequest" :command-settings="commandSettings" :response-settings="responseSettings" ref="inlineAiAssist"></ejs-inlineaiassist>
  </div>
`,

  data () {
    return {
      commandSettings: {
        popupWidth: '500px',
        popupHeight: '200px',
        commands: [
          { label: 'Summarize', prompt: 'Summarize the content', groupBy: 'Improve content', iconCss: 'e-icons e-collapse-2', tooltip: 'Summarize' },
          { label: 'Shorten', prompt: 'Shorten the content', groupBy: 'Improve content', iconCss: 'e-icons e-shorten', tooltip: 'Shorten', disabled: true },
          { label: 'Translate', prompt: 'Translate the content', groupBy: 'Edit content', iconCss: 'e-icons e-translate' },
          { label: 'Make professional', prompt: 'Make the content more professional', groupBy: 'Edit content', iconCss: 'e-icons e-elaborate' }
        ],
        itemSelect: () => {
          // optional
        }
      },
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
    }
  },
  methods: {
    onPromptRequest(args) {
      var prompt = args.prompt;
      var self = this;
      setTimeout(function () {
        var sampleResponse = "**You asked:** " + prompt + "\n" +
          "This is a demonstration response from Syncfusion InlineAIAssist.\n" +
          "In your real application, send the prompt to an AI service here.";
        if (self.$refs.inlineAiAssist && self.$refs.inlineAiAssist.addResponse) {
          self.$refs.inlineAiAssist.addResponse(sampleResponse, true);
        }
      }, 1000);
    },
    showPopup() {
      if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.showPopup) {
        this.$refs.inlineAiAssist.showPopup();
      }
    }
  },
  mounted() {
    // optionally show on mount
  }

});