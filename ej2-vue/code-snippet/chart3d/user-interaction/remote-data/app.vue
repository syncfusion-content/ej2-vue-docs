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
<script>
import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, ColumnSeries3D, Category3D } from "@syncfusion/ej2-vue-charts";
import { DataManager, Query } from '@syncfusion/ej2-data';

let dataManager = new DataManager({
  url: 'https://services.syncfusion.com/vue/production/api/orders'
});
let query = new Query().take(5).where('Estimate', 'lessThan', 3, false);

export default {
  name: "App",
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data() {
    return {
      seriesData: dataManager,
      queries: query,
      primaryXAxis: {
        valueType: 'Category',
        labelRotation: -45,
        labelPlacement: 'BetweenTicks'
      },
      wallColor: 'transparent',
      enableRotation: true,
      rotation: 7,
      tilt: 10,
      depth: 100
    };
  },
  provide: {
    chart3d: [ColumnSeries3D, Category3D]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>