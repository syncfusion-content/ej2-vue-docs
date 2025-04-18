import Vue from "vue";
import { ChartPlugin, StepLineSeries, DateTime, Tooltip, Legend } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StepLine' xName='x' yName='y' name='China' width=2 :marker='marker'>
                </e-series>
                <e-series :dataSource='seriesData' type='StepLine' xName='x' yName='y1' name='Australia' width=2 :marker='marker'>
                </e-series>
                <e-series :dataSource='seriesData' type='StepLine' xName='x' yName='y2' name='Japan' width=2 :marker='marker'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: new Date(1975, 0, 1), y: 16,   y1: 10,  y2: 4.5 },
        { x: new Date(1980, 0, 1), y: 12.5, y1: 7.5, y2: 5 },
        { x: new Date(1985, 0, 1), y: 19,   y1: 11,  y2: 6.5 },
        { x: new Date(1990, 0, 1), y: 14.4, y1: 7,   y2: 4.4 },
        { x: new Date(1995, 0, 1), y: 11.5, y1: 8,   y2: 5 },
        { x: new Date(2000, 0, 1), y: 14,   y1: 6,   y2: 1.5 },
        { x: new Date(2005, 0, 1), y: 10,   y1: 3.5, y2: 2.5 },
        { x: new Date(2010, 0, 1), y: 16,   y1: 7,   y2: 3.7 }
      ],
      primaryXAxis: {
        title: 'Years',
        lineStyle: { width: 0 },
        labelFormat: 'y',
        intervalType: 'Years',
        valueType: 'DateTime',
        edgeLabelPlacement: 'Shift'
      },
      primaryYAxis: {
        title: 'Percentage (%)',
        minimum: 0,
        maximum: 20,
        interval: 4,
        labelFormat: '{value}%'
      },
      marker: {
        visible: true, 
        width: 10, 
        height: 10
      },
      tooltip: { enable: true, enableHighlight: true, showNearestTooltip: true },
      title: "Unemployment Rates 1975-2010",
      legendSettings: { visible: true }
    };
  },
  provide: {
    chart: [StepLineSeries, DateTime, Tooltip, Legend]
  }

});