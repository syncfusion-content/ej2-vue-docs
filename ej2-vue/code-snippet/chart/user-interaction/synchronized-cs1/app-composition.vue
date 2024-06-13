<template>
  <div class="control-section">
      <div class="row">
          <div class="col" id="container1">
              <ejs-chart style='display:block' align='center' id='chartcontainer1' :title='title1'
                  :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis1' :tooltip='tooltip1' :titleStyle='titleStyle' 
                  :chartMouseLeave='chartMouseLeave1' :chartMouseMove='chartMouseMove1' :chartMouseUp='chartMouseUp1' ref="chart1">
                  <e-series-collection>
                      <e-series :dataSource='seriesData' type='Line' xName='USD' yName='EUR' width = 2
                          :emptyPointSetting='emptyPointSettings'> </e-series>
                  </e-series-collection>
              </ejs-chart>
          </div>
          <div class="col" id="container2">
              <ejs-chart style='display:block' align='center' id='chartcontainer2' :title='title2'
                  :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis2' :tooltip='tooltip2' :titleStyle='titleStyle'
                  :chartMouseLeave='chartMouseLeave2' :chartMouseMove='chartMouseMove2' :chartMouseUp='chartMouseUp2' ref="chart2">
                  <e-series-collection>
                      <e-series :dataSource='seriesData' type='Area' xName='USD' yName='INR' opacity=0.6
                          :border='border'>
                      </e-series>
                  </e-series-collection>
              </ejs-chart>
          </div>
      </div>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, AreaSeries, LineSeries, DateTime, Tooltip } from "@syncfusion/ej2-vue-charts";
import { synchronizedData } from './dataSource.js';
import { Browser } from '@syncfusion/ej2-base';
import {ref} from 'vue';

const chart1=ref(null);
const chart2=ref(null);
const seriesData= synchronizedData;
const  primaryXAxis= {
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
      const primaryYAxis1= {
        labelFormat: 'n2',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minimum: 0.86,
        maximum: 0.96,
        interval: 0.025
      };
      const primaryYAxis2= {
        labelFormat: 'n1',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minimum: 79,
        maximum: 85,
        interval: 1.5
      };
      const border= { width: 2 };
      const tooltip1= {
        enable: true,
        shared: true,
        header: '', 
        enableMarker: false,
        format: '<b>€${point.y}</b> <br>${point.x} 2023',
        fadeOutDuration: Browser.isDevice ? 2500 : 1000
      };
      const tooltip2= {
        enable: true,
        shared: true,
        header: '', 
        enableMarker: false,
        format: '<b>₹${point.y}</b> <br>${point.x} 2023',
        fadeOutDuration: Browser.isDevice ? 2500 : 1000
      };
      const emptyPointSettings= { mode: 'Drop' };
     const titleStyle= { textAlignment: 'Near' };
     const title1= "US to EURO";
     const title2= "US to INR";

provide('chart',  [AreaSeries, LineSeries, DateTime, Tooltip]);

 const chartMouseLeave1= function () {
    chart2.value.ej2Instances.hideTooltip();
  };
  const chartMouseUp1= function () {
    if (Browser.isDevice || chart1.value.ej2Instances.startMove) {
      chart2.value.ej2Instances.hideTooltip();
    }
  };
  const chartMouseMove1= function (args) {
    if ((!Browser.isDevice && !chart1.value.ej2Instances.isTouch && !chart1.value.ej2Instances.isChartDrag) || chart1.value.ej2Instances.startMove) {
      chart2.value.ej2Instances.startMove = chart1.value.ej2Instances.startMove;
      chart2.value.ej2Instances.showTooltip(args.x, args.y);
    }
  };
  const chartMouseMove2= function (args) {
    if ((!Browser.isDevice && !chart2.value.ej2Instances.isTouch && !chart2.value.ej2Instances.isChartDrag) || chart2.value.ej2Instances.startMove) {
      chart1.value.ej2Instances.startMove = chart2.value.ej2Instances.startMove;
      chart1.value.ej2Instances.showTooltip(args.x, args.y);
    }
  };
  const chartMouseLeave2= function () {
    chart1.value.ej2Instances.hideTooltip();
  };
  const chartMouseUp2= function () {
    if (Browser.isDevice || chart2.value.ej2Instances.startMove) {
      chart1.value.ej2Instances.hideTooltip();
    }
  };

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