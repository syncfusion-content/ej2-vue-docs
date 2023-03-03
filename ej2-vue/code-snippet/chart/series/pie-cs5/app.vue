

<template>
    <div id="app">
         <ejs-accumulationchart id="container">
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' :palettes='palettes' xName='x' yName='y'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
</template>
<script>
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

export default {
  data() {
    return {
      seriesData: [
           { x: 'Jan', y: 3, fill: '#498fff', text:'January' }, { x: 'Feb', y: 3.5, fill: '#ffa060', text: 'February' },
           { x: 'Mar', y: 7, fill: '#ff68b6', text: 'March' }, { x: 'Apr', y: 13.5, fill: '#81e2a1', text: 'April' }
            ],
         palettes: ["#E94649", "#F6B53F", "#6FAAB0", "#FF33F3","#228B22","#3399FF"],
    };
  },
  provide: {
     accumulationchart: [PieSeries]
  }
};
</script>
<style>
 #container {
     height: 350px;
 }
</style>


