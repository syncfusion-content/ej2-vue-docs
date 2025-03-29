<template>
  <ejs-chart ref="chart" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :loaded='loaded' :beforeExport = 'beforeExport'>
    <e-series-collection>
      <e-series :dataSource='seriesData' type='Polar' xName='x' yName='y' drawType='Area'> </e-series>
    </e-series-collection>
  </ejs-chart>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, PolarSeries, Category, AreaSeries, Export } from "@syncfusion/ej2-vue-charts";


const seriesData = [
  { x: 'Jan', y: -1 }, { x: 'Feb', y: -1 }, { x: 'Mar', y: 2 },
  { x: 'Apr', y: 8 }, { x: 'May', y: 13 }, { x: 'Jun', y: 18 },
  { x: 'Jul', y: 21 }, { x: 'Aug', y: 20 }, { x: 'Sep', y: 16 },
  { x: 'Oct', y: 10 }, { x: 'Nov', y: 4 }, { x: 'Dec', y: 0 }
];
const primaryXAxis = {
  valueType: 'Category'
};
const primaryYAxis = {
  minimum: -5, maximum: 35, interval: 10,
  title: 'Temperature in Celsius',
  labelFormat: '{value}C'
};
const title = "Climate Graph-2012";
const beforeExport = (args) => {
  args.excelProperties.rows[0].cells[0].value = 'Changed Title';
  args.excelProperties.rows[1].cells[0].value = 'X Title';
  args.excelProperties.rows[1].cells[1].value = 'Y Title';
  args.excelProperties.rows[2].cells[1].value = args.excelProperties.rows[2].cells[1].value + 2;
}
provide('chart', [PolarSeries, Category, AreaSeries, Export]);

const loaded = (args) => {
  args.chart.exportModule.export('XLSX', 'export');
};

</script>