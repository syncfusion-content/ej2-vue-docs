<template>
    <div id='container'>
      <ejs-speechtotext id="speechtotext" @transcriptChanged="onTranscriptChange" css-class="customSpeechBtn"></ejs-speechtotext>
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