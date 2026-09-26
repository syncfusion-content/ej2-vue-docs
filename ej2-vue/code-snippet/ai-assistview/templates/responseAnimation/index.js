import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-aiassistview id='aiAssistView' responseAnimationTemplate="responseAnimationTemplate" ref="aiassist" :prompt-request="onPromptRequest">
      <template v-slot:responseAnimationTemplate="">
        <div class="assistview-loading-status">
          <div class="assistview-grid-icon">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>
          <span class="assistview-loading-label">Generating</span>
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
    onPromptRequest(args) {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(defaultResponse);
      }, 2000);
    }
  }

});