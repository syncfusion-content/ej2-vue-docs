

<template>
    <div id="app">
    <ejs-slider id='default' :value='value'></ejs-slider>
  </div>
</template>
<script>
import { SliderComponent } from "@syncfusion/ej2-vue-inputs";

export default {
  components: {
    'ejs-slider': SliderComponent
  },
  data() {
    return {
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
    height: 40px;
    left: 30%;
    position: absolute;
    top: 40%;
    width: 50%;
  }
</style>



