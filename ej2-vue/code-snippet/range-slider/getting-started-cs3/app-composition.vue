<template>
  <div id="app">
    <ejs-slider id='orientation' :value='value' :orientation="orientation"></ejs-slider>
  </div>
</template>
<script setup>
import { SliderComponent as EjsSlider } from "@syncfusion/ej2-vue-inputs";

// vertical orientation
const orientation = 'Vertical';
const value = 30;

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/slider/index.css";

#app {
  color: #008cff;
  height: 340px;
  left: 30%;
  position: absolute;
  width: 50%;
}
</style>