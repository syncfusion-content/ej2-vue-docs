<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis='primaryXAxis' :wallColor='wallColor' :enableRotation='enableRotation'
      :rotation='rotation' :tilt='tilt' :depth='depth'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource='seriesData' type='Column' xName='month' yName='sales'
          :emptyPointSettings='emptyPointSettings'></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { Chart3DComponent as EjsChart3d, Chart3DSeriesCollectionDirective as EChart3dSeriesCollection, Chart3DSeriesDirective as EChart3dSeries, ColumnSeries3D, Category3D } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
  { month: 'Mar', sales: null }, { month: 'Apr', sales: 32 },
  { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
  { month: 'Jul', sales: 35 }, { month: 'Aug', sales: undefined },
  { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
  { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
const primaryXAxis = {
  valueType: 'Category',
  labelRotation: -45,
  labelPlacement: 'BetweenTicks'
};
const emptyPointSettings = {
  mode: 'Average',
  fill: 'green'
};
const wallColor = 'transparent';
const enableRotation = true;
const rotation = 7;
const tilt = 10;
const depth = 100;

provide('chart3d', [ColumnSeries3D, Category3D]);

</script>
<style>
#container {
  height: 350px;
}
</style>