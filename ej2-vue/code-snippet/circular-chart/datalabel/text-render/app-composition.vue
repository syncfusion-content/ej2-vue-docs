<template>
  <div id="app">
    <ejs-circularchart3d id="container" :tilt='tilt' :legendSettings='legendSettings' :textRender='textRender'>
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
  { x: 'Jan', y: 13 },
  { x: 'Feb', y: 13.5 },
  { x: 'Mar', y: 7 },
  { x: 'Apr', y: 13.5 }
];
const tilt = -45;
const legendSettings = {
  visible: false
};
const dataLabel = {
  visible: true
};

provide('circularchart3d', [PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D]);

const textRender = (args) => {
  args.text = args.point.percentage + "%";
};

</script>
<style>
#container {
  height: 350px;
}
</style>