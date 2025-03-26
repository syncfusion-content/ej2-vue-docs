<template>
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
</template>

<script>
import { SpeechToTextComponent  } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

export default {
  components: {
    "ejs-speechtotext": SpeechToTextComponent
  },
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
}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';


  .waveform-container {
    margin-top: 20px;
    font-weight: bold;
  }

  .waveform {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    gap: 5px;
  }

  .waveform span {
    display: block;
    width: 6px;
    height: 20px;
    background: #28a745;
    animation: wave-animation 1.2s infinite ease-in-out;
  }

  .waveform span:nth-child(1) {
    animation-delay: 0s;
  }

  .waveform span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .waveform span:nth-child(3) {
    animation-delay: 0.4s;
  }

  .waveform span:nth-child(4) {
    animation-delay: 0.6s;
  }

  .waveform span:nth-child(5) {
    animation-delay: 0.8s;
  }

  @keyframes wave-animation {
    0%, 100% {
        height: 10px;
    }

    50% {
        height: 30px;
    }
  }

  #container {
    width: 400px;
    text-align: center;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    background: #fff;
  }

  .status-box {
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 40px;
    font-weight: bold;
  }

  .status-box.listening {
    background-color: #d1e7dd;
    color: #0f5132;
  }

  .status-box.stopped {
    background-color: #f8d7da;
    color: #842029;
  }

  .status-box.inactive {
    background-color: #e2e3e5;
    color: #6c757d;
  }

  .visual-indicator {
    margin-top: 20px;
  }

</style>