
import Vue from "vue";
import { ChartPlugin, PolarSeries, Category, AreaSeries, Export } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
  <ejs-chart ref="chart" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :loaded='loaded' :beforeExport = 'beforeExport'>
    <e-series-collection>
      <e-series :dataSource='seriesData' type='Polar' xName='x' yName='y' drawType='Area'> </e-series>
    </e-series-collection>
  </ejs-chart>
    </div>
`,

  data() {
    return {
    seriesData:[
     { x: 'Jan', y: -1 }, { x: 'Feb', y: -1 }, { x: 'Mar', y: 2 },
    { x: 'Apr', y: 8 }, { x: 'May', y: 13 }, { x: 'Jun', y: 18 },
    { x: 'Jul', y: 21 }, { x: 'Aug', y: 20 }, { x: 'Sep', y: 16 },
    { x: 'Oct', y: 10 }, { x: 'Nov', y: 4 }, { x: 'Dec', y: 0 }
     ],
      primaryXAxis: {
          valueType: 'Category'
        },
         primaryYAxis: {
            minimum: -5, maximum: 35, interval: 10,
            title: 'Temperature in Celsius',
            labelFormat: '{value}C'
        },
      title: "Climate Graph-2012"
    };
  },
  provide: {
    chart: [PolarSeries, Category, AreaSeries, Export]
  },
  methods: {
    beforeExport: function (args) {
      args.excelProperties.rows[0].cells[0].value = 'Changed Title';
      args.excelProperties.rows[1].cells[0].value = 'X Title';
      args.excelProperties.rows[1].cells[1].value = 'Y Title';
      args.excelProperties.rows[2].cells[1].value = args.excelProperties.rows[2].cells[1].value + 2;
    },
    loaded: function(args) {
         args.chart.exportModule.export('PNG', 'export');
   }
  }

});