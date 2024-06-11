b<template>
  <div id="app">
  <ejs-slider id='events' :value='value' :tooltip="tooltip" :ticks="ticks" :min="min" :max="max" :renderingTicks="renderingTicks" :tooltipChange="tooltipChange"></ejs-slider>
</div>
</template>
<script setup>
import { SliderComponent as EjsSlider} from "@syncfusion/ej2-vue-inputs";

const min = 0, max = 6, value = 2;
// Assigning ticks values to percentage formatting
const ticks = { placement: 'After', largeStep: 1 };
// Assigning tooltip values to percentage formatting
const tooltip = { placement: 'Before', isVisible: true };

const renderingTicks= (args) => {
// Weekdays Array
var daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
// Customizing each ticks text into weeksdays
args.text = daysArr[parseFloat(args.value)];
};
const tooltipChange = (args) => {
// Customizing tooltip to display the Day (in numeric) of the week
args.text = 'Day ' + (Number(args.value) + 1).toString();
};
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