<template>
  <div id="app">
    <ejs-accumulationchart id="container" :title='title' :legendSettings='legendSettings'>
      <e-accumulation-series-collection>
        <e-accumulation-series :accessibility='accessibility' :dataSource='seriesData' type='Pyramid' xName='x' yName='y'> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script>

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PyramidSeries, AccumulationLegend } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    "ejs-accumulationchart": AccumulationChartComponent,
    "e-accumulation-series-collection": AccumulationSeriesCollectionDirective,
    "e-accumulation-series": AccumulationSeriesDirective
  },
  data() {
    return {
      seriesData: [
        { x: 'Australia', y: 20 },
        { x: 'France',    y: 22 },
        { x: 'China',     y: 23 },
        { x: 'India',     y: 24 },
        { x: 'Japan',     y: 25 },
        { x: 'Germany',   y: 27 }
      ],
      title: 'Sales Distribution of Car by Region',
      accessibility: {
        accessibilityDescription: 'This pyramid chart represents the sales distribution of cars by region, with each section representing a different region and its respective sales percentage.',
        accessibilityRole: 'presentation'
      },
      legendSettings: { visible: false }
    };
  },
  provide: {
    accumulationchart: [PyramidSeries, AccumulationLegend]
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>