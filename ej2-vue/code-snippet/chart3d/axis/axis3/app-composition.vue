<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis">
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="seriesData" type="Column" xName="country" yName="gold" name="Sales">
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
  Category3D
} from '@syncfusion/ej2-vue-charts';

const seriesData = [
  { country: 'USA', gold: 50 },
  { country: 'China', gold: 40 },
  { country: 'Japan', gold: 70 },
  { country: 'Australia', gold: 60 },
  { country: 'France', gold: 50 },
  { country: 'Germany', gold: 40 },
  { country: 'Italy', gold: 40 },
  { country: 'Sweden', gold: 30 }
]
const primaryXAxis = {
  valueType: 'Category',
  majorTickLines: { width: 2, color: 'red', height: 10 }
}
const primaryYAxis = {
  majorTickLines: { width: 2, color: 'red', height: 10 },
  labelFormat: '{value}°C',
  interval: 10
}

provide('chart3d', [ColumnSeries3D, Category3D]);
</script>
<style>
#container {
  height: 350px;
}
</style>