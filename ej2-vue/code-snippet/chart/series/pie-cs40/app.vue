<template>
  <div id="app">
    <ejs-accumulationchart id='chartcontainer' width='92%' :title='title' :legendSettings='legendSettings' :tooltip='tooltip'
       :enableAnimation='enableAnimation'>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' :startAngle='startAngle' :endAngle='endAngle' :radius='radius'
          xName='x' yName='y' :dataLabel='dataLabel' name='Browser' innerRadius='60%' borderRadius='8'> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script>

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationLegend } from "@syncfusion/ej2-vue-charts";

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
      { x: 'Argentina', y: 505370, r: '100' },
        { x: 'Belgium', y: 551500, r: '118.7' },
        { x: 'Cuba', y: 312685, r: '124.6' },
        { x: 'Dominican Republic', y: 350000, r: '137.5' },
        { x: 'Egypt', y: 301000, r: '150.8' },
        { x: 'Kazakhstan', y: 300000, r: '155.5' },
        { x: 'Somalia', y: 357022, r: '160.6' }
      ],
      enableAnimation: true,
      legendSettings: {
        visible: false,
      },
      startAngle: '0',
      endAngle: '360',
      title: "Mobile Browser Statistics"
    };
  },
  provide: {
    accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationLegend]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>