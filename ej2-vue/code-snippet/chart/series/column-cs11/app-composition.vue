<template>
  <div id="app">
       <ejs-chart id="container" ref="chart" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :chartArea='chartArea'
       :legendSettings='legendSettings' :loaded='loaded'>
          <e-series-collection>
              <e-series :dataSource='seriesData' :marker='marker' type='Column' xName='x' yName='y' name='Tiger' width='1' :cornerRadius="cornerRadius"> </e-series>
          </e-series-collection>
      </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";

import {   ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries,
ColumnSeries,
Category,
DataLabel,
Tooltip,
Legend } from "@syncfusion/ej2-vue-charts";
import {ref}from 'vue';

const chart=ref(null);
let count = 0;
let datasource1 = [
{ x: 'Egg', y: 206 },
{ x: 'Fish', y: 123 },
{ x: 'Misc', y: 48 },
{ x: 'Tea', y: 240 },
{ x: 'Fruit', y: 170 }
];
let datasource2 = [
{ x: 'Egg', y: 86 },
{ x: 'Fish', y: 173 },
{ x: 'Misc', y: 188 },
{ x: 'Tea', y: 109 },
{ x: 'Fruit', y: 100 }

];
let datasource3 = [
{ x: 'Egg', y: 156 },
{ x: 'Fish', y: 33 },
{ x: 'Misc', y: 260 },
{ x: 'Tea', y: 200 },
{ x: 'Fruit', y: 30 }

];

   const seriesData= [
                  { x: 'Egg', y: 106 },
                  { x: "Fish", y: 103 },
                  { x: "Misc", y: 198 },
                  { x: "Tea", y: 189 },
                  { x: "Fruit", y: 250 }
            ];
            const  primaryXAxis= {
            valueType: "Category",
            interval: 1,
            majorGridLines: { width: 0 },
            tickPosition: "Inside",
            labelPosition: "Inside",
            labelStyle: { color: "#ffffff" }
      };
      const  primaryYAxis= {
          minimum: 0,
          maximum: 300,
          interval: 50,
          majorGridLines: { width: 0 },
          majorTickLines: { width: 0 },
          lineStyle: { width: 0 },
          labelStyle: { color: "transparent" }
      };
      const legendSettings={ visible: false },
        tooltip= {
          enable: false
      };
      const cornerRadius= {
        bottomLeft: 10,
        bottomRight: 10,
        topLeft: 10,
        topRight: 10
      };
      const marker= {
      dataLabel: {
        visible: true,
        position: "Top",
      }
      };
      const chartArea= { border: { width: 0 } };
      const title= "Trade in Food Groups";

provide('chart',  [ColumnSeries, Legend, DataLabel, Category, Tooltip]);

  const loaded=()=> {
    chart.value.ej2Instances.loaded = null;
    let columninterval = setInterval(() => {
      if (document.getElementById('container')) {
      if (count === 0) {
        chart.value.ej2Instances.series[0].dataSource = datasource1;
        chart.value.ej2Instances.animate();
        count++;
      } else if (count === 1) {
        chart.value.ej2Instances.series[0].dataSource = datasource2;
        chart.value.ej2Instances.animate();
        count++;
      } else if (count === 2) {
        chart.value.ej2Instances.series[0].dataSource = datasource3;
        chart.value.ej2Instances.animate();
        count = 0;
      }
      } else {
        clearInterval(columninterval)
      }
    }, 2000);
  }


</script>
<style>
#container {
 height: 350px;
}
</style>