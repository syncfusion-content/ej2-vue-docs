import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationTooltip, AccumulationLegend } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-accumulationchart id="container" :tooltip='tooltip' :legendSettings='legendSettings'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Jan', y: 13 },
        { x: 'Feb', y: 13 },
        { x: 'Mar', y: 17 },
        { x: 'Apr', y: 13.5 }
      ],
      tooltip: {
        enable: true, 
        enableHighlight: true
      },
      legendSettings: { visible: false }
    };
  },
  provide: {
    accumulationchart: [PieSeries, AccumulationTooltip, AccumulationLegend]
  },

});