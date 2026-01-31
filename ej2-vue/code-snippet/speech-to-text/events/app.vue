<template>
  <div id='container'>
    <ejs-speechtotext id="speechtotext" @transcript-changed="onTranscriptChange" @stop="onStop" @start="onStart" @error="onError" @created="onCreated" ></ejs-speechtotext>
  </div>
</template>

<script>
import { SpeechToTextComponent } from "@syncfusion/ej2-vue-inputs";
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
    onTranscriptChange: function(args) {
      //your required action here
    },
    onStart: function(args) {
      //your required action here
    },
    onStop: function(args) {
      //your required action here
    },
    onError: function(args) {
      //your required action here
    },
    onCreated: function() {
      //your required action here
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
</style>