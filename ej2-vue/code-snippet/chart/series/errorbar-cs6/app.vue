

<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='India' width=2 :marker='marker' :errorBar='errorBar'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, LineSeries, Category, ErrorBar } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData: [
            { x: 2006, y: 7.8 }, { x: 2007, y: 7.2 },
            { x: 2008, y: 6.8 }, { x: 2009, y: 10.7 },
            { x: 2010, y: 10.8 }, { x: 2011, y: 9.8 }
              ],
        primaryXAxis: {
           minimum: 2005, maximum: 2012, interval: 1,
            title: 'Year'
        },
        errorBar: { visible: true, errorBarCap:{ length:10, width:10, color:'#0000ff' } },
        marker: {
            visible: true
        },
      title: "Olympic Medals"
    };
  },
  provide: {
    chart: [LineSeries, Category, ErrorBar]
  }
};
</script>
<style>
 #container {
   height: 350px;
 }
</style>


