import Vue from "vue";
import { ChartPlugin, StackingBarSeries, Category, Legend, DataLabel } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :stackLabels = 'stackLabels'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='StackingBar' xName='x' yName='y' name='Apple' :marker = 'marker'> </e-series>
        <e-series :dataSource='seriesData' type='StackingBar' xName='x' yName='y1' name='Orange' :marker = 'marker'> </e-series>
        <e-series :dataSource='seriesData' type='StackingBar' xName='x' yName='y2' name='Wastage' :marker = 'marker'> </e-series>
      </e-series-collection>
    </ejs-chart>
    </div>
`,

  data: function () {
    return {
      seriesData: [
        { x: 'Jan', y: 6,  y1: 6,  y2: -1 }, 
        { x: 'Feb', y: 8 , y1: 8,  y2: -1.5 },
        { x: 'Mar', y: 12, y1: 11, y2: -2 }, 
        { x: 'Apr', y: 15, y1: 16, y2: -2.5 },
        { x: 'May', y: 20, y1: 21, y2: -3 }, 
        { x: 'Jun', y: 24, y1: 25, y2: -3.5 },
        { x: 'Jul', y: 28, y1: 27, y2: -4 }, 
        { x: 'Aug', y: 32, y1: 31, y2: -4.5 },
        { x: 'Sep', y: 33, y1: 34, y2: -5 }, 
        { x: 'Oct', y: 35, y1: 34, y2: -5.5 },
        { x: 'Nov', y: 40, y1: 41, y2: -6 }, 
        { x: 'Dec', y: 42, y1: 42, y2: -6.5 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Months'
      },
      primaryYAxis: {
        title: 'Percentage (%)',
        minimum: -20,
        maximum: 100,
        labelFormat: '{value}%',
        edgeLabelPlacement: 'Shift'
      },
      marker:{dataLabel : {visible : true}},
      stackLabels: { visible: true, fill: 'rgba(0, 123, 255, 0.5)', format: '{value}', angle: 45, rx: 10, ry: 10, margin: { left: 10, right: 10, top: 10, bottom: 10 }, border: { width: 2, color: '#000' }, font: { size: '14px', color: '#fff', weight: 'bold', family: 'Arial', textAlignment: 'Left' } },
      title: 'Sales Comparison'
    };
  },
  provide: {
    chart: [StackingBarSeries, Category, Legend, DataLabel]
  }

});