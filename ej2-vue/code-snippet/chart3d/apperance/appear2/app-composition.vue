<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis">
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="seriesData" type="Column" xName="x" yName="y" name="Sales"
          pointColorMapping="color">
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
  { x: 'Jan', y: 6.96, color: 'red' },
  { x: 'Feb', y: 8.9, color: 'blue' },
  { x: 'Mar', y: 12, color: 'orange' },
  { x: 'Apr', y: 17.5, color: 'aqua' },
  { x: 'May', y: 22.1, color: 'grey' }
];
const primaryXAxis = {
  valueType: 'Category'
};
const primaryYAxis = {
  labelFormat: '{value}°C',
  interval: 5
};

provide('chart3d', [ColumnSeries3D, Category3D]);

</script>
<style>
#container {
  height: 350px;
}
</style>