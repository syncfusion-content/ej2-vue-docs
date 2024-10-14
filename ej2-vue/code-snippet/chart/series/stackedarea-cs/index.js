import Vue from "vue";
import { ChartPlugin, StackingAreaSeries, DateTime, Legend } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingArea100' xName='x' yName='y' name='USA' fill='#ff4251'> </e-series>
                <e-series :dataSource='seriesData' type='StackingArea100' xName='x' yName='y1' name='UK' fill='#4C4C4C'> </e-series>
                <e-series :dataSource='seriesData' type='StackingArea100' xName='x' yName='y2' name='Canada' fill='#794F1B'> </e-series>
                <e-series :dataSource='seriesData' type='StackingArea100' xName='x' yName='y3' name='China' fill='#1a9a6f'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: new Date(2006, 0, 1), y: 34, y1: 51, y2: 14, y3: 37 },
        { x: new Date(2007, 0, 1), y: 20, y1: 26, y2: 34, y3: 15 },
        { x: new Date(2008, 0, 1), y: 40, y1: 37, y2: 73, y3: 53 },
        { x: new Date(2009, 0, 1), y: 51, y1: 51, y2: 51, y3: 51 },
        { x: new Date(2010, 0, 1), y: 26, y1: 26, y2: 26, y3: 26 },
        { x: new Date(2011, 0, 1), y: 37, y1: 37, y2: 37, y3: 37 },
        { x: new Date(2012, 0, 1), y: 54, y1: 43, y2: 12, y3: 54 },
        { x: new Date(2013, 0, 1), y: 44, y1: 23, y2: 16, y3: 44 },
        { x: new Date(2014, 0, 1), y: 48, y1: 55, y2: 34, y3: 23 }
      ],
      primaryXAxis: {
        valueType: 'DateTime',
        title: 'Years',
        intervalType: 'Years',
        labelFormat: 'y',
        edgeLabelPlacement: 'Shift'
      },
      primaryYAxis: {
        title: 'Temperature (%)',
        labelFormat: '{value}%',
        rangePadding: 'None'
      },
      title: 'Annual Temperature Comparison'
    };
  },
  provide: {
    chart: [StackingAreaSeries, DateTime, Legend]
  }

});