
import Vue from "vue";
import { Chart3DPlugin, Category3D, StackingBarSeries3D, Category3D } from "@syncfusion/ej2-vue-charts";

Vue.use(Chart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart3d id="container"  :primaryXAxis='primaryXAxis'>
        <e-chart3d-series-collection>
                <e-chart3d-series :dataSource='seriesData1' type='StackingBar100' columnFacet='Cylinder' xName='x' yName='y' name='Iran' columnWidth= 0.6 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData2' type='StackingBar100' columnFacet='Cylinder' xName='x' yName='y' name='Indonesia' columnWidth= 0.6 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData3' type='StackingBar100' columnFacet='Cylinder' xName='x' yName='y' name='Italy' columnWidth= 0.6 > </e-chart3d-series>
                <e-chart3d-series :dataSource='seriesData4' type='StackingBar100' columnFacet='Cylinder' xName='x' yName='y' name='France' columnWidth= 0.6 > </e-chart3d-series>
      </e-chart3d-series-collection>
        </ejs-chart3d>
    </div>
`,

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
      }
    };
  },
  provide: {
    chart3d: [StackingBarSeries3D, Category3D]
  }
});