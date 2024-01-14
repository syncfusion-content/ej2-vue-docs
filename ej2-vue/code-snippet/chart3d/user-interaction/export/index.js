
import Vue from "vue";
import { Chart3DPlugin, Category3D, ColumnSeries3D } from "@syncfusion/ej2-vue-charts";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(Chart3DPlugin);
Vue.use(ButtonPlugin);
;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart3d ref="chart" id="container" :primaryXAxis='primaryXAxis' :title='title' 
            :wallColor='wallColor' :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth'>
            <e-chart3d-series-collection>
                <e-chart3d-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold'></e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
        <ejs-button id='export' @click.native='export'>Export</ejs-button>
    </div>
`,

  data() {
    return {
      seriesData: [
        { country: "USA", gold: 50 },
        { country: "China", gold: 40 },
        { country: "Japan", gold: 70 },
        { country: "Australia", gold: 60 },
        { country: "France", gold: 50 },
        { country: "Germany", gold: 40 },
        { country: "Italy", gold: 40 },
        { country: "Sweden", gold: 30 }
      ],
      primaryXAxis: {
        valueType: 'Category'
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
    chart3d: [ColumnSeries3D, Category3D]
  },
  methods: {
    export: function () {
      this.$refs.chart.export('PNG', 'result');
    }
  }
});