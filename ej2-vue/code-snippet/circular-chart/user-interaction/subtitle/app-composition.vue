<template>
  <div id="app">
    <ejs-circularchart3d id="container" :tilt='tilt' :title='title' :subTitle='subTitle'
      :legendSettings='legendSettings'>
      <e-circularchart3d-series-collection>
        <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y'></e-circularchart3d-series>
      </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { CircularChart3DComponent as EjsCircularchart3d, CircularChart3DSeriesCollectionDirective as ECircularchart3dSeriesCollection, CircularChart3DSeriesDirective as ECircularchart3dSeries, PieSeries3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Saudi Arabia', y: 58 },
  { x: 'Persian Gulf', y: 15 },
  { x: 'Canada', y: 13 },
  { x: 'Venezuela', y: 8 },
  { x: 'Mexico', y: 3 },
  { x: 'Russia', y: 2 },
  { x: 'Miscellaneous', y: 1 }
];
const tilt = -45;
const title = 'Oil and other liquid imports in USA';
const subTitle = 'In the year 2014 - 2015';
const legendSettings = {
  visible: false
};

provide('circularchart3d', [PieSeries3D, CircularChartLegend3D]);

</script>
<style>
#container {
  height: 350px;
}
</style>