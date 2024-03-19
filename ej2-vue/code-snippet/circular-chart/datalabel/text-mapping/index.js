
import Vue from "vue";
import { CircularChart3DPlugin, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";

Vue.use(CircularChart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-circularchart3d id="container" :tilt='tilt' :legendSettings='legendSettings'>
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y' :dataLabel='dataLabel'></e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Jan', y: 3, text:'January' }, 
        { x: 'Feb', y: 3.5, text: 'February' },
        { x: 'Mar', y: 7, text: 'March' }, 
        { x: 'Apr', y: 13.5, text: 'April' }
      ],
      tilt: -45,
      legendSettings: {
        visible: false
      },
      dataLabel: {
        visible: true,
        name: 'text'
      }
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D]
  }
});