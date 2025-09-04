<template>
  <div id="app">
    <ejs-chart style='display:block' ref='chart' :theme='theme' :load='load' :loaded='loaded'
      :noDataTemplate='noDataTemplate' align='center' id='chartcontainer' :title='title' :subTitle='subTitle'
      :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :tooltip='tooltip'
      :width='width'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' :marker='marker'
          :animation='{ enable: true }' width='2'> </e-series>
      </e-series-collection>
    </ejs-chart>

    <div v-if="!hasData" class="no-data-button-overlay">
      <ejs-button content="Load Data" iconCss="e-icons e-refresh" cssClass="load-data-btn e-outline" :isPrimary="false"
        @click="loadData"></ejs-button>
    </div>
  </div>
</template>
<style>
#noDataTemplateContainer {
  height: inherit;
  width: inherit;
}

.no-data-button-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 60px;
  /* Adjust this to position below the no-data message */
  z-index: 10;
}

.load-data-btn {
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
}

.light-bg {
  background-color: #fafafa;
  color: #000000;
}

.template-align img {
  max-width: 150px;
  /* Adjust size as needed */
  max-height: 150px;
  margin-top: 55px;
}

.template-align {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, LineSeries, Category, Tooltip, DataLabel, Highlight, loaded } from "@syncfusion/ej2-vue-charts";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

import { ref } from 'vue';

const pie = ref(null);
let hasData = false;
let seriesData = [
  { x: 'January', y: 19173 },
  { x: 'February', y: 17726 },
  { x: 'March', y: 19874 },
  { x: 'April', y: 19391 },
  { x: 'May', y: 20072 },
  { x: 'June', y: 19233 }
];

//Initializing Primary X Axis
const primaryXAxis = {
  valueType: 'Category',
  majorGridLines: {
    width: 0
  },
  majorTickLines: {
    width: 0
  },
};

const chartArea = {
  border: { width: 0 }
};

const primaryYAxis = {
  title: 'Production (in million pounds)',
  titleStyle: {
    fontWeight: '600'
  },
  majorTickLines: {
    width: 0
  },
  lineStyle: {
    width: 0
  }
};

const marker = {
  visible: true,
  width: 7, height: 7
};
const load = (args) => {
  seriesData = this.hasData ? [
    { x: 'January', y: 19173 },
    { x: 'February', y: 17726 },
    { x: 'March', y: 19874 },
    { x: 'April', y: 19391 },
    { x: 'May', y: 20072 },
    { x: 'June', y: 19233 }
  ] : [];
};
const loadData = (args) => {
  seriesData = [
    { x: 'January', y: 19173 },
    { x: 'February', y: 17726 },
    { x: 'March', y: 19874 },
    { x: 'April', y: 19391 },
    { x: 'May', y: 20072 },
    { x: 'June', y: 19233 }
  ];
  hasData = true;

  const values = this.seriesData.map(d => d.y);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min;

  const chart = this.$refs.chart.ej2Instances;
  chart.primaryYAxis.minimum = Math.floor(min - range * 0.1);
  chart.primaryYAxis.maximum = Math.ceil(max + range * 0.1);
  chart.primaryYAxis.interval = Math.ceil(range / 5);
  chart.series[0].animation.enable = true;
  chart.refresh();
};


const noDataTemplate = `
                <div id="noDataTemplateContainer" class="light-bg">
                    <div class="template-align">    
                        <img src="no-data.png" alt="No Data"/>
                    </div>
                    <div class="template-align">
                        <p style="font-size: 15px; margin: 10px 0 10px;"><strong>No data available to display.</strong></p>
                    </div>
                </div>`;
const width = '100%';
const title = "Milk Production in US - 2025";
const subTitle = "Source: nass.usda.gov";
const tooltip = { enable: true, header: 'Milk Production', format: '${point.x} : <b>${point.y}M</b>' };

provide('chart', [LineSeries, Category, DataLabel, Tooltip, Highlight]);



</script>
<style>
#container {
  height: 350px;
}
</style>