
import Vue from "vue";
import { CircularChart3DPlugin, PieSeries3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";

Vue.use(CircularChart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-circularchart3d id="container" :tilt='tilt' :titleStyle='titleStyle' :title='title' :legendSettings='legendSettings'>
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y'></e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
          { x: 'Saudi Arabia', y: 58 },
          { x: 'Persian Gulf', y: 15 },
          { x: 'Canada', y: 13 },
          { x: 'Venezuela', y: 8 },
          { x: 'Mexico', y: 3 },
          { x: 'Russia', y: 2 },
          { x: 'Miscellaneous', y: 1 }
      ],
      tilt: -45,
      title: 'Oil and other liquid imports in USA',
      titleStyle: {
        fontFamily: "Arial",
        fontStyle: 'italic',
        fontWeight: 'regular',
        color: "#E27F2D",
        size: '23px'
      },
      legendSettings: {
        visible: false
      }
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartLegend3D]
  }
});