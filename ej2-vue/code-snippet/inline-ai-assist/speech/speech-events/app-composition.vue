<template>
    <div id="container" style="height: 580px; width: 700px; margin: 0 auto;">
        <br />
        <div class="speech-feedback">
            <div class="status-line">
                <strong>Status:</strong>
                <span :class="['status', isRecording ? 'recording' : 'ready']">
                    {{ recordingStatus }}
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

        <div class="toolbar-row">
            <button id="summarizeBtn" class="e-btn e-primary" @click="showPopup">Summarize</button>
            <div id="editableText" contenteditable="true">Select text and click Summarize</div>
        </div>

        <ejs-inlineaiassist id="defaultInlineAssist"
            popup-width="500px"
            :relate-to="'#summarizeBtn'"
            :prompt-request="onPromptRequest"
            :response-settings="responseSettings"
            :speech-to-text-settings="speechToTextSettings"
            ref="defaultInlineAssist">
        </ejs-inlineaiassist>
    </div>
</template>

<script setup>
import { InlineAIAssistComponent as EjsInlineaiassist } from '@syncfusion/ej2-vue-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';
import { ref, reactive, onMounted } from 'vue';

enableRipple(true);

const defaultInlineAssist = ref(null);

const recordingStatus = ref('Ready to record');
const isRecording = ref(false);
const transcriptText = ref('');
const transcriptIsFinal = ref(true);
const errorText = ref('');
const listeningState = ref('Inactive');

let lastTranscript = '';

const responseSettings = reactive({
    itemSelect: (args) => {
        const label = args && args.command && args.command.label ? args.command.label : '';
        if (label === 'Accept') {
            const editable = document.getElementById('editableText');
            if (editable && defaultInlineAssist.value && defaultInlineAssist.value.prompts) {
                const prompts = defaultInlineAssist.value.prompts;
                const last = prompts && prompts.length ? prompts[prompts.length - 1] : null;
                if (last && last.response) {
                    editable.innerHTML = '<p>' + last.response + '</p>';
                }
            }
            defaultInlineAssist.value.hidePopup();
        } else if (label === 'Discard') {
            defaultInlineAssist.value.hidePopup();
        }
    }
});

// Speech events - declared first so they are available to speechToTextSettings below
function onSpeechStart(args) {
    listeningState.value = (args && args.listeningState) || 'Listening';
    isRecording.value = true;
    recordingStatus.value = 'Recording...';
    errorText.value = '';
    transcriptText.value = 'Listening...';
    transcriptIsFinal.value = false;
}

function onSpeechStop(args) {
    // Stop -> return to starting state immediately
    listeningState.value = (args && args.listeningState) || 'Stopped';
    isRecording.value = false;
    recordingStatus.value = 'Ready to record';
    transcriptIsFinal.value = true;

    if (lastTranscript) {
        transcriptText.value = lastTranscript;
    } else {
        transcriptText.value = '';
    }

    // Clear transient transcript after a short delay so the UI settles
    setTimeout(() => {
        lastTranscript = '';
        transcriptText.value = '';
        transcriptIsFinal.value = true;
        listeningState.value = 'Inactive';
    }, 2200);
}

function onTranscriptChanged(args) {
    const text =
        args.text ||
        args.value ||
        args.transcript ||
        (args.result && args.result.transcript) ||
        '';

    const isFinal = !(args && args.isInterimResult);

    if (text) {
        lastTranscript = text;
    }

    transcriptText.value = text;
    transcriptIsFinal.value = isFinal;
}

function onSpeechError(args) {
    listeningState.value = 'Inactive';
    isRecording.value = false;
    recordingStatus.value = 'Ready to record';
    errorText.value = 'Error: ' + ((args && (args.error || args.errorMessage)) || 'Speech recognition failed');
}

const speechToTextSettings = reactive({
    enable: true,
    onStart: onSpeechStart,
    onStop: onSpeechStop,
    transcriptChanged: onTranscriptChanged,
    onError: onSpeechError
});

const onPromptRequest = () => {
    setTimeout(() => {
        const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        if (defaultInlineAssist.value && defaultInlineAssist.value.addResponse) {
            defaultInlineAssist.value.addResponse(defaultResponse);
        }
    }, 1000);
};

const showPopup = () => {
    if (defaultInlineAssist.value && defaultInlineAssist.value.showPopup) {
        defaultInlineAssist.value.showPopup();
    }
};

onMounted(() => {
    if (defaultInlineAssist.value && defaultInlineAssist.value.showPopup) {
        defaultInlineAssist.value.showPopup();
    }
});
</script>
<style>
@import '@syncfusion/ej2-tailwind3-theme/styles/inline-ai-assist/index.css';
@import '@syncfusion/ej2-tailwind3-theme/styles/speech-to-text/index.css';

#editableText {
    box-sizing: border-box;
    width: 100%;
    min-height: 50px;
    max-height: 50px;
    overflow-y: auto;
    font-size: 16px;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid;
}

.speech-feedback {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px;
  margin: 0 auto 12px;
  width: 650px;
  background: #fafafa;
}

#container {
  max-width: 90vw;
}
</style>
