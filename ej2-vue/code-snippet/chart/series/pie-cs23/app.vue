<template>
  <div id="app">
    <ejs-accumulationchart id="container" ref="pie" style='display:block;' :legendSettings="legendSettings"
      :tooltip="tooltip" :enableAnimation='enableAnimation' :enableSmartLabels='enableSmartLabels'>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='data' xName='x' yName='y' :radius='radius' innerRadius="20%"
          :dataLabel="dataLabel"> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script>

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationDataLabel, PieSeries } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data() {
    return {
      data: [
        { x: 'Argentina', y: 505370, r: '100' },
        { x: 'Belgium', y: 551500, r: '118.7' },
        { x: 'Cuba', y: 312685, r: '124.6' },
        { x: 'Dominican Republic', y: 350000, r: '137.5' },
        { x: 'Egypt', y: 301000, r: '150.8' },
        { x: 'Kazakhstan', y: 300000, r: '155.5' },
        { x: 'Somalia', y: 357022, r: '160.6' }
      ],
      radius: 'r',
      legendSettings: { visible: true },
      dataLabel: { visible: true, position: 'Outside', name: 'x' },
      tooltip: {
        enable: true, header: '<b>${point.x}</b>', format: 'Composition: <b>${point.y}</b>'
      },
      enableAnimation: true,
      enableSmartLabels: true
    };
  },
  provide: {
    accumulationchart: [PieSeries, AccumulationDataLabel]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>