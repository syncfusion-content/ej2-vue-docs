import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
  <ejs-aiassistview
    ref="aiAssist"
    :promptSuggestions="suggestions"
    :toolbarSettings="toolbarSettings"
    bannerTemplate="bannerTemplate"
    :prompt-request="onPromptRequest"
    :stop-responding-click="stopRespondingClick"
  >
  <template v-slot:bannerTemplate="">
  <div class="banner-content">
  <div class="e-icons e-assistview-icon"></div>
  <h3>How can I help you today?</h3>
  </div>
  </template>
  </ejs-aiassistview>
  </div>
`,

  data: function () {
     return {
    geminiApiKey: '', // Replace with your Gemini API key
    suggestions: [
      'What are the best tools for organizing my tasks?',
      'How can I maintain work-life balance effectively?',
    ],
    toolbarSettings: {
      items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Prompts' }],
      itemClicked: () => {
        this.$refs.aiAssist.ej2Instances.prompts = [];
        this.$refs.aiAssist.ej2Instances.promptSuggestions = this.suggestions;
        this.stopStreaming = true;
      },
    },
  };
},
methods: {
  async streamResponse(response) {
    let lastResponse = '';
    const responseUpdateRate = 10;
    let i = 0;
    const responseLength = response.length;
    while (i < responseLength && !this.stopStreaming) {
      lastResponse += response[i];
      i++;
      if (i % responseUpdateRate === 0 || i === responseLength) {
        const htmlResponse = marked.parse(lastResponse);
        this.$refs.aiAssist.ej2Instances.addPromptResponse(htmlResponse, i === responseLength);
        this.$refs.aiAssist.ej2Instances.scrollToBottom();
      }
      await new Promise(resolve => setTimeout(resolve, 15)); // Delay for streaming effect
    }
    this.$refs.aiAssist.ej2Instances.promptSuggestions = this.suggestions;
  },
  async onPromptRequest(args) {
    try {
      const genAI = new GoogleGenerativeAI(this.geminiApiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(args.prompt || 'Hi');
      const response = result.response.text();
      this.stopStreaming = false;
      await this.streamResponse(response);
    } catch (error) {
      this.$refs.aiAssist.ej2Instances.addPromptResponse(
        '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
      );
      this.stopStreaming = true;
    }
  },
  stopRespondingClick() {
    this.stopStreaming = true;
  },
},
});