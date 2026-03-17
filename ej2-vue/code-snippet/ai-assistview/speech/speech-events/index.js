import Vue from "vue";
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
  el: "#app",
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

      <ejs-aiassistview
        id="aiAssistView"
        ref="aiassist"
        :prompt-request="onPromptRequest"
        :toolbar-settings="toolbarSettings"
        :speech-to-text-settings="speechToTextSettings"
        show-clear-button="true"
      />
    </div>
  `,

  data: function () {
    return {
      isRecording: false,
      recordingStatus: "Ready to record",
      transcriptText: "",
      transcriptIsFinal: true,
      errorText: "",
      lastTranscript: "",

      toolbarSettings: {
        items: [{ iconCss: "e-icons e-refresh", align: "Right" }],
        itemClicked: this.toolbarItemClicked,
      },

      speechToTextSettings: {
        enable: true,
        onStart: this.onSpeechStart,
        onStop: this.onSpeechStop,
        transcriptChanged: this.onTranscriptChanged,
        onError: this.onSpeechError,
      },
    };
  },

  methods: {
    onSpeechStart(args) {
      this.isRecording = true;
      this.recordingStatus = "Recording...";
      this.errorText = "";
      this.transcriptText = "Listening...";
      this.transcriptIsFinal = false;
    },

    onSpeechStop(args) {
      this.isRecording = false;
      this.recordingStatus = "Ready to record";

      if (this.lastTranscript) {
        this.transcriptText = this.lastTranscript;
        this.transcriptIsFinal = true;
      }

      setTimeout(() => {
        this.lastTranscript = "";
        this.transcriptText = "";
        this.transcriptIsFinal = true;
      }, 2200);
    },

    onTranscriptChanged(args) {
      const text =
        args.text ||
        args.value ||
        args.transcript ||
        (args.result && args.result.transcript) ||
        "";

      const isFinal =
        args.isFinal || args.final || (args.result && args.result.isFinal) || false;

      if (text) this.lastTranscript = text;

      this.transcriptText = text;
      this.transcriptIsFinal = isFinal;
    },

    onSpeechError(args) {
      this.isRecording = false;
      this.recordingStatus = "Ready to record";
      this.errorText = "Error: " + (args.error || "Speech recognition failed");
    },

    onPromptRequest(args) {
      setTimeout(() => {
        const instance = this.$refs.aiassist.ej2Instances;

        if (!args.prompt.trim()) return;

        const defaultResponse =
          "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.";

        instance.addPromptResponse(defaultResponse, true);
      }, 1200);
    },

    toolbarItemClicked(args) {
      if (args.item.iconCss === "e-icons e-refresh") {
        const instance = this.$refs.aiassist.ej2Instances;
        instance.prompts = [];
      }
    },
  },
});