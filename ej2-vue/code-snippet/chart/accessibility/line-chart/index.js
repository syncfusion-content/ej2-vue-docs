import Vue from "vue";
import { ChartPlugin, Category, LineSeries, Tooltip, Legend, DataLabel } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :focusBorderColor="focusBorderColor" :focusBorderWidth="focusBorderWidth" :focusBorderMargin="focusBorderMargin"  :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :accessibility='accessibility' :tooltip='tooltip' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' name='Sales' type='Line' xName='month' yName='sales' :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { month: 'Jan', sales: 35 },
        { month: 'Feb', sales: 28 },
        { month: 'Mar', sales: 34 },
        { month: 'Apr', sales: 32 },
        { month: 'May', sales: 40 },
        { month: 'Jun', sales: 32 },
        { month: 'Jul', sales: 35 },
        { month: 'Aug', sales: 55 },
        { month: 'Sep', sales: 38 },
        { month: 'Oct', sales: 30 },
        { month: 'Nov', sales: 25 },
        { month: 'Dec', sales: 32 }
      ],
      primaryXAxis: {
        valueType: 'Category'
      },
      primaryYAxis: {
        labelFormat: '${value}K'
      },
      marker: {
        visible: true,
        dataLabel: {
          visible: true
        }
      },
      title: "Sales Analysis",
      accessibility: {
        accessibilityDescription: 'A line chart displaying the sales analysis for each month.',
        accessibilityRole: 'chart'
      },
      focusBorderColor: '#FF0000',
      focusBorderWidth: 3,
      focusBorderMargin: 5,
      tooltip: { enable: true },
      legendSettings: { visible: true }
    };
  },
  provide: {
    chart: [Category, LineSeries, Tooltip, Legend, DataLabel]
  }

});