<template>
  <div id="app">
    <ejs-slider id='tooltip' :value='value' :tooltip="tooltip" :type="type"></ejs-slider>
  </div>
</template>
<script setup>
import { SliderComponent as EjsSlider } from "@syncfusion/ej2-vue-inputs";

// Slider tooltip
const tooltip = { placement: 'After', isVisible: true, showOn: 'Always' };
const value = 30;
const type = 'MinRange';
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

#app {
  color: #008cff;
  height: 40px;
  left: 30%;
  position: absolute;
  top: 40%;
  width: 50%;
}
</style>