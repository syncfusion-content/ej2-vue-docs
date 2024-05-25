<template>
  <div id="app">
    <ejs-slider id='events' :value='value' :tooltip="tooltip" :ticks="ticks" :min="min" :max="max"
      :renderingTicks="renderingTicks" :tooltipChange="tooltipChange"></ejs-slider>
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
      // Minimum value
      min: 0,
      // Maximum value
      max: 6,
      // Slider current value
      value: 2,
      // Assigning ticks data
      ticks: {
        placement: 'After',
        largeStep: 1
      },
      // Assigning tooltip data
      tooltip: {
        placement: 'Before',
        isVisible: true
      }
    };
  },
  methods: {
    renderingTicks: function (args) {
      // Weekdays Array
      var daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
      // Customizing each ticks text into weeksdays
      args.text = daysArr[parseFloat(args.value)];
    },
    tooltipChange: function (args) {
      // Customizing tooltip to display the Day (in numeric) of the week
      args.text = 'Day ' + (Number(args.value) + 1).toString();
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