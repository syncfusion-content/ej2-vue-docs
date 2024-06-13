<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis='primaryXAxis' :wallColor='wallColor' :enableRotation='enableRotation'
      :rotation='rotation' :tilt='tilt' :depth='depth'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource='seriesData' type='Column' xName='CustomerID' yName='Freight'
          :query='queries'></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { Chart3DComponent as EjsChart3d, Chart3DSeriesCollectionDirective as EChart3dSeriesCollection, Chart3DSeriesDirective as EChart3dSeries, ColumnSeries3D, Category3D } from "@syncfusion/ej2-vue-charts";
import { DataManager, Query, ODataAdaptor } from '@syncfusion/ej2-data';

let dataManager = new DataManager({
  url: 'https://services.syncfusion.com/vue/production/api/orders',
  adaptor: new ODataAdaptor()
});
let query = new Query();

const seriesData = dataManager;
const queries = query;
const primaryXAxis = {
  valueType: 'Category',
  labelRotation: -45,
  labelPlacement: 'BetweenTicks'
};
const wallColor = 'transparent';
const enableRotation = true;
const rotation = 7;
const tilt = 10;
const depth = 100;

provide('chart3d', [ColumnSeries3D, Category3D]);
</script>
<style>
#container {
  height: 350px;
}
</style>