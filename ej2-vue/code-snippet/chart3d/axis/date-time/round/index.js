
import Vue from "vue";
import { Chart3DPlugin, DateTime3D, ColumnSeries3D } from "@syncfusion/ej2-vue-charts";

Vue.use(Chart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :wallColor='wallColor' 
        :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth'>
        <e-chart3d-series-collection>
          <e-chart3d-series :dataSource="seriesData" type="Column" xName="x" yName="y"></e-chart3d-series>
        </e-chart3d-series-collection>
      </ejs-chart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: new Date(2017, 11, 20), y: 21 }, { x: new Date(2017, 11, 21), y: 24 },
        { x: new Date(2017, 11, 22), y: 24 }, { x: new Date(2017, 11, 26), y: 70 },
        { x: new Date(2017, 11, 27), y: 75 }, { x: new Date(2018, 0, 2), y: 82 },
        { x: new Date(2018, 0, 3), y: 53 }, { x: new Date(2018, 0, 4), y: 54 },
        { x: new Date(2018, 0, 5), y: 53 }, { x: new Date(2018, 0, 8), y: 45 }
      ],
      primaryXAxis: {
        valueType: 'DateTime',
        rangePadding: 'Round'
      },
      wallColor: 'transparent',
      enableRotation: true,
      rotation: 7,
      tilt: 10,
      depth: 100
    };
  },
  provide: {
    chart3d: [ColumnSeries3D, DateTime3D]
  }
});