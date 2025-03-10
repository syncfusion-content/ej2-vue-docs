import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-aiassistview id='aiAssistView' ref="aiassist" :prompt-suggestions="promptSuggestions" :prompt-request="onPromptRequest"></ejs-aiassistview>
  </div>
`,

  data: function () {
    return {
      promptSuggestions: [
        "How do I prioritize my tasks?",
        "How can I improve my time management skills?"
      ],
      prompts: [
        {
          prompt: "How do I prioritize my tasks?",
          response: "Prioritize tasks by urgency and impact: tackle high-impact tasks first, delegate when possible, and break large tasks into smaller steps. For more assistance, feel free to ask—I’m here to help!"
        },
        {
          prompt: "How can I improve my time management skills?",
          response: "To improve time management skills, try setting clear goals, using a planner or digital tools, prioritizing tasks, breaking tasks into smaller steps, and minimizing distractions. Regularly review and adjust your approach for better efficiency."
        }
      ]
    }
  },
  methods: {
    onPromptRequest(args) {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let foundPrompt = this.prompts.find((promptObj) => promptObj.prompt === args.prompt);
        let defaultResponse = 'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
      }, 2000);
    }
  }

});