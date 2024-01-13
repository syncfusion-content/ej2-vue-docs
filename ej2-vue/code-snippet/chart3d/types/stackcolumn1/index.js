
import Vue from "vue";
import { Chart3DPlugin, Category3D, StackingColumnSeries3D, Category3D } from "@syncfusion/ej2-vue-charts";

Vue.use(Chart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart3d id="container"  :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
        <e-chart3d-series-collection>
        <e-chart3d-series :dataSource='seriesData1' type='StackingColumn' xName='x' yName='y' name='America' > </e-chart3d-series>
          <e-chart3d-series :dataSource='seriesData2' type='StackingColumn' xName='x' yName='y' name='Canada' > </e-chart3d-series>
          <e-chart3d-series :dataSource='seriesData3' type='StackingColumn' xName='x' yName='y' name='France' > </e-chart3d-series>
          <e-chart3d-series :dataSource='seriesData4' type='StackingColumn' xName='x' yName='y' name='Germany' > </e-chart3d-series>
      </e-chart3d-series-collection>
        </ejs-chart3d>
    </div>
`,

  data() {
    return {
      seriesData1: [{ x: 'Sochi 2014', y: 9 },
      { x: 'Rio 2016', y: 46 },
      { x: 'Pyeongchang 2018', y: 9 },
      { x: 'Tokyo 2020', y: 39 },
      { x: 'Beijing 2022', y: 8 },],
      seriesData2: [{ x: 'Sochi 2014', y: 10 },
      { x: 'Rio 2016', y: 4 },
      { x: 'Pyeongchang 2018', y: 11 },
      { x: 'Tokyo 2020', y: 7 },
      { x: 'Beijing 2022', y: 4 },],
      seriesData3: [{ x: 'Sochi 2014', y: 4 },
      { x: 'Rio 2016', y: 10 },
      { x: 'Pyeongchang 2018', y: 5 },
      { x: 'Tokyo 2020', y: 10 },
      { x: 'Beijing 2022', y: 5 },],
      seriesData4: [{ x: 'Sochi 2014', y: 8 },
      { x: 'Rio 2016', y: 17 },
      { x: 'Pyeongchang 2018', y: 14 },
      { x: 'Tokyo 2020', y: 10 },
      { x: 'Beijing 2022', y: 12 },],
      primaryXAxis: {
        valueType: 'Category'
      },
      primaryYAxis: {
        maximum: 80
      }
    };
  },
  provide: {
    chart3d: [StackingColumnSeries3D, Category3D]
  }
});