
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, Tooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' columnFacet='Cylinder' xName='country' yName='gold'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data: function() {
    return {
      seriesData: [
        { country: "USA",       gold: 50 },
        { country: "Japan",     gold: 70 },
        { country: "Australia", gold: 60 },
        { country: "France",    gold: 50 },
        { country: "Italy",     gold: 40 },
        { country: "Sweden",    gold: 55 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        interval: 1
      },
      primaryYAxis:
      {
        minimum: 0, 
        maximum: 80,
        interval: 10, 
        title: 'Medal Count'
      },
      tooltip: { enable: true, header: "<b>${point.tooltip}</b>", format: "Gold Medal: <b>${point.y}</b>" },
      title: "Olympic Gold Medal Counts - RIO"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Tooltip ]
  }

});