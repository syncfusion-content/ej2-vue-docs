<template>
  <div id="app">
    <ejs-accumulationchart id="container" :tooltip='tooltip' :legendSettings='legendSettings'>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' xName='x' yName='y'>
        </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script>

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationTooltip, AccumulationLegend } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data() {
    return {
      seriesData: [
        { x: 'Jan', y: 13 },
        { x: 'Feb', y: 13 },
        { x: 'Mar', y: 17 },
        { x: 'Apr', y: 13.5 }
      ],
      tooltip: {
        enable: true, 
        enableHighlight: true
      },
      legendSettings: { visible: false }
    };
  },
  provide: {
    accumulationchart: [PieSeries, AccumulationTooltip, AccumulationLegend]
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>