<template>
  <div id='container'>
    <ejs-speechtotext id="speechtotext" ref="speechToTextInstance" v-model="transcript" @transcriptChanged="onTranscriptChange"></ejs-speechtotext>
    <ejs-textarea v-model="transcript" rows="5" cols="50" resizeMode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpeechToTextComponent as EjsSpeechtotext, TextAreaComponent as EjsTextarea } from "@syncfusion/ej2-vue-inputs";

const transcript = ref('Hi, hello! How are you?');
const speechToTextInstance = ref(null);

const onTranscriptChange = (args) => {
  transcript.value = speechToTextInstance.value.ej2Instances.transcript;
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
</style>