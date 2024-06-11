<template>
  <div id='app'>
    <div class="e-btn-group e-vertical">
      <div class='e-btn-group'>
        <ejs-button content='Cut'></ejs-button>
        <ejs-button content='Copy'></ejs-button>
        <ejs-splitbutton :items='items' content='Paste'></ejs-splitbutton>
      </div>
    </div>
  </div>
</template>
<script setup>

import { SplitButtonComponent as EjsSplitbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const items = [
  {
    text: 'Paste'
  },
  {
    text: 'Paste Text'
  },
  {
    text: 'Paste Special'
  }];
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';

#app {
  margin: 20px;
}
</style>