
import Vue from "vue";
import { CircularChart3DPlugin, PieSeries3D, CircularChartLegend3D, CircularChartExport3D } from "@syncfusion/ej2-vue-charts";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(CircularChart3DPlugin);
Vue.use(ButtonPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-button  id='togglebtn' @click.native='exportIcon'>Export</ejs-button>
        <ejs-circularchart3d id="container" ref="circularchart" :tilt='tilt' :legendSettings='legendSettings' enableExport='true'>
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y' radius='100%'></e-circularchart3d-series>
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
          { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }
      ],
      tilt: -45,
      legendSettings: {
        visible: false
      }
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartLegend3D, CircularChartExport3D]
  },
  methods: {
    exportIcon: function() {
      this.$refs.circularchart.circularChartExport3DModule.export('PNG', 'result');
    }
  }
});