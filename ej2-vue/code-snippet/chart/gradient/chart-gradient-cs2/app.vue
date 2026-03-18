<template>
  <div id="app">
    <ejs-chart id="container" :title="title" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
      :legendSettings="legendSettings">
      <e-series-collection>
        <e-series :dataSource="OrdersData" type="Spline" xName="Month" yName="Orders" name="Orders"
          :marker="marker" :trendlines="trendlines">
        </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>

<script>
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineSeries, Category, Legend, Marker, Trendlines, LineSeries } from "@syncfusion/ej2-vue-charts";

export default {
  name: 'App',
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data() {
    return {
      OrdersData: [
        { Month: "Jan", Orders: 24 },
        { Month: "Feb", Orders: 30 },
        { Month: "Mar", Orders: 27 },
        { Month: "Apr", Orders: 34 },
        { Month: "May", Orders: 41 },
        { Month: "Jun", Orders: 37 },
        { Month: "Jul", Orders: 49 },
        { Month: "Aug", Orders: 45 },
        { Month: "Sep", Orders: 39 },
        { Month: "Oct", Orders: 46 },
        { Month: "Nov", Orders: 54 },
        { Month: "Dec", Orders: 52 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        majorGridLines: {
          width: 0
        }
      },
      primaryYAxis: {
        lineStyle: {
          width: 0
        },
        majorTickLines: {
          width: 0
        }
      },
      marker: {
        visible: true
      },
      trendlines: [
        {
          type: 'Linear',
          width: 3,
          name: 'Trend',
          linearGradient: {
            x1: 0, y1: 0,
            x2: 1, y2: 0,
            gradientColorStop: [
              { color: '#F97316', offset: 0, opacity: 1 },
              { color: '#4F46E5', offset: 100, opacity: 1 }
            ]
          }
        }
      ],
      legendSettings: {
        visible: true
      },
      title: 'Retail Orders Processed'
    };
  },
  provide: {
    chart: [SplineSeries, Category, Legend, Marker, Trendlines, LineSeries]
  }
}
</script>

<style>
#container {
  height: 400px;
}
</style>
