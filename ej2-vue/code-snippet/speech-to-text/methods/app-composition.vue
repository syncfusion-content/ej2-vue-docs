<template>
  <div id='container'>
    <div class="actions">
      <button @click="startRecognition">Start Listening</button>
      <button @click="stopRecognition">Stop Listening</button>
    </div>
    <ejs-speechtotext id="speechtotext" ref="speechToTextInstance" @transcriptChanged="onTranscriptChange" ></ejs-speechtotext>
    <ejs-textarea v-model="textareaValue" rows="5" cols="50" resizeMode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SpeechToTextComponent as EjsSpeechtotext, TextAreaComponent as EjsTextarea } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const textareaValue = ref('');
const speechToTextInstance = ref(null);

const startRecognition = () => {
  speechToTextInstance.value.startListening();
};

const stopRecognition = () => {
  speechToTextInstance.value.stopListening();
};

const onTranscriptChange = (args) => {
  textareaValue.value = args.transcript;
};

</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';

  #container {
    margin: 50px auto;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>