

<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Candle' xName='x' high='high' low='low'
                 open='open' close='close' name='SHIRPUR-G' bearFillColor= '#e56590' bullFillColor= '#f8b883' :enableSolidCandles='enableSolidCandles'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, CandleSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData: [
            { x: 'Jan', open: 120, high: 160, low: 100, close: 140 },
            { x: 'Feb', open: 150, high: 190, low: 130, close: 170 },
            { x: 'Mar', open: 130, high: 170, low: 110, close: 150 },
            { x: 'Apr', open: 160, high: 180, low: 120, close: 140 },
            { x: 'May', open: 150, high: 170, low: 110, close: 130 }
              ],
        primaryXAxis: {
           title: 'Date',
           valueType: 'Category',
        },
        primaryYAxis: {
            title: 'Price in Dollar', minimum: 100, maximum: 200, interval: 20,
            },
      enableSolidCandles: true,
      title: "Financial Analysis"
    };
  },
  provide: {
    chart: [CandleSeries, Category]
  }
};
</script>
<style>
 #container {
   height: 350px;
 }
</style>



