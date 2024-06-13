<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis='primaryXAxis' :title='title' selectionMode='Point' :wallColor='wallColor'
      :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource='seriesData' type='Column' xName='country' yName='gold'
          name='Gold'></e-chart3d-series>
        <e-chart3d-series :dataSource='seriesData' type='Column' xName='country' yName='silver'
          name='Silver'></e-chart3d-series>
        <e-chart3d-series :dataSource='seriesData' type='Column' xName='country' yName='bronze'
          name='Bronze'></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { Chart3DComponent as EjsChart3d, Chart3DSeriesCollectionDirective as EChart3dSeriesCollection, Chart3DSeriesDirective as EChart3dSeries, ColumnSeries3D, Category3D, Selection3D, Legend3D, Highlight3D } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { country: "USA", gold: 50, silver: 70, bronze: 45 },
  { country: "China", gold: 40, silver: 60, bronze: 55 },
  { country: "Japan", gold: 70, silver: 60, bronze: 50 },
  { country: "Australia", gold: 60, silver: 56, bronze: 40 },
  { country: "France", gold: 50, silver: 45, bronze: 35 },
  { country: "Germany", gold: 40, silver: 30, bronze: 22 },
  { country: "Italy", gold: 40, silver: 35, bronze: 37 },
  { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
];
const primaryXAxis = {
  valueType: 'Category'
};
const title = 'Olympic Medals';
const wallColor = 'transparent';
const enableRotation = true;
const rotation = 7;
const tilt = 10;
const depth = 100;

provide('chart3d', [ColumnSeries3D, Category3D, Selection3D, Legend3D, Highlight3D]);

</script>
<style>
#container {
  height: 350px;
}</style>