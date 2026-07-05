
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-accumulationchart
        id="container"
        :title="title"
        :subTitle="subTitle"
        :tooltip="tooltip"
        :legendSettings="legendSettings"
        :border="border"
        :enableBorderOnMouseMove="false">

        <e-accumulation-series-collection>

          <!-- Outer Donut: Total Sales -->
          <e-accumulation-series
            :dataSource="totalSalesData"
            type="Pie"
            xName="x"
            yName="y"
            radius="90%"
            innerRadius="60%"
            name="Total Sales"
            :dataLabel="outerDataLabel"
            tooltipMappingName="x">
          </e-accumulation-series>

          <!-- Inner Donut: Total Profit -->
          <e-accumulation-series
            :dataSource="totalProfitData"
            type="Pie"
            xName="x"
            yName="y"
            radius="50%"
            innerRadius="50%"
            name="Total Profit"
            :dataLabel="innerDataLabel"
            tooltipMappingName="x">
          </e-accumulation-series>

        </e-accumulation-series-collection>
      </ejs-accumulationchart>
    </div>`,

  data() {
    return {
      title: 'Product Sales vs Profit Analysis',
      subTitle: 'Comparing total sales revenue with profit margins by product category',
      totalSalesData: [
        { x: 'Electronics', y: 45000, text: '45K' },
        { x: 'Fashion', y: 32000, text: '32K' },
        { x: 'Home & Garden', y: 18000, text: '18K' },
        { x: 'Sports', y: 15000, text: '15K' },
        { x: 'Books', y: 8000, text: '8K' }
      ],
      totalProfitData: [
        { x: 'Electronics', y: 18000, text: '18K', profit: '40%' },
        { x: 'Fashion', y: 12800, text: '12.8K', profit: '40%' },
        { x: 'Home & Garden', y: 6300, text: '6.3K', profit: '35%' },
        { x: 'Sports', y: 4500, text: '4.5K', profit: '30%' },
        { x: 'Books', y: 2400, text: '2.4K', profit: '30%' }
      ],
      tooltip: {
        enable: true,
        format:
          '<b>${point.x}</b><br/>Value: <b>$${point.y}</b><br/>Percentage: <b>${point.percentage}%</b>'
      },
      legendSettings: {
        mappingKey: 'x'
      },
      border: {
        color: '#333',
        width: 2
      },
      outerDataLabel: {
        name: 'text',
        visible: true,
        position: 'Outside',
        connectorStyle: {
          type: 'Curve',
          color: 'black',
          width: 2,
          dashArray: '2,1',
          length: '5'
        }
      },
      innerDataLabel: {
        name: 'text',
        visible: true,
        position: 'Inside',
        connectorStyle: {
          type: 'Curve',
          color: 'black',
          width: 2,
          dashArray: '2,1',
          length: '5'
        }
      }
    };
  },
  provide: {
    accumulationchart: [PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip]
  },
});
