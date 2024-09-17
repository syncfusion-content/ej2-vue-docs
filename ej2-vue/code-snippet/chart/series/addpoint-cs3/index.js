
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationLegend } from "@syncfusion/ej2-vue-charts";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(AccumulationChartPlugin);
Vue.use(ButtonPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-accumulationchart id="container" :legendSettings='legendSettings'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' :dataLabel='datalabel'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
        <ejs-button id='add' @click.native='onClick'>Add Point</ejs-button>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 }, { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 }, { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
        { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }, { x: 'Nov', y: 15 }],
        legendSettings: {
          visible: true
        },
           };
  },
  provide: {
     accumulationchart: [PieSeries, AccumulationLegend]
  },
  methods: {
    onClick: function() {     
      this.$refs.chart.ej2Instances.series[0].addPoint({ x: 'Dec', y: 15 });
    }
  }

});