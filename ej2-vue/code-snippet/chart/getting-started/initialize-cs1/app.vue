

<template>
  <div id="app">
      <ejs-chart id="container"> </ejs-chart>
  </div>
</template>
<script>
import Vue from 'vue';
import { ChartPlugin } from '@syncfusion/ej2-vue-charts';

Vue.use(ChartPlugin);
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
 #container{
   height: 350px;
 }
</style>


