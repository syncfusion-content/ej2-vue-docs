<template>
    <div id='container'>
        <ejs-speechtotext id="speechtotext"></ejs-speechtotext>
    </div>
</template>

<script>
import { SpeechToTextComponent  } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

export default {
  components: {
    'ejs-speechtotext': SpeechToTextComponent
  }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

#container {
    margin-top: 30px;
    padding: 30px;
}
</style>