<template>
  <div id="app">
    <ejs-circularchart3d id="container" :tilt='tilt' :legendSettings='legendSettings'>
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
  { x: 'Jan', y: 13, text: 'Jan: 13' },
  { x: 'Feb', y: 13, text: 'Feb: 13' },
  { x: 'Mar', y: 17, text: 'Mar: 17' },
  { x: 'Apr', y: 13.5, text: 'Apr: 13.5' }
];
const tilt = -45;
const legendSettings = {
  visible: false
};
const dataLabel = {
  visible: true,
  name: 'text',
  position: 'Outside',
  connectorStyle: {
    length: '50px',
    width: 2,
    color: '#f4429e',
    dashArray: '5,3'
  }
};

provide('circularchart3d', [PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D]);

</script>
<style>
#container {
  height: 350px;
}
</style>