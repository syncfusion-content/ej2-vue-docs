

<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :zoomSettings='zoom' :legendSettings='legend'>
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='Area' xName='x' yName='y' name='Product X' :border='border' :animation='animation'
                opacity=0.3> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, AreaSeries, DateTime, Zoom } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let series1: Object[] = [];
let point1: Object;
let value: number = 40;
let i: number;
for (i = 1; i < 500; i++) {
    if (Math.random() > .5) {
        value += Math.random();
    } else {
        value -= Math.random();
    }
    point1 = { x: new Date(1950, i + 2, i), y: value.toFixed(1) };
    series1.push(point1);
}

export default {
  data() {
    return {
      seriesData1: series1,
      primaryXAxis: {
           valueType: 'DateTime',
           labelFormat: 'yMMM'
        },
        zoom:
        {
             enableSelectionZooming: true,
              mode: 'X'
        },
        title: 'Sales History of Product X',
        legend: { visible: false },
        border: { width: 0.5, color: '#00bdae' },
        animation: { enable: false }
    };
  },
  provide: {
    chart: [AreaSeries,  DateTime, Zoom]
  },
};
</script>
<style>
 #container {
    height: 350px;
 }
</style>


