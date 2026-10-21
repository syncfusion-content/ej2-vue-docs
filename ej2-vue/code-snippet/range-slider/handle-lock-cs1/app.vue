<template>
  <div id="app">
    <ejs-slider id='default' :value='value' :limits='limits' :tooltip='tooltip' :type='type'></ejs-slider>
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
      value: [30, 70],
      tooltip: { isVisible: true },
      limits: { enabled: true, startHandleFixed: true, endHandleFixed: true },
      type: 'Range'
    };
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/slider/index.css";

#app {
  height: 40px;
  left: 30%;
  position: absolute;
  top: 40%;
  width: 50%;
}
</style>