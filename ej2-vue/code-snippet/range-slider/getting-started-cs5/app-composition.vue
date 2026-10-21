<template>
  <div id="container">
    <ejs-slider id='buttons' :value='value' :showButtons="showButtons" :type="type"></ejs-slider>
  </div>
</template>
<script setup>
import { SliderComponent as EjsSlider } from "@syncfusion/ej2-vue-inputs";

// Enable the button option in Slider
const showButtons = true;
const value = [30, 70];
const type = 'Range';
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