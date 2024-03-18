
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
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y' innerRadius='40%'></e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Net-tution', y: 21 },
        { x: 'Private Gifts', y: 8 },
        { x: 'All Other', y: 9 },
        { x: 'Local Revenue', y: 4 },
        { x: 'State Revenue', y: 21 },
        { x: 'Federal Revenue', y: 16 },
        { x: 'Self-supporting Operations', y: 21 }
      ],
      tilt: -45,
      legendSettings: {
        visible: true, 
        position: 'Right', 
        textWrap: 'Wrap',
        maximumLabelWidth: 60 
      }
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartLegend3D]
  }
});