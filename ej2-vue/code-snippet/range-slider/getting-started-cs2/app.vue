


<template>
    <div id="app">
     <label class="labeltext">Default</label>
     <ejs-slider id='default' :value='minvalue'></ejs-slider>
      <label class="labeltext">MinRange</label>
      <ejs-slider id='default' :value='minvalue' :type="mintype"></ejs-slider>
     <label class="labeltext">Range</label>
    <ejs-slider id='type' :value='value' :type="type"></ejs-slider>
  </div>
</template>
<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);

export default {
  data() {
    return {
       value: [30, 70],
       type: 'Range',
       mintype: 'MinRange',
       minvalue: 30
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



