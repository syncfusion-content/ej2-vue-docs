<template>
  <div id="container" style="height: 580px; width: 700px; margin: 0 auto;">
    <br />

    <!-- Speech feedback panel -->
    <div class="speech-feedback">
      <div class="status-line">
        <strong>Status:</strong>
        <span :class="['status', isRecording ? 'recording' : 'ready']">
          {{recordingStatus}}}
        </span>
      </div>
      <div class="transcript-line">
        <strong>Transcript:</strong>
        <span :style="{ fontStyle: transcriptIsFinal ? 'normal' : 'italic' }">
          {{ transcriptText || 'Waiting for speech input...' }}
        </span>
      </div>
      <div v-if="errorText" class="error-line">
        <strong>Error:</strong> {{ errorText }}
      </div>
    </div>

    <ejs-aiassistview id="aiAssistView" ref="aiassist" :prompt-request="onPromptRequest"
      :toolbar-settings="toolbarSettings" :speech-to-text-settings="speechToTextSettings" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { AIAssistViewComponent as EjsAiassistview } from "@syncfusion/ej2-vue-interactive-chat";

const aiassist = ref(null);

const recordingStatus = ref("Ready to record");
const isRecording = ref(false);
const transcriptText = ref("");
const transcriptIsFinal = ref(true);
const errorText = ref("");

let lastTranscript = "";

const toolbarSettings = {
  items: [{ iconCss: "e-icons e-refresh", align: "Right" }],
  itemClicked: (args) => {
    if (args.item.iconCss === "e-icons e-refresh" && aiassist.value) {
      aiassist.value.ej2Instances.prompts = [];
    }
  },
};

const speechToTextSettings = {
  enable: true,
  onStart: onSpeechStart,
  onStop: onSpeechStop,
  transcriptChanged: onTranscriptChanged,
  onError: onSpeechError
};
// Speech events
const onSpeechStart = (args) => {
  isRecording.value = true;
  recordingStatus.value = "Recording...";
  errorText.value = "";
  transcriptText.value = "Listening...";
  transcriptIsFinal.value = false;
};

const onSpeechStop = (args) => {
  isRecording.value = false;
  recordingStatus.value = "Ready to record";

  if (lastTranscript) {
    transcriptText.value = lastTranscript;
    transcriptIsFinal.value = true;
  }

  setTimeout(() => {
    lastTranscript = "";
    transcriptText.value = "";
    transcriptIsFinal.value = true;
  }, 2200);
};

const onTranscriptChanged = (args) => {
  const text =
    args.text ||
    args.value ||
    args.transcript ||
    (args.result && args.result.transcript) ||
    "";

  const isFinal =
    args.isFinal || args.final || (args.result && args.result.isFinal) || false;

  if (text) {
    lastTranscript = text;
  }

  transcriptText.value = text;
  transcriptIsFinal.value = isFinal;
};

const onSpeechError = (args) => {
  isRecording.value = false;
  recordingStatus.value = "Ready to record";
  errorText.value = "Error: " + (args.error || "Speech recognition failed");
};

const onPromptRequest = (args) => {
  setTimeout(() => {
    if (!aiassist.value || !args.prompt.trim()) return;

    const instance = aiassist.value.ej2Instances;

    const defaultResponse =
      "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.";

    instance.addPromptResponse(defaultResponse, true);
  }, 1200);
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";

.speech-feedback {
  margin-bottom: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 6px;
  font-size: 14px;
}

.status-line,
.transcript-line,
.error-line {
  margin-bottom: 8px;
}

.status {
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
}

.status.ready {
  background: #e8f5e9;
  color: #2e7d32;
}

.status.recording {
  background: #ffebee;
  color: #c62828;
  animation: pulse 1.6s infinite;
}

.error-line {
  color: #d32f2f;
  font-weight: 500;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.7;
  }

  50% {
    opacity: 1;
  }
}

#container {
  max-width: 90vw;
}
</style>