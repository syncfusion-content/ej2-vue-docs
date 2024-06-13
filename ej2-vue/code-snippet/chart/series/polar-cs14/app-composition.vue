<template>
  <div id="app">
    <ejs-button cssClass="e-flat" iconCss='e-icons e-export-icon' isPrimary=true v-on:click='onClick'
      id="exportBtn">EXPORT</ejs-button>
    <ejs-chart ref="chart" id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' width=2> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category, Export } from "@syncfusion/ej2-vue-charts";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";


const seriesData = [
  { x: 'John', y: 10000 },
  { x: 'Jake', y: 12000 },
  { x: 'Peter', y: 18000 },
  { x: 'James', y: 11000 },
  { x: 'Mary', y: 9700 }
];
const primaryXAxis = {
  title: 'Manager',
  valueType: 'Category',
  majorGridLines: { width: 0 }
};
const primaryYAxis = {
  title: 'Sales',
  minimum: 0,
  maximum: 20000,
  majorGridLines: { width: 0 }
};
const title = "Sales Comparision";

provide('chart', [ColumnSeries, Category, Export]);

const onClick = () => {
  const header = {
    content: 'Chart Header',
    fontSize: 15
  };
  const footer = {
    content: 'Chart Footer',
    fontSize: 15
  };
  let chart1 = document.getElementById("container").ej2_instances[0];
  chart1.exportModule.export('PDF', 'Chart', 1, [chart1], null, null, true, header, footer);
};


</script>
<style>
#container {
  height: 350px;
}

.e-export-icon::before {
  content: '\e728';
}
</style>