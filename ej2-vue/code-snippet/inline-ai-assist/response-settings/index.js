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
    <div style="display:flex; gap:12px; align-items:center; margin-bottom:8px;">
      <button id="summarizeBtn" @click="showPopup">Summarize</button>
      <div id="editableText" contenteditable="true" style="flex:1; border:1px solid #ddd; padding:8px; min-height:40px;">Select text and click Summarize</div>
    </div>
    <ejs-inlineaiassist id='inlineAiAssist' popup-width="500px" :relate-to="'#summarizeBtn'" :prompt-request="onPromptRequest" :response-settings="responseSettings" ref="inlineAiAssist"></ejs-inlineaiassist>
  </div>
`,

  data () {
    return {
      responseSettings: {
        items: [
          { label: 'Regenerate', iconCss: 'e-icons e-refresh', tooltip: 'Regenerate', groupBy: 'Actions' },
          { label: 'Copy', iconCss: 'e-icons e-copy', tooltip: 'Copy', groupBy: 'Actions' },
          { label: 'Regenerate (disabled)', iconCss: 'e-icons e-refresh', disabled: true, groupBy: 'Actions' },
          { label: 'Accept' },
          { label: 'Discard' }
        ],
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
          } else if (label.indexOf('Copy') !== -1) {
            var prompts2 = this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.prompts ? this.$refs.inlineAiAssist.prompts : [];
            var last2 = prompts2.length ? prompts2[prompts2.length - 1] : null;
            if (last2 && last2.response && navigator.clipboard) {
              navigator.clipboard.writeText(last2.response).catch(function () {});
            }
          } else if (label.indexOf('Regenerate') !== -1) {
            var currentPrompt = this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.getPrompt ? this.$refs.inlineAiAssist.getPrompt() : '';
            // trigger promptRequest again
            this.onPromptRequest({ prompt: currentPrompt });
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
    if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.showPopup) {
      this.$refs.inlineAiAssist.showPopup();
    }
  }

});