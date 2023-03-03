
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-accumulationchart id="container">
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' innerRadius='40%'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
`,

  data() {
    return {
      seriesData: [
           { x: 'Jan', y: 3, fill: '#498fff', text:'January' }, { x: 'Feb', y: 3.5, fill: '#ffa060', text: 'February' },
           { x: 'Mar', y: 7, fill: '#ff68b6', text: 'March' }, { x: 'Apr', y: 13.5, fill: '#81e2a1', text: 'April' }
            ]
        };
  },
  provide: {
     accumulationchart: [PieSeries]
  }

});