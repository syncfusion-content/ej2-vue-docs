<template>
  <div id="app">
    <ejs-chart id="container" :primaryXAxis='primaryXAxis' :legendSettings='legendSettings'>
      <e-series-collection>
        <e-series :dataSource='vietnamData' xName='x' yName='y' name='Vietnam' type='Line' :marker='marker' :labelSettings='vietnamLabelSettings'></e-series>
        <e-series :dataSource='indonesiaData' xName='x' yName='y' name='Indonesia' type='Line' :marker='marker' :labelSettings='indonesiaLabelSettings'></e-series>
        <e-series :dataSource='franceData' xName='x' yName='y' name='France' type='Line' :marker='marker' :labelSettings='franceLabelSettings'></e-series>
        <e-series :dataSource='polandData' xName='x' yName='y' name='Poland' type='Line' :marker='marker' :labelSettings='polandLabelSettings'></e-series>
        <e-series :dataSource='mexicoData' xName='x' yName='y' name='Mexico' type='Line' :marker='marker' :labelSettings='mexicoLabelSettings'></e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries, Category, DataLabel, SeriesLabel, Legend } from "@syncfusion/ej2-vue-charts";

const vietnamData = [
  { x: 2016, y: 7.8 },
  { x: 2017, y: 10.3 },
  { x: 2018, y: 15.5 },
  { x: 2019, y: 17.5 },
  { x: 2020, y: 19.5 },
  { x: 2021, y: 23.0 },
  { x: 2022, y: 20.0 },
  { x: 2023, y: 19.0 },
  { x: 2024, y: 22.1 }
];

const indonesiaData = [
  { x: 2016, y: 4.8 },
  { x: 2017, y: 5.2 },
  { x: 2018, y: 6.2 },
  { x: 2019, y: 7.8 },
  { x: 2020, y: 9.3 },
  { x: 2021, y: 14.3 },
  { x: 2022, y: 15.6 },
  { x: 2023, y: 16.0 },
  { x: 2024, y: 17.0 }
];

const franceData = [
  { x: 2016, y: 14.6 },
  { x: 2017, y: 15.5 },
  { x: 2018, y: 15.4 },
  { x: 2019, y: 14.4 },
  { x: 2020, y: 11.6 },
  { x: 2021, y: 13.9 },
  { x: 2022, y: 12.1 },
  { x: 2023, y: 10.0 },
  { x: 2024, y: 10.8 }
];

const polandData = [
  { x: 2016, y: 8.9 },
  { x: 2017, y: 10.3 },
  { x: 2018, y: 10.8 },
  { x: 2019, y: 9.0 },
  { x: 2020, y: 7.9 },
  { x: 2021, y: 8.5 },
  { x: 2022, y: 7.4 },
  { x: 2023, y: 6.4 },
  { x: 2024, y: 7.1 }
];

const mexicoData = [
  { x: 2016, y: 19.0 },
  { x: 2017, y: 20.0 },
  { x: 2018, y: 20.2 },
  { x: 2019, y: 18.4 },
  { x: 2020, y: 16.8 },
  { x: 2021, y: 18.5 },
  { x: 2022, y: 18.4 },
  { x: 2023, y: 16.3 },
  { x: 2024, y: 13.7 }
];

const primaryXAxis = {
  valueType: 'Category'
};

const legendSettings = {
  visible: true
};

const marker = {
  visible: true
};

const vietnamLabelSettings = {
  visible: true,
  text: 'Vietnam',
  background: '#E8F5E9',
  border: { width: 2, color: '#2E7D32' },
  opacity: 0.9,
  font: { size: '12px', fontWeight: '600', color: '#2E7D32' },
  showOverlapText: true
};

const indonesiaLabelSettings = {
  visible: true,
  text: 'Indonesia',
  background: '#FFF3E0',
  border: { width: 2, color: '#FB8C00' },
  opacity: 0.9,
  font: { size: '12px', fontWeight: '600', color: '#FB8C00' },
  showOverlapText: true
};

const franceLabelSettings = {
  visible: true,
  text: 'France',
  background: '#E3F2FD',
  border: { width: 2, color: '#1976D2' },
  opacity: 0.9,
  font: { size: '12px', fontWeight: '600', color: '#1976D2' },
  showOverlapText: true
};

const polandLabelSettings = {
  visible: true,
  text: 'Poland',
  background: '#F3E5F5',
  border: { width: 2, color: '#8E24AA' },
  opacity: 0.9,
  font: { size: '12px', fontWeight: '600', color: '#8E24AA' },
  showOverlapText: true
};

const mexicoLabelSettings = {
  visible: true,
  text: 'Mexico',
  background: '#FBE9E7',
  border: { width: 2, color: '#D84315' },
  opacity: 0.9,
  font: { size: '12px', fontWeight: '600', color: '#D84315' },
  showOverlapText: true
};

provide('chart', [LineSeries, Category, DataLabel, SeriesLabel, Legend]);
</script>

<style>
  #container {
    height: 420px;
  }
</style>
