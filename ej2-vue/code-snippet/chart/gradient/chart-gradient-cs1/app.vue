<template>
  <div id="app">
    <ejs-chart id="container" :title="title" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
      :tooltip="tooltip" :legendSettings="legendSettings">
      <e-series-collection>
        <e-series :dataSource="SalesData" type="Column" xName="Month" yName="Amount" name="Sales"
          :linearGradient="linearGradient" :marker="marker">
        </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>

<script>
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category, Legend, Tooltip, DataLabel, Marker } from "@syncfusion/ej2-vue-charts";

export default {
  name: 'App',
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data() {
    return {
      SalesData: [
        { Month: 'Jan', Amount: 78 },
        { Month: 'Feb', Amount: 88 },
        { Month: 'Mar', Amount: 99 },
        { Month: 'Apr', Amount: 92 },
        { Month: 'May', Amount: 95 },
        { Month: 'Jun', Amount: 102 },
        { Month: 'Jul', Amount: 110 },
        { Month: 'Aug', Amount: 105 }
      ],
      primaryXAxis: {
        valueType: 'Category'
      },
      primaryYAxis: {
        labelFormat: '${value}k'
      },
      linearGradient: {
        x1: 0, y1: 0,
        x2: 0, y2: 1,
        gradientColorStop: [
          { color: '#4F46E5', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
          { color: '#22D3EE', offset: 100, opacity: 0.95, lighten: 0, brighten: 0.9 }
        ]
      },
      marker: { visible: true, isFilled: true, dataLabel: { visible: true } },
      tooltip: { enable: true },
      legendSettings: { visible: true },
      title: 'Monthly Sales Performance'
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Legend, Tooltip, DataLabel, Marker]
  }
}
</script>

<style>
#container {
  height: 400px;
}
</style>
