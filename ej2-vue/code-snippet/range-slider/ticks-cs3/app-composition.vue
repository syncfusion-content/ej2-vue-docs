<template>
  <div id="app">
    <ejs-slider id='steps' :value='value' :tooltip="tooltip" :ticks="ticks" :step="step"></ejs-slider>
  </div>
</template>
<script setup>

import { SliderComponent as EjsSlider } from "@syncfusion/ej2-vue-inputs";

const ticks = { placement: 'After', largeStep: 20, smallStep: 10, showSmallTicks: true };
const tooltip = { placement: 'Before', isVisible: true, showOn: 'Always' };
const value = 30;
// Enables step
const step = 10;

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/slider/index.css";

#app {
  height: 40px;
  left: 30%;
  position: absolute;
  top: 40%;
  width: 50%;
}
</style>