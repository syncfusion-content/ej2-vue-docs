<template>
  <div id="app">
    <button type="button" id="btn" class="e-control e-btn" v-on:click="onClick">Button</button>
    <div id="wrap">
      <ejs-slider id="slider" :min="minVal" :max="maxVal" :value="value" :tooltip="tooltip" :ticks="ticks"
        showButtons="true" :step="stepVal" v-on:renderingTicks="onRenderingTicks"
        v-on:tooltipChange="onTooltipChange"></ejs-slider>
    </div>
  </div>
</template>

<script>

import { SliderComponent } from "@syncfusion/ej2-vue-inputs";

export default {
  name: "App",
  components: {
    "ejs-slider": SliderComponent
  },
  data: function () {
    return {
      tooltip: { placement: "Before", isVisible: true },
      minVal: new Date(2013, 6, 13, 11).getTime(),
      maxVal: new Date(2013, 6, 13, 17).getTime(),
      value: new Date(2013, 6, 13, 13).getTime(),
      stepVal: 3600000,
      // Slider ticks customization
      ticks: { placement: "After", largeStep: 2 * 3600000 }
    };
  },
  methods: {
    onTooltipChange(args) {
      let totalMiliSeconds = Number(args.text);
      let custom = { hour: "2-digit", minute: "2-digit" };
      args.text = new Date(totalMiliSeconds).toLocaleTimeString(
        "en-us",
        custom
      );
    },
    onRenderingTicks(args) {
      let totalMiliSeconds = Number(args.value);
      let custom = { hour: "2-digit", minute: "2-digit" };
      args.text = new Date(totalMiliSeconds).toLocaleTimeString(
        "en-us",
        custom
      );
    },
    onClick: function () {
      let slider = document.getElementById("wrap");
      let ticks = document.getElementById("slider");
      slider.style.display = "block";
      ticks.ej2_instances[0].refresh();
    }
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

#app {
  height: 40px;
  position: absolute;
  width: 98%;
}

#wrap {
  box-sizing: border-box;
  height: 260px;
  margin: 0 auto;
  padding: 30px 10px;
  width: 460px;
  display: none;
}
</style>