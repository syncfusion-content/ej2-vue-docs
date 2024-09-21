import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 350px; width: 650px;">
    <br>
    <ejs-aiassistview id='aiAssistView' bannerTemplate="bannerTemplate" ref="aiassist" :prompt-request="onPromptRequest">
      <template v-slot:bannerTemplate="">
        <div class="banner-content">
          <div class="e-icons e-assistview-icon"></div>
          <h3>AI Assistance</h3>
          <div>Your everyday AI companion.</div>
        </div>
      </template>
    </ejs-aiassistview>
  </div>
`,

  data: function () {
    return {
    }
  },
  methods: {
    onPromptRequest: (args) => {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(defaultResponse);
      }, 1000);
    }
  }

});