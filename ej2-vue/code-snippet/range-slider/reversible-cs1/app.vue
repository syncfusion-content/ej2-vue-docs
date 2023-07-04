


<template>
    <div id="app">
    <ejs-slider id='reverse' :orientation="orientation" :type="type" :min="min" :max="max" :tooltip="tooltip" :ticks="ticks" ></ejs-slider>
  </div>
</template>
<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);

export default {
  data() {
    return {
        ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
        tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
        type: 'Range',
        // vertical orientation
        orientation: 'Vertical',
        // Set maximum value to min
        min: 100,
        // Set minimum value to max
        max: 0,
        // Slider current value
        value: [30, 70]
    };
  }
}
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



