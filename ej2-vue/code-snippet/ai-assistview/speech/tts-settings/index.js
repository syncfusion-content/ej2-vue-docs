import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
  el: '#app',
  template: `
<div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
  <br>
  <ejs-aiassistview 
    id='aiAssistView' 
    ref="aiassist" 
    :prompts="promptsData"
    :responseToolbarSettings="responseToolbarSettings"
    :textToSpeechSettings="textToSpeechSettings"
    :prompt-request="onPromptRequest"
  ></ejs-aiassistview>
</div>
`,

  data() {
    return {
      promptsData: [
        {
          prompt: "What is AI?",
          response: "AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making."
        }
      ],
      responseToolbarSettings: {
        items: [
          { type: 'Button', iconCss: 'e-icons e-assist-audio', tooltip: 'Read Aloud' },
          { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
          { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' }
        ]
      },
      textToSpeechSettings: {
        language: 'en-US',
        speechPitch: 1,
        speechRate: 1,
        volume: 1
      }
    };
  },
  methods: {
    onPromptRequest(args) {
      setTimeout(() => {
        let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.';
        this.$refs.aiassist.ej2Instances.addPromptResponse(defaultResponse);
      }, 1000);
    }
  }
});
