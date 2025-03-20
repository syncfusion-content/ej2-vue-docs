<template>
    <div id='container'>
      <ejs-speechtotext id="speechtotext" @transcriptChanged="onTranscriptChange" :buttonSettings='buttonSettings' enable-rtl="true"></ejs-speechtotext>
      <ejs-textarea ref="textareaObj" rows="5" cols="50" value="" resize-mode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
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
      buttonSettings: {
        content: 'Start Listening',
        stopContent: 'Stop Listening'
      }
    };
  },
  methods: {
    onTranscriptChange: function(args) {
      this.$refs.textareaObj.ej2Instances.value = args.transcript;
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