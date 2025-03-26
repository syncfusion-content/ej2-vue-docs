import Vue from 'vue';
import { SpeechToTextPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(SpeechToTextPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="container">
      <div id="status-box-container" class="status-box inactive">
        <span>Status: <strong id="status-text">Inactive</strong></span>
      </div>
      <ejs-speechtotext id="speechtotext" listening-state="Inactive" @start="(args) => updateListeningState(args.listeningState)" @stop="(args) => updateListeningState(args.listeningState)"></ejs-speechtotext>
      <div class="waveform-container">
        <div id="waveform-item" class="waveform" style="display: none;">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <p id="instruction-text">Click the button to start listening.</p>
      </div>
    </div>
`,
 data() {
    return {
    };
  },
  methods: {
    updateListeningState: function (state) {
      document.getElementById("status-text").innerText = state;

      var statusBox = document.getElementById("status-box-container");
      var waveform = document.getElementById("waveform-item");
      var instructionText = document.getElementById("instruction-text");

      if (state === "Listening") {
        statusBox.className = "status-box listening";
        waveform.style.display = "flex";
        instructionText.innerText = "Listening... Speak now!";
      } else if (state === "Stopped") {
        statusBox.className = "status-box stopped";
        waveform.style.display = "none";
        instructionText.innerText = "Recognition Stopped.";
      } else {
        statusBox.className = "status-box inactive";
        waveform.style.display = "none";
        instructionText.innerText = "Click the button to start listening.";
      }
    }
  }
});