import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(ChartPlugin);
Vue.use(ButtonPlugin);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-chart ref="chart" id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :title='title' :chartArea='chartArea' :axisRangeCalculated='axisRangeCalculated'>
            <e-series-collection>
              <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' columnWidth=0.5 :cornerRadius='cornerRadius'></e-series>
            </e-series-collection>
        </ejs-chart>
        <ejs-button id='update' @click.native='onClick'>Update Data</ejs-button>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Jewellery', y: 75 },
        { x: 'Shoes', y: 45 },
        { x: 'Footwear', y: 73 },
        { x: 'Pet Services', y: 53 },
        { x: 'Business Clothing', y: 85 },
        { x: 'Office Supplies', y: 68 },
        { x: 'Food', y: 45 }
      ],
      primaryXAxis: {
        valueType: 'Category', 
        majorGridLines: { width: 0 }, 
        labelStyle: { size: '12px' }, 
        labelIntersectAction: 'Rotate90'
      },
      primaryYAxis:
      {
        title: 'Sales (in percentage)', 
        labelFormat: '{value}%', 
        lineStyle: { width: 0 }, 
        majorTickLines: { width: 0 }, 
        interval: 5, 
        minimum: 0, 
        maximum: 100
      },
      cornerRadius: { 
        topLeft: 15, 
        topRight: 15 
      },
      title: 'Sales by product',
      chartArea: {
        border: {
          width: 0
        }
      }
    };
  },
  provide: {
    chart: [ColumnSeries, Category]
  },
  methods: {
    axisRangeCalculated: function (args) {
      if (args.axis.name === 'primaryYAxis') {
        args.maximum = args.maximum > 100 ? 100 : args.maximum;
        if (args.maximum > 80) {
          args.interval = 20;
        }
        else if (args.maximum > 40) {
          args.interval = 10;
        }
      }
    },
    onClick: function() {     
      var newData = this.$refs.chart.ej2Instances.series[0].dataSource.map((item) => {
        var value = getRandomInt(10, 90);
        return { x: item.x, y: value };
      });
      if (this.$refs.chart.ej2Instances.series[0].length > 0) {
          this.$refs.chart.ej2Instances.series[0].setData(newData, 500);
      }
    }
  }
});