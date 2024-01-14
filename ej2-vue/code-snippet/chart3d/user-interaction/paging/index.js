
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
          <e-chart3d-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='December 2007'></e-chart3d-series>
          <e-chart3d-series :dataSource='seriesData' type='Column' xName='x' yName='y1' name='December 2008'></e-chart3d-series>
          <e-chart3d-series :dataSource='seriesData' type='Column' xName='x' yName='y2' name='December 2009'></e-chart3d-series>
          <e-chart3d-series :dataSource='seriesData' type='Column' xName='x' yName='y3' name='December 2010'></e-chart3d-series>
        </e-chart3d-series-collection>
      </ejs-chart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'WW', y: 12, y1: 22, y2: 38.3, y3: 50 },
        { x: 'EU', y: 9.9, y1: 26, y2: 45.2, y3: 63.6 },
        { x: 'APAC', y: 4.4, y1: 9.3, y2: 18.2, y3: 20.9 },
        { x: 'LATAM', y: 6.4, y1: 28, y2: 46.7, y3: 65.1 },
        { x: 'MEA', y: 30, y1: 45.7, y2: 61.5, y3: 73 },
        { x: 'NA', y: 25.3, y1: 35.9, y2: 64, y3: 81.4 }
      ],
      primaryXAxis: {
        title: 'Countries',
        valueType: 'Category',
        interval: 1,
        labelIntersectAction: 'Rotate45'
      },
      primaryYAxis: {
        title: 'Penetration (%)',
        labelFormat: '{value}%',
        minimum: 0, maximum: 90
      },
      legendSettings: {
        visible: true,
        padding: 10,
        shapePadding: 10,
        border: {
          width: 2, color: 'grey'
        },
        width: '200'
      },
      title: 'FB Penetration of Internet Audience',
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