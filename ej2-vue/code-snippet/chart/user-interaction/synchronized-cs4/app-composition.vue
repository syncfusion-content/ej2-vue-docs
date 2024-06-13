<template>
  <div class="control-section">
    <div class="row">
      <div class="col" id="container1">
        <ejs-chart style='display:block' align='center' id='chartcontainer1' :title='title1'
          :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis1' :zoomSettings='zoomSettings'
          :titleStyle='titleStyle' :zoomComplete='zoomComplete' :selectionComplete='selectionComplete' ref="chart1">
          <e-series-collection>
            <e-series :dataSource='seriesData' type='Line' xName='USD' yName='EUR' width=2
              :emptyPointSetting='emptyPointSettings'> </e-series>
          </e-series-collection>
        </ejs-chart>
      </div>
      <div class="col" id="container2">
        <ejs-chart style='display:block' align='center' id='chartcontainer2' :title='title2'
          :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis2' :zoomSettings='zoomSettings'
          :titleStyle='titleStyle' :zoomComplete='zoomComplete' :selectionComplete='selectionComplete' ref="chart2">
          <e-series-collection>
            <e-series :dataSource='seriesData' type='Spline' xName='USD' yName='INR' width=2 :border='border'>
            </e-series>
          </e-series-collection>
        </ejs-chart>
      </div>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ref, onMounted } from 'vue';
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, SplineSeries, LineSeries, DateTime, Zoom, Selection } from "@syncfusion/ej2-vue-charts";
import { synchronizedData } from './dataSource.js';
import { Browser } from '@syncfusion/ej2-base';

const chart1 = ref(null);
const chart2 = ref(null);

let zoomFactor = 0;
let zoomPosition = 0;
let count = 0;


const seriesData = synchronizedData;
const primaryXAxis = {
  minimum: new Date(2023, 1, 18),
  maximum: new Date(2023, 7, 18),
  valueType: 'DateTime',
  labelFormat: 'MMM d',
  lineStyle: { width: 0 },
  majorGridLines: { width: 0 },
  interval: Browser.isDevice ? 2 : 1,
  edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
  labelRotation: Browser.isDevice ? -45 : 0
};
const primaryYAxis1 = {
  labelFormat: 'n2',
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  minimum: 0.86,
  maximum: 0.96,
  interval: 0.025
};
const primaryYAxis2 = {
  labelFormat: 'n1',
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  minimum: 79,
  maximum: 85,
  interval: 1.5
};
const border = { width: 2 };
const zoomSettings = {
  enableSelectionZooming: true,
  mode: 'X'
};
const emptyPointSettings = { mode: 'Drop' };
const titleStyle = { textAlignment: 'Near' };
const title1 = "US to EURO";
const title2 = "US to INR";
let charts = [];

provide('chart', [SplineSeries, LineSeries, DateTime, Zoom, Selection]);

const zoomComplete = (args) => {
  if (args.axis.name === 'primaryXAxis') {
    zoomFactor = args.currentZoomFactor;
    zoomPosition = args.currentZoomPosition;
    zoomCompleteFunction(args);
  }
};
const zoomCompleteFunction = (args) => {
  for (var i = 0; i < charts.length; i++) {
    if (args.axis.series[0].chart.element.id !== charts[i].element.id) {
      charts[i].primaryXAxis.zoomFactor = zoomFactor;
      charts[i].primaryXAxis.zoomPosition = zoomPosition;
      charts[i].zoomModule.isZoomed = args.axis.series[0].chart.zoomModule.isZoomed;
      charts[i].zoomModule.isPanning = args.axis.series[0].chart.zoomModule.isPanning;
    }
  }
};
const selectionComplete = (args) => {
  if (count == 0) {
    for (var j = 0; j < args.selectedDataValues.length; j++) {
      args.selectedDataValues[j].point = args.selectedDataValues[j].pointIndex;
      args.selectedDataValues[j].series = args.selectedDataValues[j].seriesIndex;
    }
    for (var i = 0; i < charts.length; i++) {
      if (args.chart.element.id !== charts[i].element.id) {
        charts[i].selectedDataIndexes = args.selectedDataValues;
        count += 1;
        charts[i].dataBind();
      }
    }
    count = 0;
  }
};

onMounted(() => {
  charts = [chart1.value.ej2Instances, chart2.value.ej2Instances];
})

</script>
<style>
#container {
  height: 350px;
}

#control-container {
  padding: 1px !important;
}

.row {
  display: flex;
}

.col {
  width: 50%;
  margin: 10px;
  height: 270px;
}
</style>