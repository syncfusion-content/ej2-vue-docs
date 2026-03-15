import Vue from 'vue';
import { InlineAIAssistPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(InlineAIAssistPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-inlineaiassist id='inlineAiAssist' popup-width="500px" :prompt-request="onPromptRequest" ref="inlineAiAssist"></ejs-inlineaiassist>
  </div>
`,

  data () {
    return {
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
    }
  },
  mounted() {
    if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.showPopup) {
      this.$refs.inlineAiAssist.showPopup();
    }
  }

});