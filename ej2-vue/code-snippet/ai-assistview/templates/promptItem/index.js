import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-aiassistview id='aiAssistView' promptItemTemplate="promptItemTemplate" :prompts="prompts" :prompt-request="onPromptRequest" ref="aiassist">
      <template v-slot:promptItemTemplate="{data}">
        <div class="promptItemContent">
          <div class="prompt-header">You
            <span class="e-icons e-user"></span>
          </div>
          <div class="assist-prompt-content">{{cleanPrompt(data.prompt)}}</div>
        </div>
      </template>
    </ejs-aiassistview>
  </div>
`,

  data: function () {
    return {
      prompts: [
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
        let foundPrompt = this.prompts.find((promptObj) => promptObj.prompt === args.prompt);
        let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
      }, 1000);
    },
    cleanPrompt(prompt) {
      return prompt.replace('<span class="e-icons e-circle-info"></span>', '');
    }
  }

});