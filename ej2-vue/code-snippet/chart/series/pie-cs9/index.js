
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries } from "@syncfusion/ej2-vue-charts";
import { data } from "data.ts";
Vue.use(AccumulationChartPlugin);
;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-accumulationchart id="container">
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
`,

  data() {
    return {
      seriesData: data
    };
  },
  provide: {
     accumulationchart: [PieSeries]
  }

});