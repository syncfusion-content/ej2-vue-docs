<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis='primaryXAxis' :title='title' :wallColor='wallColor'
      :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource='seriesData' type='Column' xName='country' yName='gold'></e-chart3d-series>
        <e-chart3d-series :dataSource='seriesData' type='Column' xName='country' yName='silver'></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>
<script>
import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, ColumnSeries3D, Category3D } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data() {
    return {
      seriesData: [
        { country: "USA", gold: 50, silver: 70 },
        { country: "China", gold: 40, silver: 60 },
        { country: "Japan", gold: 70, silver: 60 },
        { country: "Australia", gold: 60, silver: 56 },
        { country: "France", gold: 50, silver: 45 },
        { country: "Germany", gold: 40, silver: 30 },
        { country: "Italy", gold: 40, silver: 35 },
        { country: "Sweden", gold: 30, silver: 25 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        isIndexed: true
      },
      title: 'Olympic Medals',
      wallColor: 'transparent',
      enableRotation: true,
      rotation: 7,
      tilt: 10,
      depth: 100
    };
  },
  provide: {
    chart3d: [ColumnSeries3D, Category3D]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>