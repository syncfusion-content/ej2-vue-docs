
import Vue from "vue";
import { Chart3DPlugin, Category3D, ColumnSeries3D, DataLabel3D } from "@syncfusion/ej2-vue-charts";

Vue.use(Chart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-chart3d id="container" :primaryXAxis='primaryXAxis' :title='title' :wallColor='wallColor' 
        :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth'>
        <e-chart3d-series-collection>
          <e-chart3d-series :dataSource='seriesData' type='Column' xName='x' yName='y' :dataLabel='dataLabel'></e-chart3d-series>
        </e-chart3d-series-collection>
      </ejs-chart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Jan', y: 12, text: 'January : 12°C' }, 
        { x: 'Feb', y: 8,  text: 'February : 8°C' }, 
        { x: 'Mar', y: 11, text: 'March : 11°C' }, 
        { x: 'Apr', y: 6,  text: 'April : 6°C' }
      ],
      primaryXAxis: {
        valueType: 'Category'
      },
      dataLabel: {
        visible: true,
        name: "text"
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
    chart3d: [ColumnSeries3D, Category3D, DataLabel3D]
  }
});