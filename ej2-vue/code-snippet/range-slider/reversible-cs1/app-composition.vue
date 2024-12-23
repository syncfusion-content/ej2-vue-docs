<template>
  <div id="app">
    <ejs-slider id='reverse' :orientation="orientation"  :value="value" :type="type" :min="min" :max="max" :tooltip="tooltip"
      :ticks="ticks"></ejs-slider>
  </div>
</template>
<script setup>

import { SliderComponent as EjsSlider } from "@syncfusion/ej2-vue-inputs";

const ticks = { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true };
const tooltip = { placement: 'Before', isVisible: true, showOn: 'Always' };
const type = 'Range';
// vertical orientation
const orientation = 'Vertical';
// Set maximum value to min
const min = 100;
// Set minimum value to max
const max = 0;
// Slider current value
const value: [30, 70]

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

#app {
  color: #008cff;
  height: 340px;
  left: 30%;
  position: absolute;
  width: 50%;
}
</style>