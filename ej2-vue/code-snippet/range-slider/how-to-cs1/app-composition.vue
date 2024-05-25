<template>
  <div id="app">
    <div class="wrap">
      <ejs-slider id="ticks" :min="minVal" :max="maxVal" :value="value" :tooltip="tooltip" :ticks="ticks"
        showButtons="true" :step="stepVal" v-on:renderingTicks="onRenderingTicks"
        v-on:tooltipChange="onTooltipChange"></ejs-slider>
    </div>
  </div>
</template>
<script setup>

import { SliderComponent as EjsSlider } from "@syncfusion/ej2-vue-inputs";

const tooltip = { placement: "Before", isVisible: true };
const minVal = new Date("2013-06-13").getTime();
const maxVal = new Date("2013-06-21").getTime();
const value = new Date("2013-06-15").getTime();
const stepVal = 86400000;
// Slider ticks customization
const ticks = { placement: "After", largeStep: 2 * 86400000 };

const onTooltipChange = (args) => {
  let totalMiliSeconds = Number(args.text);
  // Convert the current milliseconds to the respective date in desired format
  let custom = { year: "numeric", month: "short", day: "numeric" };
  args.text = new Date(totalMiliSeconds).toLocaleDateString(
    "en-us",
    custom
  );
};
const onRenderingTicks = (args) => {
  let totalMiliSeconds = Number(args.value);
  // Convert the current milliseconds to the respective date in desired format
  let custom = { year: "numeric", month: "short", day: "numeric" };
  args.text = new Date(totalMiliSeconds).toLocaleDateString(
    "en-us",
    custom
  );
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";

#app {
  height: 40px;
  position: absolute;
  width: 98%;
}

.wrap {
  box-sizing: border-box;
  height: 260px;
  margin: 0 auto;
  padding: 30px 10px;
  width: 460px;
}
</style>