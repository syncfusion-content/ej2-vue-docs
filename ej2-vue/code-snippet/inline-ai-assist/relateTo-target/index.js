import Vue from 'vue';
import { InlineAIAssistPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(InlineAIAssistPlugin);

new Vue({
    el: '#app',
    template: `
  <div id='container' style="max-width:800px; margin:0 auto;">
    <br>
    <div id="defaultInlineAssist"></div>
    <button id="summarizeBtn">Summarize</button>
    <div id="editableText" contenteditable="true" style="border:1px solid #ddd; padding:10px; margin-top:10px;">
      <p>Inline AI Assist component provides intelligent text processing capabilities that enhance user productivity. It leverages advanced natural language processing to understand context and deliver precise suggestions. Users can seamlessly integrate AI-powered features into their applications.</p>
      <p>With real-time response streaming and customizable prompts, developers can create interactive experiences. The component supports multiple response modes including inline editing and popup-based interactions.</p>
    </div>
    <ejs-inlineaiassist id='inlineAiAssist' relateTo="#summarizeBtn" target="#container" popup-width="500px" :prompt-request="onPromptRequest" ref="inlineAiAssist"></ejs-inlineaiassist>
  </div>
`,

    data() {
        return {};
    },
    methods: {
        onPromptRequest(args) {
            const prompt = args.prompt;
            const self = this;
            setTimeout(function () {
                const sampleResponse = "**You asked:** " + prompt + "\n" +
                    "This is a demonstration response from Syncfusion InlineAIAssist.\n" +
                    "In your real application, send the prompt to an AI service here.";
                if (self.$refs.inlineAiAssist && self.$refs.inlineAiAssist.addResponse) {
                    self.$refs.inlineAiAssist.addResponse(sampleResponse, true);
                }
            }, 1000);
        }
    },
    mounted() {
        if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.showPopup) {
            this.$refs.inlineAiAssist.showPopup();
        }
    }

});
