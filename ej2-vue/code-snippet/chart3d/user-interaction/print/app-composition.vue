<template>
  <div id="app">
    <ejs-chart3d ref="chart" id="container" :primaryXAxis='primaryXAxis' :title='title' :wallColor='wallColor'
      :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource='seriesData' type='Column' xName='country' yName='gold'
          name='Gold'></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
    <ejs-button id='print' @click='print'>Print</ejs-button>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { Chart3DComponent as EjsChart3d, Chart3DSeriesCollectionDirective as EChart3dSeriesCollection, Chart3DSeriesDirective as EChart3dSeries, ColumnSeries3D, Category3D } from "@syncfusion/ej2-vue-charts";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { ref } from 'vue';

const chart = ref(null);

const seriesData = [
  { country: "USA", gold: 50 },
  { country: "China", gold: 40 },
  { country: "Japan", gold: 70 },
  { country: "Australia", gold: 60 },
  { country: "France", gold: 50 },
  { country: "Germany", gold: 40 },
  { country: "Italy", gold: 40 },
  { country: "Sweden", gold: 30 }
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

provide('chart3d', [ColumnSeries3D, Category3D]);
const print = () => {
  chart.value.print();
}

</script>
<style>
#container {
  height: 350px;
}
</style>