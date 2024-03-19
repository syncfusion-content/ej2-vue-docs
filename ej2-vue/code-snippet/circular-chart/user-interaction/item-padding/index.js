
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
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y'></e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Jan', y: 3 },  { x: 'Feb', y: 3.5 }, 
        { x: 'Mar', y: 7 },  { x: 'Apr', y: 13.5 },
        { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, 
        { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
        { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }, 
        { x: 'Nov', y: 15 }, { x: 'Dec', y: 15 }
      ],
      tilt: -45,
      legendSettings: {
        width: '260px', 
        height: '50px', 
        position: 'Bottom', 
        itemPadding: 30
      }
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartLegend3D]
  }
});