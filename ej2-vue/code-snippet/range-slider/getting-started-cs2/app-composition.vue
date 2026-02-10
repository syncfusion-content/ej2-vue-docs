<template>
  <div id="container">
    <label class="labeltext">Default</label>
    <ejs-slider id='default' :value='minvalue'></ejs-slider>
    <label class="labeltext">MinRange</label>
    <ejs-slider id='default' :value='minvalue' :type="mintype"></ejs-slider>
    <label class="labeltext">Range</label>
    <ejs-slider id='type' :value='value' :type="type"></ejs-slider>
  </div>
</template>
<script setup>
import { SliderComponent as EjsSlider } from "@syncfusion/ej2-vue-inputs";

const value = [30, 70];
const type = 'Range';
const mintype = 'MinRange';
const minvalue = 30;

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

#container {
  height: 40px;
  left: 30%;
  position: absolute;
  top: 40%;
  width: 50%;
}
</style>