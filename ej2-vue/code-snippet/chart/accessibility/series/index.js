import Vue from "vue";
import { AccumulationChartPlugin, PyramidSeries, AccumulationLegend } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-accumulationchart id="container" :title='title' :legendSettings='legendSettings'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' type='Pyramid' xName='x' yName='y' :accessibility='accessibility'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Australia', y: 20 },
        { x: 'France',    y: 22 },
        { x: 'China',     y: 23 },
        { x: 'India',     y: 24 },
        { x: 'Japan',     y: 25 },
        { x: 'Germany',   y: 27 }
      ],
      title: 'Sales Distribution of Car by Region',
      accessibility: {
        accessibilityDescription: 'This pyramid chart represents the sales distribution of cars by region, with each section representing a different region and its respective sales percentage.',
        accessibilityRole: 'presentation'
      },
      legendSettings: { visible: false }
    };
  },
  provide: {
    accumulationchart: [PyramidSeries, AccumulationLegend]
  }

});