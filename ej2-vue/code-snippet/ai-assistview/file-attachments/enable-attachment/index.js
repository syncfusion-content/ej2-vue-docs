import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
import { enableRipple } from '@syncfusion/ej2-base'; 
Vue.use(AIAssistViewPlugin);

enableRipple(true);

new Vue({
	el: '#app',
	template: `
    <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
    <br />
    <ejs-aiassistview id="aiAssistView" ref="aiassist" :promptRequest="onPromptRequest" :enableAttachments="true" ></ejs-aiassistview>
  </div>
`,

  data() {
    return {
    
    }
  },
  methods: {
    onPromptRequest() {
      setTimeout(() => {
        const aiAssistInstance = this.$refs.aiassist.ej2Instances;
        const defaultResponse =
          'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        aiAssistInstance.addPromptResponse(defaultResponse);
      }, 1000);
    },
  }
});