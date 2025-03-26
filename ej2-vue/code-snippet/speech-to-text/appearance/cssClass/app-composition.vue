<template>
  <div id='container'>
    <ejs-speechtotext id="speechtotext" @transcript-changed="onTranscriptChange" css-class="customSpeechBtn"></ejs-speechtotext>
    <ejs-textarea v-model="textareaValue" rows="5" cols="50" resizeMode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpeechToTextComponent as EjsSpeechtotext, TextAreaComponent as EjsTextarea } from "@syncfusion/ej2-vue-inputs";

const textareaValue = ref('');

const onTranscriptChange = (args) => {
  textareaValue.value = args.transcript;
};

</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

  #container {
    margin: 50px auto;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .e-speech-to-text.customSpeechBtn {
    background-color: #ff6347;
    color: #fff;
    border-radius: 5px;
  }

  .e-speech-to-text.customSpeechBtn:hover,
  .e-speech-to-text.customSpeechBtn:focus {
    background-color: #ff4500;
  }

</style>