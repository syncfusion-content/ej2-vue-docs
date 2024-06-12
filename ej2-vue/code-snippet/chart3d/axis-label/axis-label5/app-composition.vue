<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :title='title'
      :wallColor='wallColor' :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="seriesData" type="Column" xName="x" yName="y" name="Product X">
          <e-chart3d-series-animation enable="false"></e-chart3d-series-animation>
        </e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>
<script setup>
import { provide } from "vue";
import {
  Chart3DComponent as EjsChart3d,
  Chart3DSeriesCollectionDirective as EChart3dSeriesCollection,
  Chart3DSeriesDirective as EChart3dSeries,
  ColumnSeries3D,
  Category3D,
} from '@syncfusion/ej2-vue-charts';

let series1 = [];
let point1;
let value = 80;
let i;
for (i = 1; i < 50; i++) {
  if (Math.random() > 0.5) {
    value += Math.random();
  } else {
    value -= Math.random();
  }
  point1 = { x: i, y: value.toFixed(1) };
  series1.push(point1);
}

const seriesData = series1;
const primaryXAxis = {
  title: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  maximumLabels: 1
};
const primaryYAxis = {
  title: 'Profit ($)',
  rangePadding: 'None',
  majorTickLines: { width: 0 }
};
const title = 'Sales History of Product X';
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