<template>
  <div id="app">
    <ejs-slider id='default' :value='value' :limits='limits' :tooltip='tooltip' :type='type'></ejs-slider>
  </div>
</template>
<script setup>

import { SliderComponent as EjsSlider } from "@syncfusion/ej2-vue-inputs";

const value = [30, 70];
const tooltip = { isVisible: true };
const limits = { enabled: true, minStart: 10, minEnd: 40, maxStart: 60, maxEnd: 90 };
const type = 'Range';

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