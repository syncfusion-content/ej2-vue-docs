<template>
  <div id="app">
    <ejs-chart id="container" :title='title'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='MultiColoredLine' xName='x' yName='y' name='London' width=2
          :marker='marker' pointColorMapping='color'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, MultiColoredLineSeries } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data() {
    return {
      seriesData: [
        { x: 2005, y: 28, color: 'red' }, { x: 2006, y: 25, color: 'green' },
        { x: 2007, y: 26, color: '#ff0097' }, { x: 2008, y: 27, color: 'crimson' },
        { x: 2009, y: 32, color: 'blue' }, { x: 2010, y: 35, color: 'darkorange' }
      ],
      marker: { visible: true, width: 10, height: 10 },
      title: "Climate Graph-2012"
    };
  },
  provide: {
    chart: [MultiColoredLineSeries]
  },
};
</script>
<style>
#container {
  height: 350px;
}
</style>