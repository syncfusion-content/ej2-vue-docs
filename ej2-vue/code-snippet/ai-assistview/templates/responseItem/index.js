import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-aiassistview id='aiAssistView' responseItemTemplate="responseItemTemplate" :prompts="promptsData" :prompt-request="onPromptRequest" ref="aiassist">
      <template v-slot:responseItemTemplate="{data}">
        <div class="responseItemContent">
          <div class="response-header">
            <span class="e-icons e-assistview-icon"></span>
            AI Assist
          </div>
          <div class="assist-response-content" v-html="data.response"></div>
        </div>
      </template>
    </ejs-aiassistview>
  </div>
`,

  data: function () {
    return {
      promptsData: [
        {
          prompt: "What is AI?",
          response: `<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>`
        }
      ]
    }
  },
  methods: {
    onPromptRequest(args) {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let foundPrompt = this.promptsData.find((promptObj) => promptObj.prompt === args.prompt);
        let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
      }, 1000);
    }
  }

});