<template>
  <div id="app">
    <ejs-accumulationchart id="container">
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' type='Funnel' xName='x' yName='y'> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script>

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, FunnelSeries } from "@syncfusion/ej2-vue-charts";

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
        { x: 'Renewed', y: 18.20, text: 'Renewed 18.20%' },
        { x: 'Subscribe', y: 27.3, text: 'Subscribe 27.3%' },
        { x: 'Support', y: 55.9, text: 'Support 55.9%' },
        { x: 'Downloaded', y: 76.8, text: 'Downloaded 76.8%' },
        { x: 'Visited', y: 100, text: 'Visited 100%' }
      ]
    };
  },
  provide: {
    accumulationchart: [FunnelSeries]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>