<template>
  <div id="app">
    <ejs-button cssClass="e-flat" iconCss='e-icons e-export-icon' isPrimary=true v-on:click.native='onClick'
      id="exportBtn">EXPORT</ejs-button>
    <ejs-chart ref="chart" id="container" :title='title' :primaryXAxis='primaryXAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold'> </e-series>
      </e-series-collection>
    </ejs-chart>
    <ejs-chart ref="chart1" id="container1" :title='title' :primaryXAxis='primaryXAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category, Export } from "@syncfusion/ej2-vue-charts";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";


const seriesData = [
  { country: "USA", gold: 50 },
  { country: "China", gold: 40 },
  { country: "Japan", gold: 70 },
  { country: "Australia", gold: 60 },
  { country: "France", gold: 50 },
  { country: "Germany", gold: 40 },
  { country: "Italy", gold: 40 },
  { country: "Sweden", gold: 30 }
];
const primaryXAxis = {
  valueType: 'Category',
  title: 'Countries'
};
const title = "Olympic Medals";

provide('chart', [ColumnSeries, Category, Export]);

const onClick = () => {
  let chart1 = document.getElementById("container").ej2_instances[0];
  let chart2 = document.getElementById("container1").ej2_instances[0];
  chart1.exportModule.export('PNG', 'Chart', null, [chart1, chart2]);
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