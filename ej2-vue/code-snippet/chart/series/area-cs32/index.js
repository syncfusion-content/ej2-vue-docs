import Vue from "vue";
import { ChartPlugin, StackingAreaSeries, DateTime, Legend, DataLabel } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
    <ejs-chart :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :stackLabels = 'stackLabels'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='StackingArea' xName='x' yName='y' name='Organic' :marker = 'marker'> </e-series>
        <e-series :dataSource='seriesData' type='StackingArea' xName='x' yName='y1' name='Fair-trade' :marker = 'marker'> </e-series>
        <e-series :dataSource='seriesData' type='StackingArea' xName='x' yName='y2' name='Veg Alternatives' :marker = 'marker'> </e-series>
        <e-series :dataSource='seriesData' type='StackingArea' xName='x' yName='y3' name='Others' :marker = 'marker'> </e-series>
      </e-series-collection>
    </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: new Date(2000, 0, 1), y: 0.61, y1: 0.03, y2: 0.48, y3: 0.23 },
        { x: new Date(2001, 0, 1), y: 0.81, y1: 0.05, y2: 0.53, y3: 0.17 },
        { x: new Date(2002, 0, 1), y: 0.91, y1: 0.06, y2: 0.57, y3: 0.17 },
        { x: new Date(2003, 0, 1), y: 1,    y1: 0.09, y2: 0.61, y3: 0.20 },
        { x: new Date(2004, 0, 1), y: 1.19, y1: 0.14, y2: 0.63, y3: 0.23 },
        { x: new Date(2005, 0, 1), y: 1.47, y1: 0.20, y2: 0.64, y3: 0.36 },
        { x: new Date(2006, 0, 1), y: 1.74, y1: 0.29, y2: 0.66, y3: 0.43 },
        { x: new Date(2007, 0, 1), y: 1.98, y1: 0.46, y2: 0.76, y3: 0.52 },
        { x: new Date(2008, 0, 1), y: 1.99, y1: 0.64, y2: 0.77, y3: 0.72 },
        { x: new Date(2009, 0, 1), y: 1.70, y1: 0.75, y2: 0.55, y3: 1.29 },
        { x: new Date(2010, 0, 1), y: 1.48, y1: 1.06, y2: 0.54, y3: 1.38 },
        { x: new Date(2011, 0, 1), y: 1.38, y1: 1.25, y2: 0.57, y3: 1.82 },
        { x: new Date(2012, 0, 1), y: 1.66, y1: 1.55, y2: 0.61, y3: 2.16 },
        { x: new Date(2013, 0, 1), y: 1.66, y1: 1.55, y2: 0.67, y3: 2.51 },
        { x: new Date(2014, 0, 1), y: 1.67, y1: 1.65, y2: 0.67, y3: 2.61 }
      ],
      primaryXAxis: {
        title: 'Years',
        valueType: 'DateTime',
        intervalType: 'Years',
        labelFormat: 'y',
        edgeLabelPlacement: 'Shift',
        majorTickLines: { width: 0 }
      },
      primaryYAxis: {
        title: 'Spend in Billions',
        minimum: 0,
        maximum: 7,
        interval: 1,
        labelFormat: '{value}B',
        majorTickLines: { width: 0 }
      },
      stackLabels: { visible: true },
      marker:{dataLabel : {visible : true}},
      title: 'Trend in Sales of Ethical Produce'
    };
  },
  provide: {
    chart: [StackingAreaSeries, DateTime, Legend, DataLabel]
  }

});