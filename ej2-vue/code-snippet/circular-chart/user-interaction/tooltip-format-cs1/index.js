
import Vue from "vue";
import { CircularChart3DPlugin, PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";

Vue.use(CircularChart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-circularchart3d id="container" :tilt='tilt' :legendSettings='legendSettings' :tooltip='tooltip'>
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y'></e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: new Date(2024, 0, 1), y: 13 },
        { x: new Date(2024, 1, 1), y: 13 },
        { x: new Date(2024, 2, 1), y: 17 },
        { x: new Date(2024, 3, 1), y: 13.5 }
      ],
      tilt: -45,
      legendSettings: {
        visible: false
      },
      tooltip: { enable: true, format: '${point.x:MMM yyyy} : <b>${point.y:n2}%</b>' }
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D]
  }
});