
import Vue from "vue";
import { ChartPlugin, ColumnSeries, LineSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='group.x' yName='group.y' name='USA' enableComplexProperty="true"> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='group.x' yName='y' name='UK' enableComplexProperty="true"> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
       seriesData:[
  {group: { x: 'Aaa', y: 10}, y: 20},
  {group: { x: 'Baa', y: 30}, y: 10}
    ],
        primaryXAxis: {
            valueType: 'Category'
        },
        marker: { visible: true, width: 10, opacity: 0.6, height: 10 },
         title: "Annual Growth GDP in France"
    };
  },
  provide: {
    chart: [ColumnSeries, LineSeries, Category]
  },

});