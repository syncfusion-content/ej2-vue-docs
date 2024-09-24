<template>
  <div id="app">
    <ejs-chart :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='StackingArea' xName='x' yName='y' name='Organic' :marker='marker' :emptyPointSettings='emptyPointSettings'> </e-series>
        <e-series :dataSource='seriesData' type='StackingArea' xName='x' yName='y1' name='Fair-trade'> </e-series>
        <e-series :dataSource='seriesData' type='StackingArea' xName='x' yName='y2' name='Veg Alternatives' :emptyPointSettings='emptyPointSettings1'> </e-series>
        <e-series :dataSource='seriesData' type='StackingArea' xName='x' yName='y3' name='Others'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, StackingAreaSeries, DateTime, Legend } from "@syncfusion/ej2-vue-charts";

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
        { x: new Date(2000, 0, 1), y: 0.61, y1: 0.03, y2: 0.48, y3: 0.23 },
        { x: new Date(2001, 0, 1), y: 0.81, y1: 0.05, y2: 0.53, y3: 0.17 },
        { x: new Date(2002, 0, 1), y: 0.91, y1: 0.06, y2: 0.57, y3: 0.17 },
        { x: new Date(2003, 0, 1), y: null, y1: 0.09, y2: 0.61, y3: 0.20 },
        { x: new Date(2004, 0, 1), y: 1.19, y1: 0.14, y2: 0.63, y3: 0.23 },
        { x: new Date(2005, 0, 1), y: 1.47, y1: 0.20, y2: 0.64, y3: 0.36 },
        { x: new Date(2006, 0, 1), y: 1.74, y1: 0.29, y2: 0.66, y3: 0.43 },
        { x: new Date(2007, 0, 1), y: 1.98, y1: 0.46, y2: 0.76, y3: 0.52 },
        { x: new Date(2008, 0, 1), y: 1.99, y1: 0.64, y2: 0.77, y3: 0.72 },
        { x: new Date(2009, 0, 1), y: 1.70, y1: 0.75, y2: undefined, y3: 1.29 },
        { x: new Date(2010, 0, 1), y: 1.48, y1: 1.06, y2: 0.54, y3: 1.38 },
        { x: new Date(2011, 0, 1), y: 1.38, y1: 1.25, y2: 0.57, y3: 1.82 },
        { x: new Date(2012, 0, 1), y: 1.66, y1: 1.55, y2: 0.61, y3: 2.16 },
        { x: new Date(2013, 0, 1), y: 1.66, y1: 1.55, y2: 0.67, y3: 2.51 },
        { x: new Date(2014, 0, 1), y: 1.67, y1: 1.65, y2: 0.67, y3: 2.61 }
      ],
      primaryXAxis: {
        title: 'Years',
        valueType: 'DateTime',
        intervalType: 'Years',
        labelFormat: 'y',
        edgeLabelPlacement: 'Shift',
        majorTickLines: { width: 0 }
      },
      primaryYAxis: {
        title: 'Spend in Billions',
        minimum: 0,
        maximum: 7,
        interval: 1,
        labelFormat: '{value}B',
        majorTickLines: { width: 0 }
      },
      title: 'Trend in Sales of Ethical Produce',
      marker: { 
        visible: true, 
        isFilled: true, 
        width: 7, 
        height: 7 
      },
      emptyPointSettings: { 
        mode: 'Zero',
        fill: 'red',
        border: { 
          width: 2, 
          color: 'green' 
        }
      },
      emptyPointSettings1: { 
        mode: 'Gap' 
      }
    };
  },
  provide: {
    chart: [StackingAreaSeries, DateTime, Legend]
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>