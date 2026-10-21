<template>
  <div id="container">
    <ejs-slider id='default' :value='value'></ejs-slider>
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
      value: 30
    };
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/slider/index.css";

#container {
  color: #008cff;
  height: 40px;
  left: 30%;
  position: absolute;
  top: 40%;
  width: 50%;
}
</style>