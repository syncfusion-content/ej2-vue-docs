
import Vue from "vue";
import { ChartPlugin, LineSeries, Legend, Crosshair, DateTime } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let series1: Object[] = [];
let point1: Object;
let value: number = 40;
let i: number;
for (i = 1; i < 500; i++) {
    if (Math.random() > .5) {
        value += Math.random();
    } else {
        value -= Math.random();
    }
    point1 = { x: new Date(1950, i + 2, i), y: value.toFixed(1) };
    series1.push(point1);
}

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id= "container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :crosshair='crosshair'>
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='Line' xName='x' yName='y' name='Temperature'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData1: series1,
      primaryXAxis: {
            valueType: 'DateTime',
            crosshairTooltip: { enable: true },
            labelFormat: 'yMMM'
        },
         primaryYAxis: {
           crosshairTooltip: { enable: true }
        },
        title: "Weather Condition",
        crosshair: { enable: true }
    };
  },
  provide: {
    chart: [LineSeries, Crosshair, DateTime]
  }

});