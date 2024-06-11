<template>
<div class='wrap'>
    <h4>Choose Color</h4>
    <ejs-colorpicker id="element" :change="onChange"></ejs-colorpicker>
</div>
</template>

<script setup>

import { ColorPickerComponent as EjsColorpicker } from '@syncfusion/ej2-vue-inputs';
import { enableRipple } from '@syncfusion/ej2-base';
import { onMounted } from 'vue';

enableRipple(true);

const onChange = (args) => {
  document.querySelector('.e-colorpicker-wrapper .e-selected-color').style.borderBottomColor = args.currentValue.rgba;
};

onMounted(() => {
  var previewIcon = document.querySelector('.e-colorpicker-wrapper .e-selected-color');
  previewIcon.classList.add("e-icons");
});
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
  margin: 0 auto;
  width: 300px;
  text-align: center;
}

/* Icon customization  */
.e-colorpicker-wrapper #element+.e-split-btn-wrapper .e-split-btn .e-selected-color {
  background: none;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  width: 14px;
  margin: 0px 2px;
  border-bottom-color: #008000;
}
.e-colorpicker-wrapper #element+.e-split-btn-wrapper .e-split-btn .e-selected-color .e-split-preview {
  display: none;
}

.e-colorpicker-wrapper #element+.e-split-btn-wrapper .e-split-btn .e-selected-color::before {
  content: '\e35c';
}
</style>