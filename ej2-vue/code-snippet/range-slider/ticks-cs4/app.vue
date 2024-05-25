<template>
  <div id="app">
    <ejs-slider id='minmax' :value='value' :tooltip="tooltip" :ticks="ticks" :min="min" :max="max"></ejs-slider>
  </div>
</template>
<script>

import { SliderComponent } from "@syncfusion/ej2-vue-inputs";

export default {
  name: "App",
  components: {
    "ejs-slider": SliderComponent
  },
  data() {
    return {
      ticks: { placement: 'After', largeStep: 200, smallStep: 100, showSmallTicks: true },
      tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
      // Minimum value
      min: 100,
      // Maximum value
      max: 1100,
      // Slider current value
      value: 400
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
  height: 40px;
  left: 30%;
  position: absolute;
  top: 40%;
  width: 50%;
}
</style>