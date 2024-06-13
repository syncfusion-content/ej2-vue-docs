<template>
  <div id="app">
    <ejs-button id='print' @click='print'>Print</ejs-button>
    <ejs-circularchart3d id="container" ref="circularchart" :tilt='tilt' :legendSettings='legendSettings'>
      <e-circularchart3d-series-collection>
        <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y' radius='100%'></e-circularchart3d-series>
      </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { CircularChart3DComponent as EjsCircularchart3d, CircularChart3DSeriesCollectionDirective as ECircularchart3dSeriesCollection, CircularChart3DSeriesDirective as ECircularchart3dSeries, PieSeries3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { ref } from 'vue';

const circularchart = ref(null);
const seriesData = [
  { x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 },
  { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
  { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 },
  { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
  { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }
];
const tilt = -45;
const legendSettings = {
  visible: false
}

provide('circularchart3d', [PieSeries3D, CircularChartLegend3D]);

const print = () => {
  circularchart.value.print();
};

</script>
<style>
#container {
  height: 350px;
}
</style>