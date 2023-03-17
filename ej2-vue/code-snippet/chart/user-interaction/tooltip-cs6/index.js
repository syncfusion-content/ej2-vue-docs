
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, Tooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' tooltipMappingName='text' :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
    seriesData:[
                    { x: 'Germany', y: 72, text: 'GER: 72'},
                    { x: 'Russia', y: 103.1, text: 'RUS: 103.1'},
                    { x: 'Brazil', y: 139.1, text: 'BRZ: 139.1'},
                    { x: 'India', y: 462.1, text: 'IND: 462.1'},
                    { x: 'China', y: 721.4, text: 'CHN: 721.4'},
                    { x: 'United States Of America', y: 286.9, text: 'USA: 286.9'},
                    { x: 'Great Britain', y: 115.1, text: 'GBR: 115.1'},
                    { x: 'Nigeria', y: 97.2, text: 'NGR: 97.2'},
        ],
      primaryXAxis: {
           valueType: 'Category'
        },
      marker: {
          visible: true, width: 10, height: 10
        },
      tooltip: {enable: true, format: '${point.tooltip}'},
      title: 'Internet Users in Million – 2016',
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Tooltip]
  },

});