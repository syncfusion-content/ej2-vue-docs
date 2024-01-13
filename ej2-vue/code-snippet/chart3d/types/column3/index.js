
import Vue from "vue";
import { Chart3DPlugin, Category3D, ColumnSeries3D } from "@syncfusion/ej2-vue-charts";

Vue.use(Chart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart3d id="container" :title="title" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-chart3d-series-collection>
            <e-chart3d-series :dataSource="seriesData1" type="Column" xName="x" yName="y" groupName="Iran" stackingGroup="Asia"
            columnWidth="0.6">
          </e-chart3d-series>
          <e-chart3d-series :dataSource="seriesData2" type="Column" xName="x" yName="y" groupName="Iran" stackingGroup="Asia"
            columnWidth="0.6">
          </e-chart3d-series>
          <e-chart3d-series :dataSource="seriesData3" type="Column" xName="x" yName="y" groupName="France"
            stackingGroup="Europe" columnWidth="0.6">
          </e-chart3d-series>
          <e-chart3d-series :dataSource="seriesData4" type="Column" xName="x" yName="y" groupName="France"
            stackingGroup="Europe" columnWidth="0.6">
          </e-chart3d-series>
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
        interval: 1,
        valueType: 'Category',
      },
      primaryYAxis: {
        maximum: 40,
        interval: 10,
      },
      title: 'Sales Analysis',
    };
  },
  provide: {
    chart3d: [ColumnSeries3D, Category3D],
  },
});