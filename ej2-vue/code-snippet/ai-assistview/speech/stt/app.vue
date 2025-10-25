<template>
  <div class="integration-speechtotext-section">
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
</template>

<script>
import { AIAssistViewComponent } from '@syncfusion/ej2-vue-interactive-chat';
import { SpeechToTextComponent } from '@syncfusion/ej2-vue-inputs';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { marked } from 'marked';

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent,
    'ejs-speechtotext': SpeechToTextComponent,
    'ejs-button': ButtonComponent,
  },
  data() {
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
            this.$refs.assistviewFooter.innerHTML = this.$refs.aiAssist.ej2Instances.prompts[args.dataIndex].prompt;
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
    // Streams the AI response character by character to create a typing effect
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
    // Handles prompt requests by sending them to the Azure OpenAI API and streaming the response
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
    // Stops the ongoing streaming response and toggles button visibility
    stopRespondingClick() {
      this.stopStreaming = true;
      this.toggleButtons();
    },
    // Updates the footer input with the latest speech transcript
    onTranscriptChange(args) {
      this.$refs.assistviewFooter.innerText = args.transcript;
    },
    // Toggles button visibility when speech-to-text listening stops
    onListeningStop() {
      this.toggleButtons();
    },
    // Initializes button visibility when the speech-to-text component is created
    created() {
      this.toggleButtons();
    },
    // Handles Enter key press in the input to send the prompt without Shift
    handleEvent(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        this.sendIconClicked();
        e.preventDefault();
      }
    },
    // Toggles visibility of send and speech buttons based on whether the input has text
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
    // Executes the current prompt from the footer input and clears it
    sendIconClicked(args) {
      this.$refs.aiAssist.ej2Instances.executePrompt(this.$refs.assistviewFooter.innerText);
      this.$refs.assistviewFooter.innerText = '';
    },
  },
};
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>