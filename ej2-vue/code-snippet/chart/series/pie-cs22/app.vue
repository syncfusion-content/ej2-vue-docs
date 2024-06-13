<template>
  <div id="app">
    <ejs-accumulationchart id='chartcontainer' :title='title' :legendSettings='legendSettings' :tooltip='tooltip'
      enableSmartLables='true' :enableAnimation='enableAnimation' :center='center'>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' :startAngle='startAngle' :endAngle='endAngle' :radius='radius'
          xName='x' yName='y' :dataLabel='dataLabel' name='Browser' innerRadius='0%'> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script>

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";

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
        { 'x': 'Chrome', y: 37, text: '37%' }, { 'x': 'UC Browser', y: 17, text: '17%' },
        { 'x': 'iPhone', y: 19, text: '19%' },
        { 'x': 'Others', y: 4, text: '4%' }, { 'x': 'Opera', y: 11, text: '11%' },
        { 'x': 'Android', y: 12, text: '12%' }
      ],
      dataLabel: {
        visible: true,
        position: 'Inside', name: 'text',
        font: {
          fontWeight: '600'
        }
      },
      enableAnimation: false,
      legendSettings: {
        visible: false,
      },
      tooltip: { enable: false, format: '${point.x} : <b>${point.y}%</b>' },
      startAngle: '0',
      endAngle: '360',
      radius: '70%',
      center: { x: '50%', y: '50%' },
      title: "Mobile Browser Statistics"
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