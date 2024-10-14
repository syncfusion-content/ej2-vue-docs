import Vue from "vue";
import { ChartPlugin, StackingStepAreaSeries, Legend } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingStepArea' xName='x' yName='y' name='Organic' opacity=0.1 noRisers=true :border='border'> </e-series>
                <e-series :dataSource='seriesData' type='StackingStepArea' xName='x' yName='y1' name='Others' opacity=0.1 noRisers=true :border='border'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 2000, y: 0.61, y1: 0.48},
        { x: 2001, y: 0.81, y1: 0.53 },
        { x: 2002, y: 0.91, y1: 0.57 },
        { x: 2003, y: 1,    y1: 0.61 }, 
        { x: 2004, y: 1.19, y1: 0.63 },
        { x: 2005, y: 1.47, y1: 0.64 },
        { x: 2006, y: 1.74, y1: 0.66 }, 
        { x: 2007, y: 1.98, y1: 0.76 },
        { x: 2008, y: 1.99, y1: 0.77 },
        { x: 2009, y: 1.70, y1: 0.55 }
      ],
      primaryXAxis: {
        title: 'Years',
        edgeLabelPlacement: 'Shift',
        majorTickLines: { width: 0 }
      },
      primaryYAxis: {
        title: 'Spend in Billions',
        minimum: 0,
        maximum: 4,
        interval: 1,
        labelFormat: '{value}B',
        majorTickLines: { width: 0 }
      },
      title: "Trend in Sales of Ethical Produce",
      border: { width: 1.5 }
    };
  },
  provide: {
    chart: [StackingStepAreaSeries, Legend]
  }

});