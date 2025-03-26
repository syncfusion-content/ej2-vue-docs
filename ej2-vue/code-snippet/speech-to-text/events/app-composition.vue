<template>
  <div id='container'>
    <ejs-speechtotext id="speechtotext" @transcript-changed="onTranscriptChange" @stop="onStop" @start="onStart" @error="onError" @created="onCreated" ></ejs-speechtotext>
  </div>
</template>

<script setup>
import { SpeechToTextComponent as EjsSpeechtotext } from "@syncfusion/ej2-vue-inputs";

const onTranscriptChange = (args) => {
  //your required action here
};

const onStart = (args) => {
  //your required action here
};

const onStop = (args) => {
  //your required action here
};

const onError = (args) => {
  //your required action here
};

const onCreated = () => {
  //your required action here
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