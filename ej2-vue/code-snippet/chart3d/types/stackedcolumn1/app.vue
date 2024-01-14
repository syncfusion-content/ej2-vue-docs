

<template>
    <div id="app">
        <ejs-chart3d id="container"  :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-chart3d-series-collection>
              <e-chart3d-series :dataSource='seriesData1' type='StackingColumn100' xName='x' yName='y' name='America' > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData2' type='StackingColumn100' xName='x' yName='y' name='Canada' > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData3' type='StackingColumn100' xName='x' yName='y' name='France' > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData4' type='StackingColumn100' xName='x' yName='y' name='Germany' > </e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
    </div>
</template>
<script>
import { Chart3DComponent, Chart3DSeriesDirective, Chart3DSeriesCollectionDirective, StackingColumnSeries3D, Category3D } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data() {
    return {
      seriesData1: [{ x: '2014', y: 9 },
                    { x: '2016', y: 46 },
                    { x: '2018', y: 9 },
                    { x: '2020', y: 39 },
                    { x: '2022', y: 8 },],
      seriesData2: [{ x: '2014', y: 10 },
                    { x: '2016', y: 4 },
                    { x: '2018', y: 11 },
                    { x: '2020', y: 7 },
                    { x: '2022', y: 4 },],
      seriesData3: [{ x: '2014', y: 4 },
                    { x: '2016', y: 10 },
                    { x: '2018', y: 5 },
                    { x: '2020', y: 10 },
                    { x: '2022', y: 5 },],
      seriesData4: [{ x: '2014', y: 8 },
                    { x: '2016', y: 17 },
                    { x: '2018', y: 14 },
                    { x: '2020', y: 10 },
                    { x: '2022', y: 12 },],
                
      primaryXAxis: {
          valueType: 'Category'
      },
      primaryYAxis:{
        interval: 20
      }
    };
  },
  provide: {
    chart3d: [StackingColumnSeries3D, Category3D]
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>


