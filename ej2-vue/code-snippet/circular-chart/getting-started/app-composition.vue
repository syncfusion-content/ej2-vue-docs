<template>
  <div id="app">
    <ejs-circularchart3d id="container" :title='title' :tilt='tilt'>
      <e-circularchart3d-series-collection>
        <e-circularchart3d-series :dataSource='seriesData' xName='fruit' yName='share'></e-circularchart3d-series>
      </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { CircularChart3DComponent as EjsCircularchart3d, CircularChart3DSeriesCollectionDirective as ECircularchart3dSeriesCollection, CircularChart3DSeriesDirective as ECircularchart3dSeries, PieSeries3D } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { fruit: 'Apple', share: 25 },
  { fruit: 'Mango', share: 20 },
  { fruit: 'Orange', share: 18 },
  { fruit: 'Banana', share: 17 },
  { fruit: 'Grapes', share: 20 }
];
const title = "Fruit Distribution";
const tilt = -45;
provide('circularchart3d', [PieSeries3D]);

</script>