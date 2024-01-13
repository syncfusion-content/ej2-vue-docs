
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
        { x: new Date(2000, 6, 11), y: 10 },
        { x: new Date(2002, 3, 7), y: 30 },
        { x: new Date(2004, 3, 6), y: 15 },
        { x: new Date(2006, 3, 30), y: 65 },
        { x: new Date(2008, 3, 8), y: 90 },
        { x: new Date(2010, 3, 8), y: 85 }
      ],
      primaryXAxis: {
        valueType: 'DateTime'
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