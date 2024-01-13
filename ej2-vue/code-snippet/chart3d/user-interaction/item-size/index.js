
import Vue from "vue";
import { Chart3DPlugin, Category3D, ColumnSeries3D, Legend3D } from "@syncfusion/ej2-vue-charts";

Vue.use(Chart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-chart3d id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :title='title' :wallColor='wallColor' 
        :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth' :legendSettings='legendSettings'>
        <e-chart3d-series-collection>
          <e-chart3d-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold' legendShape='Circle'></e-chart3d-series>
          <e-chart3d-series :dataSource='seriesData' type='Column' xName='country' yName='silver' name='Silver' legendShape='Circle'></e-chart3d-series>
          <e-chart3d-series :dataSource='seriesData' type='Column' xName='country' yName='bronze' name='Bronze' legendShape='Circle'></e-chart3d-series>
        </e-chart3d-series-collection>
      </ejs-chart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
          { country: "USA",       gold: 50, silver: 70, bronze: 45 },
          { country: "China",     gold: 40, silver: 60, bronze: 55 },
          { country: "Japan",     gold: 70, silver: 60, bronze: 50 },
          { country: "Australia", gold: 60, silver: 56, bronze: 40 },
          { country: "France",    gold: 50, silver: 45, bronze: 35 },
          { country: "Germany",   gold: 40, silver: 30, bronze: 22 },
          { country: "Italy",     gold: 40, silver: 35, bronze: 37 },
          { country: "Sweden",    gold: 30, silver: 25, bronze: 27 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
      },
      primaryYAxis: {
        minimum: 0, maximum: 80,
        interval: 20, title: 'Medals'
      },
      legendSettings: {
        visible: true,
        shapeHeight: 10, 
        shapeWidth: 10
      },
      title: 'Olympic Medals',
      wallColor: 'transparent',
      enableRotation: true,
      rotation: 7,
      tilt: 10,
      depth: 100
    };
  },
  provide: {
    chart3d: [ColumnSeries3D, Category3D, Legend3D]
  }
});