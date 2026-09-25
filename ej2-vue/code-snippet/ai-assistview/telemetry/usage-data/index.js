import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 420px; width: 550px; margin: 0 auto;">
    <ejs-aiassistview id='aiAssistView' ref='aiassist' :promptSuggestions='suggestions' :telemetrySettings='telemetrySettings' :promptRequest='onPromptRequest'></ejs-aiassistview>
  </div>
`,

  data: function () {
    return {
      suggestions: [
        'How do I set achievable goals at work?',
        'Why do people fly in their dreams?'
      ],
      telemetrySettings: {
        enable: true
      }
    };
  },
  methods: {
    onPromptRequest: function (args) {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        // Mock telemetry data with hard-coded usage values (model and token details).
        // In a real scenario, these values are obtained from the AI service response.
        const telemetryData = {
          model: 'gpt-4o',
          inputTokens: 128,
          outputTokens: 512,
          reasoningTokens: 64,
          cachedInputTokens: 32,
          customAttributes: { region: 'us-east-1', tenant: 'acme' }
        };
        defaultAiassist.addPromptResponse(defaultResponse, true, telemetryData);
      }, 1000);
    }
  }

});