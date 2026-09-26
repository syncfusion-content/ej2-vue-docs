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
        enable: true,
        // Invoked before every report is delivered. Return the report (modified or not)
        // to deliver it, or null to suppress the report entirely.
        beforeReport: function (report) {
          report.customAttributes = { region: 'us-east-1', tenant: 'acme', beta: true };
          return report;
        }
      }
    };
  },
  methods: {
    onPromptRequest: function (args) {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(defaultResponse);
      }, 1000);
    }
  }

});