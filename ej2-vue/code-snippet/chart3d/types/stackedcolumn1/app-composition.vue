<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource='seriesData1' type='StackingColumn100' xName='x' yName='y' name='America'>
        </e-chart3d-series>
        <e-chart3d-series :dataSource='seriesData2' type='StackingColumn100' xName='x' yName='y' name='Canada'>
        </e-chart3d-series>
        <e-chart3d-series :dataSource='seriesData3' type='StackingColumn100' xName='x' yName='y' name='France'>
        </e-chart3d-series>
        <e-chart3d-series :dataSource='seriesData4' type='StackingColumn100' xName='x' yName='y' name='Germany'>
        </e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { Chart3DComponent as EjsChart3d, Chart3DSeriesDirective as EChart3dSeries, Chart3DSeriesCollectionDirective as EChart3dSeriesCollection, StackingColumnSeries3D, Category3D } from "@syncfusion/ej2-vue-charts";

const seriesData1 = [{ x: '2014', y: 9 },
{ x: '2016', y: 46 },
{ x: '2018', y: 9 },
{ x: '2020', y: 39 },
{ x: '2022', y: 8 }];
const seriesData2 = [{ x: '2014', y: 10 },
{ x: '2016', y: 4 },
{ x: '2018', y: 11 },
{ x: '2020', y: 7 },
{ x: '2022', y: 4 }];
const seriesData3 = [{ x: '2014', y: 4 },
{ x: '2016', y: 10 },
{ x: '2018', y: 5 },
{ x: '2020', y: 10 },
{ x: '2022', y: 5 }];
const seriesData4 = [{ x: '2014', y: 8 },
{ x: '2016', y: 17 },
{ x: '2018', y: 14 },
{ x: '2020', y: 10 },
{ x: '2022', y: 12 }];

const primaryXAxis = {
  valueType: 'Category'
};
const primaryYAxis = {
  interval: 20
};

provide('chart3d', [StackingColumnSeries3D, Category3D]);

</script>
<style>
#container {
  height: 350px;
}
</style>