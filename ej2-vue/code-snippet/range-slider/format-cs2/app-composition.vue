<template>
    <div id="app">
    <ejs-slider id='format' :value='value' :min="min" :max="max" :step="step"
    :tooltip="tooltip" :ticks="ticks" ></ejs-slider>
  </div>
</template>
<script setup>

import { SliderComponent as EjsSlider } from "@syncfusion/ej2-vue-inputs";

const min = 0, max = 100, step = 1, value = 30;
// Applying currency formatting for tooltip with two decimal specifiers
const tooltip = { isVisible: true, format: 'C2' };
// Applying currency formatting for ticks with two decimal specifiers
const ticks = { placement: 'After', format: 'C2', largeStep: 20, smallStep: 10, showSmallTicks: true };

</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
   #app {
    height: 40px;
    left: 30%;
    position: absolute;
    top: 40%;
    width: 50%;
  }
</style>