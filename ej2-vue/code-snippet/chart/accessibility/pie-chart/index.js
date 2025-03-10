import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationLegend } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-accumulationchart id="container" :accessibility='accessibility' focusBorderColor='#FF0000' focusBorderWidth=3 focusBorderMargin=5 :legendSettings='legendSettings'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Jan', y: 3 },  { x: 'Feb', y: 3.5 }, 
        { x: 'Mar', y: 7 },  { x: 'Apr', y: 13.5 }, 
        { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, 
        { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
        { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 },
        { x: 'Nov', y: 15 }, { x: 'Dec', y: 15 }
      ],
      legendSettings: {
        visible: true
      },
      accessibility: {
        accessibilityDescription: 'Pie chart representing the distribution of data across months.',
        accessibilityRole: 'chart'
      }
    };
  },
  provide: {
    accumulationchart: [PieSeries, AccumulationLegend]
  }

});