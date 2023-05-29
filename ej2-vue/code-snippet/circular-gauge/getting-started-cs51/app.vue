


<template>
<div id="app">
    <div class='wrapper'>
    <ejs-circulargauge>
    <e-axes>
    <e-axis :ranges='ranges'></e-axis>
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
        return {
            ranges: [{
             start: 40,
             end: 80
        }]
        }
    }
};
</script>
<style>
  .wrapper {
    max-width: 300px;
    margin: 0 auto;
  }
</style>


