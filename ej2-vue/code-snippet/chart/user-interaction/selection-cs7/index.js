
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, Legend, Selection } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'  selectionMode='Point' isMultiSelect='true'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold' selectionStyle='chartSelection1'> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='silver' name='Silver' selectionStyle='chartSelection2'> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='bronze' name='Bronze' selectionStyle='chartSelection3'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
                { country: "USA", gold: 50, silver: 70, bronze: 45 },
                { country: "China", gold: 40, silver: 60, bronze: 55 },
                { country: "Japan", gold: 70, silver: 60, bronze: 50 },
                { country: "Australia", gold: 60, silver: 56, bronze: 40 },
                { country: "France", gold: 50, silver: 45, bronze: 35 },
                { country: "Germany", gold: 40, silver: 30, bronze: 22 },
                { country: "Italy", gold: 40, silver: 35, bronze: 37 },
                { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
              ],
        primaryXAxis: {
           valueType: 'Category',
           title: 'Countries'
        },
      animation: { enable: false },
      legendSettings: { visible: true, toggleVisibility: false }
      title: "Olympic Medals"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Legend, Selection]
  }

});