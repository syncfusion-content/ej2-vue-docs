<template>
    <div id='container'>
        <ejs-speechtotext id="speechtotext" @transcriptChanged="onTranscriptChange" :buttonSettings='buttonSettings'></ejs-speechtotext>
        <ejs-textarea ref="textareaObj" :rows="5" :cols="50" v-model="text" resize-mode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
    </div>
</template>

<script setup>
  import { ref } from "vue"
  import { SpeechToTextComponent as EjsSpeechtotext } from "@syncfusion/ej2-vue-inputs";
  import type { TranscriptChangedEventArgs } from "@syncfusion/ej2-vue-inputs";
  import { TextAreaComponent as EjsTextarea} from "@syncfusion/ej2-vue-inputs";
  const textareaObj = ref<InstanceType<typeof EjsTextarea> | null>(null);
  const text = ref("");
  const buttonSettings = {
    content: 'Start Listening',
    stopContent: 'Stop Listening'
  }
  const onTranscriptChange = (args: TranscriptChangedEventArgs) => {
    text.value = args.transcript;
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