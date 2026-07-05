<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis='primaryXAxis' :tooltip='tooltip' :wallColor='wallColor'
      :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource='chartData' type='Column' xName='month' yName='sales' name='Sales'></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>
<script>
import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, ColumnSeries3D, DateTime3D, Legend3D, Tooltip3D } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data() {
    return {
      chartData: [
        { month: new Date(2024, 0, 1), sales: 35 },
        { month: new Date(2024, 1, 1), sales: 28 },
        { month: new Date(2024, 2, 1), sales: 34 },
        { month: new Date(2024, 3, 1), sales: 32 },
        { month: new Date(2024, 4, 1), sales: 40 },
        { month: new Date(2024, 5, 1), sales: 32 },
        { month: new Date(2024, 6, 1), sales: 35 },
        { month: new Date(2024, 7, 1), sales: 55 },
        { month: new Date(2024, 8, 1), sales: 38 },
        { month: new Date(2024, 9, 1), sales: 30 },
        { month: new Date(2024, 10, 1), sales: 25 },
        { month: new Date(2024, 11, 1), sales: 32 }
      ],
      primaryXAxis: {
        valueType: 'DateTime',
        labelRotation: -45,
        labelPlacement: 'BetweenTicks'
      },
      tooltip: {
        enable: true,
        header: 'Sales',
        format: '<b>${series.name}</b><br>${point.x:MMM yyyy} : ${point.y:n2}'
      },
      wallColor: 'transparent',
      enableRotation: true,
      rotation: 7,
      tilt: 10,
      depth: 100
    };
  },
  provide: {
    chart3d: [ColumnSeries3D, DateTime3D, Legend3D, Tooltip3D]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>