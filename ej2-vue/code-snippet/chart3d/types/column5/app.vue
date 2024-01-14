

<template>
    <div id="app">
        <ejs-chart3d id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-chart3d-series-collection>
                <e-chart3d-series :dataSource='seriesData' type='Column' xName='month' fill='green' opacity='0.35' yName='sales' name='Sales'> </e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
    </div>
</template>
<script>
import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, ColumnSeries3D, Category3D } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data() {
    return {
      seriesData: [
          { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
          { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
          { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
          { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
          { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
          { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
      ],
      primaryXAxis: {
          valueType: 'Category'
      },
      primaryYAxis: {
          maximum: 60
      },
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


