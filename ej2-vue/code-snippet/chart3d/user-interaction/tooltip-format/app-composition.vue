<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis='primaryXAxis' :tooltip='tooltip' :wallColor='wallColor'
      :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource='chartData' type='Column' xName='month' yName='sales' name= 'Sales'></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { Chart3DComponent as EjsChart3d, Chart3DSeriesCollectionDirective as EChart3dSeriesCollection, Chart3DSeriesDirective as EChart3dSeries, ColumnSeries3D, DateTime3D, Legend3D, Tooltip3D } from "@syncfusion/ej2-vue-charts";

const chartData = [
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
];
const primaryXAxis = {
  valueType: 'DateTime',
  labelRotation: -45,
  labelPlacement: 'BetweenTicks'
};
const tooltip = {
  enable: true,
  header: 'Sales',
  format: '<b>${series.name}</b><br>${point.x:MMM yyyy} : ${point.y:n2}'
};
const wallColor = 'transparent';
const enableRotation = true;
const rotation = 7;
const tilt = 10;
const depth = 100;

provide('chart3d', [ColumnSeries3D, DateTime3D, Legend3D, Tooltip3D]);

</script>
<style>
#container {
  height: 350px;
}
</style>