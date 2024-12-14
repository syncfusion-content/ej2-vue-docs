<template>
  <div id="app">
    <ejs-accumulationchart id="container" focusBorderColor='#FF0000' focusBorderWidth=3 focusBorderMargin=5>
      <e-accumulationchart-accessibility accessibilityDescription="Pie chart representing the distribution of data through mobile browsers." accessibilityRole='chart'></e-accumulationchart-accessibility>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' xName='x' yName='y'> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { AccumulationChartComponent as EjsAccumulationchart, AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries, PieSeries, AccumulationAnnotation } from "@syncfusion/ej2-vue-charts";


const seriesData = [{ x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 }, { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 }, { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
{ x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }];


provide('accumulationchart', [AccumulationAnnotation, PieSeries]);

</script>
<style>
#container {
  height: 350px;
}
</style>