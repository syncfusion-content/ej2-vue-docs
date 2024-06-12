<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis='primaryXAxis' :title='title' :wallColor='wallColor'
      :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource='seriesData' type='Column' xName='x' yName='y'
          :dataLabel='dataLabel'></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { Chart3DComponent as EjsChart3d, Chart3DSeriesCollectionDirective as EChart3dSeriesCollection, Chart3DSeriesDirective as EChart3dSeries, ColumnSeries3D, Category3D, DataLabel3D } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Jan', y: 12, text: 'January : 12°C' },
  { x: 'Feb', y: 8, text: 'February : 8°C' },
  { x: 'Mar', y: 11, text: 'March : 11°C' },
  { x: 'Apr', y: 6, text: 'April : 6°C' }
];
const primaryXAxis = {
  valueType: 'Category'
};
const dataLabel = {
  visible: true,
  name: "text"
};
const title = 'Olympic Medals';
const wallColor = 'transparent';
const enableRotation = true;
const rotation = 7;
const tilt = 10;
const depth = 100;

provide('chart3d', [ColumnSeries3D, Category3D, DataLabel3D]);

</script>
<style>
#container {
  height: 350px;
}
</style>