<template>
  <div id="app">
    <ejs-slider id='orientation' :value='value' :orientation="orientation"></ejs-slider>
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
      // vertical orientation
      orientation: 'Vertical',
      value: 30
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