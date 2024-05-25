<template>
  <div id="app">
    <div>Default Slider</div>
    <ejs-slider id='default' v-model='value'></ejs-slider>
    <div>Min Range Slider</div>
    <ejs-slider id='minRange' type='MinRange' v-model='value'></ejs-slider>
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
      value: 30,
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