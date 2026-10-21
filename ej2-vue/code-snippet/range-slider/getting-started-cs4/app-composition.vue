<template>
  <div id="container">
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
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/slider/index.css";

#container {
  color: #008cff;
  height: 40px;
  left: 30%;
  position: absolute;
  top: 40%;
  width: 50%;
}
</style>