<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :focusBorderColor="focusBorderColor" :focusBorderWidth="focusBorderWidth" :focusBorderMargin="focusBorderMargin"  :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :accessibility='accessibility'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Category, LineSeries } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
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
        valueType: 'Category',
        title: 'Month'
      },
      primaryYAxis: {
        title: 'Sales count'
      },
      title: "Monthly Sales Comparison",
      accessibility: {
        accessibilityDescription: 'A line chart displaying the sales analysis for each month.',
        accessibilityRole: 'chart'
      },
      focusBorderColor: '#FF0000',
      focusBorderWidth: 3,
      focusBorderMargin: 5
    };
  },
  provide: {
    chart: [Category, LineSeries]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>