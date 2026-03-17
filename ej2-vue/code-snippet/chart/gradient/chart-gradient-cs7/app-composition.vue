<template>
  <div id="app">
    <ejs-accumulation-chart id="container" :title="title" :tooltip="tooltip" :legendSettings="legendSettings"
      :enableSmartLabels="enableSmartLabels">
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource="CategoryData" type="Pie" xName="Category" yName="Share" 
          name="Share by Category" :dataLabel="dataLabel" :border="border" :linearGradient="linearGradient">
        </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulation-chart>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { AccumulationChartComponent as EjsAccumulationChart, AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries, PyramidSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";

const CategoryData = [
  { Category: "Electronics", Share: 22.5, DataLabelMappingName: "Electronics: 22.5%" },
  { Category: "Fashion", Share: 18.0, DataLabelMappingName: "Fashion: 18.0%" },
  { Category: "Home & Kitchen", Share: 15.5, DataLabelMappingName: "Home & Kitchen: 15.5%" },
  { Category: "Beauty & Health", Share: 10.0, DataLabelMappingName: "Beauty & Health: 10.0%" },
  { Category: "Sports & Outdoors", Share: 9.5, DataLabelMappingName: "Sports & Outdoors: 9.5%" },
  { Category: "Books", Share: 8.0, DataLabelMappingName: "Books: 8.0%" },
  { Category: "Toys & Games", Share: 7.0, DataLabelMappingName: "Toys & Games: 7.0%" },
  { Category: "Groceries", Share: 6.0, DataLabelMappingName: "Groceries: 6.0%" },
  { Category: "Other", Share: 3.5, DataLabelMappingName: "Other: 3.5%" }
];

const dataLabel = {
  visible: true,
  name: 'DataLabelMappingName',
  position: 'Outside',
  connectorStyle: { length: '10px' },
  font: { size: '12px' }
};

const border = {
  color: '#FFFFFF',
  width: 2
};

const linearGradient = {
  x1: 0.1, y1: 0,
  x2: 0.9, y2: 1,
  gradientColorStop: [
    { color: '#4F46E5', offset: 0, opacity: 1, brighten: 0.55 },
    { color: '#4F46E5', offset: 60, opacity: 0.98, brighten: 0.15 },
    { color: '#4F46E5', offset: 100, opacity: 0.95, brighten: -0.25 }
  ]
};

const legendSettings = { visible: true, position: 'Right' };
const tooltip = { enable: true };
const enableSmartLabels = true;
const title = 'Orders by Category';
provide('accumulationchart', [PyramidSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]);

</script>
<style>
#container {
  height: 400px;
}
</style>
