<template>
  <div id="app">
    <ejs-circularchart3d id="container" :title='title' :tilt='tilt' :legendSettings='legendSettings'>
      <e-circularchart3d-series-collection>
        <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y'
          :dataLabel='dataLabel'></e-circularchart3d-series>
      </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { CircularChart3DComponent as EjsCircularchart3d, CircularChart3DSeriesCollectionDirective as ECircularchart3dSeriesCollection, CircularChart3DSeriesDirective as ECircularchart3dSeries, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { x: 'Chrome', y: 62.92 },
  { x: 'Internet Explorer', y: 6.12 },
  { x: 'Opera', y: 3.15 },
  { x: 'Edge', y: 5.5 },
  { x: 'Safari', y: 19.97 },
  { x: 'Others', y: 2.34 }
];
const title = "Browser Market Shares in November 2023";
const tilt = -45;
const legendSettings = {
  visible: true,
  position: 'Right'
};
const dataLabel = {
  visible: true,
  name: 'x',
  position: 'Outside',
  font: {
    fontWeight: '600'
  },
  connectorStyle: { length: '40px' }
};

provide('circularchart3d', [PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D]);

</script>
<style>
#container {
  height: 350px;
}
</style>