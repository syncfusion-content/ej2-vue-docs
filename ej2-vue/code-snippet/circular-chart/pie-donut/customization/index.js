
import Vue from "vue";
import { CircularChart3DPlugin, PieSeries3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";

Vue.use(CircularChart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-circularchart3d id="container" :tilt='tilt' :legendSettings='legendSettings' :pointRender='pointRender'>
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y'></e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Jan', y: 3 }, 
        { x: 'Feb', y: 3.5 },
        { x: 'Mar', y: 7 }, 
        { x: 'Apr', y: 13.5 }
      ],
      tilt: -45,
      legendSettings: {
        visible: false
      }
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartLegend3D]
  },
  methods: {
    pointRender: function (args) {
      if ((args.point.x).indexOf('Apr') > -1) {
          args.fill = '#f4bc42';
      }
      else if ((args.point.x).indexOf('Mar') > -1) {
          args.fill = '#DE3D8A';
      }
      else if ((args.point.x).indexOf('Feb') > -1) {
          args.fill = '#F7523F';
      }
      else {
          args.fill = '#597cf9';
      }
    }
  }
});