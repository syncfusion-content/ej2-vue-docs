<template>
  <div>
    <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
    <ejs-speeddial id='speeddial' openIconCss='e-icons e-edit' content="Edit" :itemTemplate="itemTemplateContent"
      target='#targetElement' :items='items'>
    </ejs-speeddial>
  </div>
</template>

<script setup>

import { SpeedDialComponent as EjsSpeeddial } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

const itemTemplateContent = "<div class='itemlist'><span class='icon ${iconCss}' style='padding:3px'></span><span class='text' style='padding:0 5px'>${text}</span></div>";
const items = [
  { iconCss: 'e-icons e-cut', text: 'Cut' },
  { iconCss: 'e-icons e-copy', text: 'Copy' },
  { iconCss: 'e-icons e-paste', text: 'Paste' }
];
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

.itemlist .text {
  padding: 0 5px;
}

.e-speeddial-li .itemlist {
  display: inherit;
  width: 100%;
  border: 1px solid transparent;
  align-items: center;
  padding: 5px;
  border-radius: 500px;
  background-color: rgba(104, 99, 104, 0.1);
  box-shadow: 0 0 4px grey;
}

.e-speeddial-li .itemlist:hover {
  background-color: rgb(224, 224, 224);
}
</style>