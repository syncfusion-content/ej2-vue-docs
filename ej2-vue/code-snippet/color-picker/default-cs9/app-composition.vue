<template>
  <div class='wrap'>
    <h4>Choose Color</h4>
    <ejs-colorpicker id="element" type="text" class="e-input"></ejs-colorpicker>
  </div>
</template>

<script setup>

import { ColorPickerComponent as EjsColorpicker } from '@syncfusion/ej2-vue-inputs';
import { onMounted } from 'vue';

onMounted(() => {
  var target = document.getElementById("element");
  target.nextElementSibling.insertBefore(target, target.nextElementSibling.children[1]);
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

/* Input element customization */
.e-colorpicker-wrapper .e-split-btn-wrapper #element.e-input {
  height: 16px;
  margin: 0;
  opacity: 1;
  position: initial;
  width: 75px;
}

/* To hide primary button */
.e-colorpicker-wrapper .e-split-btn-wrapper .e-split-btn {
  display: none;
}

/* Secondary button customization */
.e-colorpicker-wrapper .e-split-btn-wrapper .e-btn.e-dropdown-btn {
  background: transparent;
  border-color: transparent;
  border-bottom-color: rgba(0, 0, 0, 0.42);
}

.e-colorpicker-wrapper .e-split-btn-wrapper .e-input:focus+.e-btn.e-dropdown-btn {
  padding-bottom: 3px;
  border-bottom-width: 2px;
  border-bottom-color: #e3165b;
}

.e-colorpicker-wrapper .e-split-btn-wrapper .e-btn.e-dropdown-btn .e-caret {
  transform: rotate(0deg);
  transition: transform 200ms ease-in-out;
}

.e-colorpicker-wrapper .e-split-btn-wrapper .e-btn.e-dropdown-btn.e-active .e-caret {
  transform: rotate(180deg);
}
</style>