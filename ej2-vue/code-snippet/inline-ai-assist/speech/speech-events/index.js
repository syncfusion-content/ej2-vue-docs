import Vue from 'vue';
import { InlineAIAssistPlugin } from '@syncfusion/ej2-vue-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(InlineAIAssistPlugin);

new Vue({
    el: '#app',
    template: `
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
            <button id="summarizeBtn" @click="showPopup">Summarize</button>
            <div id="editableText" contenteditable="true">Select text and click Summarize</div>
        </div>

        <ejs-inlineaiassist id="defaultInlineAssist" popup-width="500px"
            :relate-to="'#summarizeBtn'"
            :prompt-request="onPromptRequest"
            :response-settings="responseSettings"
            :speech-to-text-settings="speechToTextSettings"
            ref="defaultInlineAssist">
        </ejs-inlineaiassist>
    </div>
`,
    data() {
        return {
            isRecording: false,
            recordingStatus: 'Ready to record',
            transcriptText: '',
            transcriptIsFinal: true,
            errorText: '',
            lastTranscript: '',

            responseSettings: {
                itemSelect: this.onResponseItemSelect
            },

            speechToTextSettings: {
                enable: true,
                onStart: this.onSpeechStart,
                onStop: this.onSpeechStop,
                transcriptChanged: this.onTranscriptChanged,
                onError: this.onSpeechError
            }
        };
    },
    methods: {
        onSpeechStart(args) {
            this.isRecording = true;
            this.recordingStatus = 'Recording...';
            this.errorText = '';
            this.transcriptText = 'Listening...';
            this.transcriptIsFinal = false;
        },

        onSpeechStop(args) {
            this.isRecording = false;
            this.recordingStatus = 'Ready to record';

            if (this.lastTranscript) {
                this.transcriptText = this.lastTranscript;
                this.transcriptIsFinal = true;
            }

            setTimeout(() => {
                this.lastTranscript = '';
                this.transcriptText = '';
                this.transcriptIsFinal = true;
            }, 2200);
        },

        onTranscriptChanged(args) {
            const text =
                args.text ||
                args.value ||
                args.transcript ||
                (args.result && args.result.transcript) ||
                '';

            const isFinal =
                args.isFinal || args.final || (args.result && args.result.isFinal) || false;

            if (text) this.lastTranscript = text;

            this.transcriptText = text;
            this.transcriptIsFinal = isFinal;
        },

        onSpeechError(args) {
            this.isRecording = false;
            this.recordingStatus = 'Ready to record';
            this.errorText = 'Error: ' + (args.error || 'Speech recognition failed');
        },

        onPromptRequest() {
            const self = this;
            setTimeout(function () {
                const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
                if (self.$refs.defaultInlineAssist && self.$refs.defaultInlineAssist.addResponse) {
                    self.$refs.defaultInlineAssist.addResponse(defaultResponse);
                }
            }, 1000);
        },

        onResponseItemSelect(args) {
            const label = args && args.command && args.command.label ? args.command.label : '';
            if (label === 'Accept') {
                const editable = document.getElementById('editableText');
                if (editable && this.$refs.defaultInlineAssist && this.$refs.defaultInlineAssist.prompts) {
                    const prompts = this.$refs.defaultInlineAssist.prompts;
                    const last = prompts && prompts.length ? prompts[prompts.length - 1] : null;
                    if (last && last.response) {
                        editable.innerHTML = '<p>' + last.response + '</p>';
                    }
                }
                this.$refs.defaultInlineAssist.hidePopup();
            } else if (label === 'Discard') {
                this.$refs.defaultInlineAssist.hidePopup();
            }
        },

        showPopup() {
            if (this.$refs.defaultInlineAssist && this.$refs.defaultInlineAssist.showPopup) {
                this.$refs.defaultInlineAssist.showPopup();
            }
        }
    },
    mounted() {
        if (this.$refs.defaultInlineAssist && this.$refs.defaultInlineAssist.showPopup) {
            this.$refs.defaultInlineAssist.showPopup();
        }
    }
});