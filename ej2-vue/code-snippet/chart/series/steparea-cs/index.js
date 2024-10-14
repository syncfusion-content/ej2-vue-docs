import Vue from "vue";
import { ChartPlugin, StepAreaSeries, Tooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StepArea' xName='x' yName='y' fill='#87CEEB'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 1, y: 7 },   { x: 2, y: 1 }, 
        { x: 3, y: 1 },   { x: 4, y: 14 }, 
        { x: 5, y: 1 },   { x: 6, y: 10 },
        { x: 7, y: 8 },   { x: 8, y: 6 }, 
        { x: 9, y: 10 },  { x: 10, y: 10 }, 
        { x: 11, y: 16 }, { x: 12, y: 6 },
        { x: 13, y: 14 }, { x: 14, y: 7 }, 
        { x: 15, y: 5 },  { x: 16, y: 2 }, 
        { x: 17, y: 14 }, { x: 18, y: 7 },
        { x: 19, y: 7 },  { x: 20, y: 10 }
      ],
      primaryXAxis: {
        title: 'Overs'
      },
      primaryYAxis: {
        title: 'Runs'
      },
      title: 'England - Run Rate',
      tooltip: {
        enable: true
      }
    };
  },
  provide: {
    chart: [StepAreaSeries, Tooltip]
  }

});