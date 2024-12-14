<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
      :crosshair='crosshair'>
      <e-series-collection>
        <e-series :dataSource='seriesData1' type='Line' xName='x' yName='y' name='Temperature'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, Crosshair, DateTime } from "@syncfusion/ej2-vue-charts";



let series1 = [];
let point1;
let value = 40;
let i;
for (i = 1; i < 500; i++) {
  if (Math.random() > .5) {
    value += Math.random();
  } else {
    value -= Math.random();
  }
  point1 = { x: new Date(1950, i + 2, i), y: value.toFixed(1) };
  series1.push(point1);
}

export default {
  name: "App",
  components: {
    "ejs-chart": ChartComponent,
    "e-series-collection": SeriesCollectionDirective,
    "e-series": SeriesDirective
  },
  data() {
    return {
      seriesData1: series1,
      primaryXAxis: {
        valueType: 'DateTime',
        crosshairTooltip: { enable: true, fill: 'green' },
        labelFormat: 'yMMM'
      },
      primaryYAxis: {
        crosshairTooltip: { enable: true, fill: 'green' },
      },
      title: "Weather Condition",
      crosshair: { enable: true, lineType: "Horizontal", snapToData: true }
    };
  },
  provide: {
    chart: [LineSeries, Crosshair, DateTime]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>