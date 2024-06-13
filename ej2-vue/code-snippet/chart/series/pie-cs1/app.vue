<template>
  <div id="app">
    <ejs-accumulationchart id="container" :annotations='annotations'>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' xName='x' yName='y'> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script>

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationAnnotation } from "@syncfusion/ej2-vue-charts";


export default {
  name: "App",
  components: {
    "ejs-accumulationchart": AccumulationChartComponent,
    "e-accumulation-series-collection": AccumulationSeriesCollectionDirective,
    "e-accumulation-series": AccumulationSeriesDirective
  },
  data() {
    return {
      seriesData: [{ x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 }, { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 }, { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
      { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }],
      annotations: [{
        content: '<div style="border: 1px solid black;background-color:#f5f5f5; padding: 5px 5px 5px 5px">13.5</div>',
        region: 'Series',
        coordinateUnits: 'Point',
        x: 'Jan',
        y: 3
      }]
    };
  },
  provide: {
    accumulationchart: [AccumulationAnnotation, PieSeries]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>