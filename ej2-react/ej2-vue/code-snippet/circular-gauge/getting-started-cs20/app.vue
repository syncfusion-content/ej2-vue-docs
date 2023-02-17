


<template>
 <div id="app">
  <div class='wrapper'>
    <ejs-circulargauge  >
    <e-axes>
      <e-axis showLastLabel="true" minimum= 0 maximum= 170 startAngle= 210 endAngle= 150 >
    </e-axis>
    </e-axes>
    </ejs-circulargauge>
  </div>
</div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
export default {
    data: function () {
return {}
    }
};
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-vue-circulargauge/styles/material.css";
  .wrapper {
    max-width: 300px;
    margin: 0 auto;
  }
</style>


