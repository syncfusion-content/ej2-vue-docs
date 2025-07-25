
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, DataLabel, LastValueLabel, Legend, Tooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	  el: '#app',
  template: `
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :width='width' :tooltip='tooltip'>
            <e-series-collection>
            <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='series1' :marker='marker' :lastValueLabel='lastValueLabel'></e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
  `,
  data() {
    return {
      seriesData: [
        { x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 },
        { x: 2008, y: 27 }, { x: 2009, y: 32 }, { x: 2010, y: 35 },
        { x: 2011, y: 40 }
      ],
      primaryXAxis: {
        title: 'Year',
        interval: 1
      },
      primaryYAxis: {
        title: 'Efficiency',
        labelFormat: '{value}%'
      },
      marker: {
        visible: false,
        dataLabel: { visible: true }
      },
      lastValueLabel: { enable: true },
      tooltip: { enable: true },
      width: '90%',
      title: 'Efficiency of oil-fired power production'
    };
  },
  provide: {
    chart: [ColumnSeries, Category, DataLabel, LastValueLabel, Legend, Tooltip]
  }
});