<template>
  <div id="app">
    <ejs-slider id='api' :value='value' :min="min" :max="max" :step="step" :tooltip="tooltip" :ticks="ticks"></ejs-slider>
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
      min: 0, max: 1, value: 0.3, step: 0.01,
      // Assigning ticks values to percentage formatting
      ticks: { placement: 'After', largeStep: .2, smallStep: .1, showSmallTicks: true, format: 'P0' },
      // Assigning tooltip values to percentage formatting
      tooltip: { placement: 'Before', isVisible: true, showOn: 'Always', format: 'P0' }
    }
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