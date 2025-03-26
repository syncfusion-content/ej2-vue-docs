<template>
  <div id='container'>
    <ejs-speechtotext id="speechtotext" ref="speechToTextInstance" @transcript-changed="onTranscriptChange" v-model="transcript"></ejs-speechtotext>
    <ejs-textarea v-model="transcript" rows="5" cols="50" resizeMode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
  </div>
</template>

<script>
import { SpeechToTextComponent, TextAreaComponent  } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

export default {
  components: {
    "ejs-speechtotext": SpeechToTextComponent,
    "ejs-textarea": TextAreaComponent
  },
  data() {
    return {
      transcript: 'Hi, hello! How are you?'
    };
  },
  methods: {
    onTranscriptChange: function(args) {
      this.transcript = this.$refs.speechToTextInstance.ej2Instances.transcript;
    }
  }
}
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