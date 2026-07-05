
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-accumulationchart id="container" :tooltip='tooltip'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='labelData' xName='x' yName='y'></e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
`,

  data() {
    return {
        labelData: [
           { x: new Date(2024, 0, 1), y: 13, text: 'Jan: 13' },
           { x: new Date(2024, 1, 1), y: 13, text: 'Feb: 13' },
           { x: new Date(2024, 2, 1), y: 17, text: 'Mar: 17' },
           { x: new Date(2024, 3, 1), y: 13.5, text: 'Apr: 13.5' }
        ],
       tooltip:{
           enable: true,
           format: '${point.x:MMM yyyy} : <b>${point.y:n2}%</b>'
        }
    };
  },
  provide: {
     accumulationchart: [PieSeries, AccumulationTooltip]
  }
});
