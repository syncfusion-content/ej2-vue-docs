

<template>
    <div id="app">
        <ejs-chart3d id="container"  :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-chart3d-series-collection>
                <e-chart3d-series :dataSource='seriesData1' type='StackingColumn' opacity='0.4' fill='red' xName='x' yName='y' name='Iran' stackingGroup='Asia' columnWidth= 0.6 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData2' type='StackingColumn' opacity='0.4' fill='green' xName='x' yName='y' name='Indonesia' stackingGroup='Asia' columnWidth= 0.6 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData3' type='StackingColumn' opacity='0.4' fill='yellow' xName='x' yName='y' name='Italy' stackingGroup='Europe' columnWidth= 0.6 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData4' type='StackingColumn' opacity='0.4' fill='blue' xName='x' yName='y' name='France' stackingGroup='Europe' columnWidth= 0.6 > </e-chart3d-series>
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
      seriesData1: [
                    { x: '2018', y: 24.5 },
                    { x: '2019', y: 25.6 },
                    { x: '2020', y: 29 },
                    { x: '2021', y: 28.5 },
                    { x: '2022', y: 30.6 },
                ],
      seriesData2: [
                    { x: '2018', y: 6.2 },
                    { x: '2019', y: 15.6 },
                    { x: '2020', y: 14.3 },
                    { x: '2021', y: 9.3 },
                    { x: '2022', y: 7.8 },
                ],
      seriesData3: [
                    { x: '2018', y: 24.5 },
                    { x: '2019', y: 23.2 },
                    { x: '2020', y: 20.4 },
                    { x: '2021', y: 23.2 },
                    { x: '2022', y: 24.5 },
                ],
      seriesData4: [
                    { x: '2018', y: 15.4 },
                    { x: '2019', y: 21.1 },
                    { x: '2020', y: 13.9 },
                    { x: '2021', y: 11.6 },
                    { x: '2022', y: 14.4 },
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
    chart3d: [StackingColumnSeries3D, Category3D]
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>


