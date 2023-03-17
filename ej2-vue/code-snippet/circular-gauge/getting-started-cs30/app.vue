


<template>
    <div id="app">
      <div class='wrapper'>
         <ejs-circulargauge width='80%' height='50%'></ejs-circulargauge>
      </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin } from '@syncfusion/ej2-vue-circulargauge';

Vue.use(CircularGaugePlugin);
export default {}
</script>
<style>
  .wrapper {
    max-width: 300px;
    margin: 0 auto;
  }
</style>



