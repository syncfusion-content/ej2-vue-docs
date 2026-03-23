<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' 
               :legendSettings='legendSettings' :chartArea='chartArea' :tooltip='tooltip' 
               :legendRender='legendRender'>
      <template v-slot:legendTemplate="{ data }">
        <div class="coal-legend-item" :style="{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px 8px',
          opacity: data.opacity || 1,
          transition: 'opacity .3s',
          cursor: 'pointer'
        }">
          <img class="e-icon" :src="legendIcons[data.text] || ''" width="24" height="24" 
               style="border-radius:4px;object-fit:cover;" />
          <span class="e-label" :style="{
            fontSize: '13px',
            fontWeight: 'bold',
            color: data.fill
          }">{{ data.text }}</span>
        </div>
      </template>
      <e-series-collection>
        <e-series :dataSource='chinaData' type='Column' xName='x' yName='y' name='China' 
                  :animation='animation' :marker='marker'> </e-series>
        <e-series :dataSource='indiaData' type='Column' xName='x' yName='y' name='India' 
                  :animation='animation' :marker='marker'> </e-series>
        <e-series :dataSource='indonesiaData' type='Column' xName='x' yName='y' name='Indonesia' 
                  :animation='animation' :marker='marker'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Legend, Tooltip, DataLabel } from "@syncfusion/ej2-vue-charts";

const legendIcons = {
  'China': 'https://img.icons8.com/color/100/china.png',
  'India': 'https://img.icons8.com/color/100/india.png',
  'Indonesia': 'https://img.icons8.com/color/100/indonesia.png'
};

const chinaData = [
  { x: 2022, y: 4152.7 }, 
  { x: 2023, y: 4362.1 }, 
  { x: 2024, y: 4780.0 }
];

const indiaData = [
  { x: 2022, y: 863.2 }, 
  { x: 2023, y: 968.8 }, 
  { x: 2024, y: 1085.1 }
];

const indonesiaData = [
  { x: 2022, y: 693.4 }, 
  { x: 2023, y: 781.3 }, 
  { x: 2024, y: 836.1 }
];

const primaryXAxis = {
  interval: 1,
  edgeLabelPlacement: 'Shift',
  majorGridLines: {
    width: 0
  }
};

const primaryYAxis = {
  title: 'Coal Production (Million Tonnes)',
  labelFormat: '{value}t'
};

const chartArea = {
  border: {
    width: 0
  }
};

const animation = {
  enable: false
};

const marker = {
  dataLabel: {
    visible: true
  }
};

const legendSettings = {
  visible: true,
  template: '<div class="coal-legend-item" style="display:flex;align-items:center;gap:8px;padding:4px 8px;opacity:1;transition:opacity .3s;cursor:pointer;">' +
            '<img class="e-icon" src="" width="24" height="24" style="border-radius:4px;object-fit:cover;" />' +
            '<span class="e-label" style="font-size:13px;font-weight:bold;color:;"></span>' +
            '</div>'
};

const tooltip = {
  enable: true
};

const title = 'Top 3 Countries by Coal Production (2022–2024)';

const legendRender = (args) => {
  const container = document.getElementById("container");
  const chartInstance = container && container.ej2_instances ? container.ej2_instances[0] : null;
  if (chartInstance) {
    const matchedSeries = chartInstance.series.filter((s) => s.name === args.text)[0];
    const opacity = (matchedSeries && matchedSeries.visible === false) ? '0.5' : '1';
    args.template = args.template
      .replace('opacity:1;', 'opacity:' + opacity + ';')
      .replace('src=""', 'src="' + (legendIcons[args.text] || '') + '"')
      .replace('color:;', 'color:' + args.fill + ';')
      .replace('></span>', '>' + args.text + '</span>');
  }
};

provide('chart', [ColumnSeries, Legend, Tooltip, DataLabel]);
</script>
<style>
  #container {
    height: 350px;
  }
</style>
