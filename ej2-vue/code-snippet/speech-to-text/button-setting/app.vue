<template>
    <div id='container'>
        <ejs-speechtotext id="speechtotext" :buttonSettings='buttonSettings'></ejs-speechtotext>
    </div>
</template>

<script>
import { SpeechToTextComponent  } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

export default {
  components: {
    'ejs-speechtotext': SpeechToTextComponent
  },
  data() {
    return {
      buttonSettings: {
        content: 'Start Listening',
        stopContent: 'Stop Listening'
      }
    };
  },
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

#container {
    margin-top: 30px;
    padding: 30px;
}
</style>