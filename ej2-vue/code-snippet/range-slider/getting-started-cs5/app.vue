<template>
  <div id="container">
    <ejs-slider id='buttons' :value='value' :showButtons="showButtons" :type="type"></ejs-slider>
  </div>
</template>
<script>
import { SliderComponent } from "@syncfusion/ej2-vue-inputs";

export default {
  name: "container",
  components: {
    "ejs-slider": SliderComponent
  },
  data() {
    return {
      // Enable the button option in Slider
      showButtons: true,
      value: [30, 70],
      type: 'Range'
    };
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/slider/index.css";

#app {
  color: #008cff;
  height: 40px;
  left: 30%;
  position: absolute;
  top: 40%;
  width: 50%;
}
</style>