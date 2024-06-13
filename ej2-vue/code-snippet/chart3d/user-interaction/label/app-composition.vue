<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis='primaryXAxis' :title='title' :wallColor='wallColor'
      :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth' :textRender='textRender'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource='seriesData' type='Column' xName='country' yName='gold'
          :dataLabel='dataLabel'></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { Chart3DComponent as EjsChart3d, Chart3DSeriesCollectionDirective as EChart3dSeriesCollection, Chart3DSeriesDirective as EChart3dSeries, ColumnSeries3D, Category3D, DataLabel3D } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'USA', y: 46 },
  { x: 'GBR', y: 27 },
  { x: 'CHN', y: 26 }
];
const primaryXAxis = {
  valueType: 'Category'
};
const dataLabel = {
  visible: true
};
const title = 'Olympic Medals';
const wallColor = 'transparent';
const enableRotation = true;
const rotation = 7;
const tilt = 10;
const depth = 100;

provide('chart3d', [ColumnSeries3D, Category3D, DataLabel3D]);

const textRender = (args) => {
  if (args.point.index === 2) {
    args.text = 'Label';
  }
  else {
    args.cancel = true;
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>