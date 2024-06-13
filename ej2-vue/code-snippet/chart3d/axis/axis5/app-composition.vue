<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :axes="axes">
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="seriesData" type="Column" xName="country" yName="gold" name="Sales">
        </e-chart3d-series>
        <e-chart3d-series :dataSource="seriesData" type="Line" xName="country" yName="siver" name="Sales"
          yAxisName="yAxis">
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
  { country: 'USA', gold: 50, siver: 30 },
  { country: 'China', gold: 40, siver: 20 },
  { country: 'Japan', gold: 70, siver: 50 },
  { country: 'Australia', gold: 60, siver: 40 },
  { country: 'France', gold: 50, siver: 30 },
  { country: 'Germany', gold: 40, siver: 20 },
  { country: 'Italy', gold: 40, siver: 20 },
  { country: 'Sweden', gold: 30, siver: 10 }
];
const primaryXAxis = {
  valueType: 'Category',
  title: 'Countries'
};
const primaryYAxis = {
  interval: 10
};
const axes = [
  {
    rowIndex: 0,
    name: 'yAxis'
  }
];

provide('chart3d', [ColumnSeries3D, Category3D]);

</script>
<style>
#container {
  height: 350px;
}
</style>