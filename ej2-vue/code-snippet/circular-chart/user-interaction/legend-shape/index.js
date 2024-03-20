
import Vue from "vue";
import { CircularChart3DPlugin, PieSeries3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";

Vue.use(CircularChart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-circularchart3d id="container" :tilt='tilt' :legendSettings='legendSettings'>
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y' legendShape='Rectangle'></e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
          { x: 'Jan', y: 13 }, 
          { x: 'Feb', y: 13 },
          { x: 'Mar', y: 17 }, 
          { x: 'Apr', y: 13.5 }
      ],
      tilt: -45,
      legendSettings: {
        visible: true
      }
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartLegend3D]
  }
});