import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
  el: '#app',
  template: `
<div class="integration-texttospeech-section">
    <ejs-aiassistview
      id="aiAssistView"
      ref="aiAssist"
      bannerTemplate="bannerTemplate"
      @promptRequest="onPromptRequest"
      :toolbarSettings="toolbarSettings"
      :responseToolbarSettings="responseToolbarSettings"
      :stop-responding-click="stopRespondingClick"
    >
      <template v-slot:bannerTemplate="">
        <div class="banner-content">
          <div class="e-icons e-audio"></div>
          <i>Ready to assist voice enabled !</i>
        </div>
      </template>
    </ejs-aiassistview>
  </div>
`,

  data: function () {
    return {
      azureOpenAIApiKey: '', // YOUR_AZURE_OPENAI_API_KEY
      azureOpenAIEndpoint: '', // YOUR_AZURE_OPENAI_API_ENDPOINT
      azureOpenAIApiVersion: '', // YOUR_AZURE_OPENAI_API_VERSION
      azureDeploymentName: '', // YOUR_DEPLOYMENT_NAME
      stopStreaming: false,
      toolbarSettings: {
        items: [
          {
            iconCss: 'e-icons e-refresh',
            align: 'Right',
            tooltip: 'Clear Prompts',
          },
        ],
        itemClicked: () => {
          this.$refs.aiAssist.ej2Instances.prompts = [];
          this.stopStreaming = true;
        },
      },
      responseToolbarSettings: {
        items: [
          { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
          { type: 'Button', iconCss: 'e-icons e-audio', tooltip: 'Read Aloud' },
          { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
          { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
        ],
        itemClicked: (args) => onResponseToolbarItemClicked(args)
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
          this.$refs.aiAssist.ej2Instances.addPromptResponse(
            htmlResponse,
            i === responseLength
          );
          this.$refs.aiAssist.ej2Instances.scrollToBottom();
        }
        await new Promise((resolve) => setTimeout(resolve, 15)); // Delay for streaming effect
      }
    },
    onPromptRequest(args) {
      if (!args?.prompt?.trim() || !this.$refs.aiAssist.ej2Instances) return;
      this.stopStreaming = false;
      const url =
        this.azureOpenAIEndpoint.replace(/\/$/, '') +
        `/openai/deployments/${encodeURIComponent(
          this.azureDeploymentName
        )}/chat/completions` +
        `?api-version=${encodeURIComponent(this.azureOpenAIApiVersion)}`;
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': this.azureOpenAIApiKey,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: args.prompt }],
          max_tokens: 150,
          stream: false,
        }),
      })
        .then((response) => response.json())
        .then((reply) => {
          const responseText =
            reply.choices[0].message.content.trim() || 'No response received.';
          this.stopStreaming = false;
          this.streamResponse(responseText);
        })
        .catch((error) => {
          this.$refs.aiAssist.ej2Instances.addPromptResponse(
            '⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.',
            true
          );
          this.stopStreaming = true;
        });
    },
    stopRespondingClick() {
      this.stopStreaming = true;
    },
    onResponseToolbarItemClicked(args) {
      const responseHtml = this.$refs.aiAssist.ej2Instances.prompts[args.dataIndex].response;
      if (responseHtml) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = responseHtml;
        const text = (tempDiv.textContent || tempDiv.innerText || '').trim();
        if (args.item.iconCss === 'e-icons e-audio' || args.item.iconCss === 'e-icons e-assist-stop') {
          if (currentUtterance) {
            speechSynthesis.cancel();
            currentUtterance = null;
            this.$refs.aiAssist.ej2Instances.responseToolbarSettings.items[1].iconCss = 'e-icons e-audio';
            this.$refs.aiAssist.ej2Instances.responseToolbarSettings.items[1].tooltip = 'Read Aloud';
          } else {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.onend = () => {
              currentUtterance = null;
              this.$refs.aiAssist.ej2Instances.responseToolbarSettings.items[1].iconCss = 'e-icons e-audio';
              this.$refs.aiAssist.ej2Instances.responseToolbarSettings.items[1].tooltip = 'Read Aloud';
            };
            speechSynthesis.speak(utterance);
            currentUtterance = utterance;
            this.$refs.aiAssist.ej2Instances.responseToolbarSettings.items[1].iconCss = 'e-icons e-assist-stop';
            this.$refs.aiAssist.ej2Instances.responseToolbarSettings.items[1].tooltip = 'Stop';
          }
        }
      }
    },
  },
});