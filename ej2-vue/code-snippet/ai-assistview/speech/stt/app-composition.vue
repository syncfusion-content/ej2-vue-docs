<template>
  <div class="integration-speechtotext-section">
    <ejs-aiassistview
      id="aiAssistView"
      ref="aiAssist"
      bannerTemplate="bannerTemplate"
      :prompt-request="onPromptRequest"
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

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { AIAssistViewComponent as EjsAiassistview } from '@syncfusion/ej2-vue-interactive-chat';
import { SpeechToTextComponent as EjsSpeechtotext } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { marked } from 'marked';

const azureOpenAIApiKey: '', // YOUR_AZURE_OPENAI_API_KEY
const azureOpenAIEndpoint: '', // YOUR_AZURE_OPENAI_API_ENDPOINT
const azureOpenAIApiVersion: '', // YOUR_AZURE_OPENAI_API_VERSION
const azureDeploymentName: '', // YOUR_DEPLOYMENT_NAME

const stopStreaming = false;

const toolbarSettings = {
  items: [
    {
      iconCss: 'e-icons e-refresh',
      align: 'Right',
      tooltip: 'Clear Prompts',
    },
  ],
  itemClicked: () => {
    aiAssist.value.ej2Instances.prompts = [];
    stopStreaming.value = true;
  },
};
const promptToolbarSettings = {
  itemClicked: (args) => {
    if (args.item.iconCss === 'e-icons e-assist-edit') {
      assistviewFooter.value.innerHTML = aiAssist.value.ej2Instances.prompts[args.dataIndex].prompt;
      this.toggleButtons();
    }
  },
};

const aiAssist = ref(null);
const assistviewFooter = ref(null);
const speechToTextObj = ref(null);
const assistviewSendButton = ref(null);

// Streams the AI response character by character to create a typing effect
const streamResponse = async (response) => {
  let lastResponse = '';
  const responseUpdateRate = 10;
  let i = 0;
  const responseLength = response.length;
  while (i < responseLength && !this.stopStreaming) {
    lastResponse += response[i];
    i++;
    if (i % responseUpdateRate === 0 || i === responseLength) {
      const htmlResponse = marked.parse(lastResponse);
      aiAssist.value.ej2Instances.addPromptResponse(
        htmlResponse,
        i === responseLength
      );
      aiAssist.value.ej2Instances.scrollToBottom();
    }
    await new Promise((resolve) => setTimeout(resolve, 15)); // Delay for streaming effect
  }
  toggleButtons();
};

// Handles prompt requests by sending them to the Azure OpenAI API and streaming the response
const onPromptRequest = (args) => {
    const url= azureOpenAIEndpoint.replace(/\/$/, '') +
    `/openai/deployments/${encodeURIComponent(azureDeploymentName)}/chat/completions` +
    `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;
    fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': azureOpenAIApiKey,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: args.prompt }],
      max_tokens: 150,
      stream: false,
    }),
  })
    .then(response => response.json())
    .then(reply => {
      const responseText = reply.choices[0].message.content.trim() || 'No response received.';
      stopStreaming.value = false;
      streamResponse(responseText);
    })
    .catch(error => {
      aiAssist.value.ej2Instances.addPromptResponse(
        '⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.',true);
      stopStreaming.value = true;
      toggleButtons();
    });
};

// Stops the ongoing streaming response and toggles button visibility
const stopRespondingClick = () => {
  stopStreaming.value = true;
  toggleButtons();
};

// Updates the footer input with the latest speech transcript
const onTranscriptChange = (args) => {
  assistviewFooter.value.innerText = args.transcript;
};

// Toggles button visibility when speech-to-text listening stops
const onListeningStop = () => {
  this.toggleButtons();
};

// Initializes button visibility when the speech-to-text component is created
const created = () => {
  this.toggleButtons();
};

// Handles Enter key press in the input to send the prompt without Shift
const handleEvent = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    this.sendIconClicked();
    e.preventDefault();
  }
};

// Toggles visibility of send and speech buttons based on whether the input has text
const toggleButtons = () => {
  const assistviewFooterEl = assistviewFooter.value;
  const sendButtonEl = assistviewSendButton.value?.$el;
  const speechButtonEl = speechToTextObj.value?.$el;
  if (!assistviewFooterEl || !sendButtonEl || !speechButtonEl) {
    return;
  }
  const hasText = assistviewFooterEl.innerText.trim() !== '';
  sendButtonEl.classList.toggle('visible', hasText);
  speechButtonEl.classList.toggle('visible', !hasText);
  if (!hasText && (assistviewFooterEl.innerHTML === '<br>' || assistviewFooterEl.innerHTML.trim() === '')) {
    assistviewFooterEl.innerHTML = '';
  }
};

// Executes the current prompt from the footer input and clears it
const sendIconClicked = (args) => {
  aiAssist.value.ej2Instances.executePrompt(assistviewFooter.value.innerText);
  assistviewFooter.value.innerText = '';
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>