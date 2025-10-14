import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
  el: '#app',
  template: `
      <div class="integration-speechToText-section">
        <ejs-aiassistview
          id="aiAssistView"
          ref="aiAssist"
          bannerTemplate="bannerTemplate"
          @promptRequest="onPromptRequest"
          footerTemplate="footerTemplate"
          :toolbarSettings="toolbarSettings"
          :promptToolbarSettings="promptToolbarSettings"
          :stop-responding-click="stopRespondingClick"
        >
          <template v-slot:bannerTemplate="">
            <div class="banner-content">
              <div class="e-icons e-listen-icon"></div>
              <i>Click the below mic-button to convert your voice to text.</i>
            </div>
          </template>
          <template v-slot:footerTemplate="">
            <div class="e-footer-wrapper">
              <div
                id="assistview-footer"
                ref="assistviewFooter"
                class="content-editor"
                @input="toggleButtons"
                @keydown="handleEvent"
                contenteditable="true"
                placeholder="Click to speak or start typing..."
              ></div>
              <div class="option-container">
                <ejs-speechtotext
                  id="speechToText"
                  cssClass="e-flat"
                  ref="speechToTextObj"
                  @transcriptChanged="onTranscriptChange"
                  @onStop="onListeningStop"
                  @created="created"
                  @onError="onErrorHandler"
                ></ejs-speechtotext>
                <ejs-button
                  id="assistview-sendButton"
                  ref="assistviewSendButton"
                  @click="sendIconClicked"
                  class="e-assist-send e-icons"
                  role="button"
                ></ejs-button>
              </div>
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
      promptToolbarSettings: {
        itemClicked: (args) => {
          if (args.item.iconCss === 'e-icons e-assist-edit') {
            const assistviewFooter = document.querySelector('#assistview-footer');
            assistviewFooter.innerHTML = this.$refs.aiAssist.ej2Instances.prompts[args.dataIndex].prompt;
            this.toggleButtons();
          }
        },
      },
    };
  },
  mounted() {
    // Defer initial toggleButtons call until after mount
    this.$nextTick(() => {
      this.toggleButtons();
    });
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
      this.toggleButtons();
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
          toggleButtons();
        });
    },
    stopRespondingClick() {
      this.stopStreaming = true;
      this.toggleButtons();
    },
    onTranscriptChange(args) {
      this.$refs.assistviewFooter.innerText = args.transcript;
    },
    onListeningStop() {
      this.toggleButtons();
    },
    created() {
      this.toggleButtons();
    },
    handleEvent(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        this.sendIconClicked();
        e.preventDefault();
      }
    },
    toggleButtons() {
      const assistviewFooter = this.$refs.assistviewFooter;
      const sendButton = this.$refs.assistviewSendButton?.$el;
      const speechButton = this.$refs.speechToTextObj?.$el;
      if (!assistviewFooter || !sendButton || !speechButton) {
        return;
      }
      const hasText = assistviewFooter.innerText.trim() !== '';
      sendButton.classList.toggle('visible', hasText);
      speechButton.classList.toggle('visible', !hasText);
      if (!hasText &&(assistviewFooter.innerHTML === '<br>' || assistviewFooter.innerHTML.trim() === '')) {
        assistviewFooter.innerHTML = '';
      }
    },
    sendIconClicked(args) {
      this.$refs.aiAssist.ej2Instances.executePrompt(this.$refs.assistviewFooter.innerText);
      this.$refs.assistviewFooter.innerText = '';
    },
  },
});