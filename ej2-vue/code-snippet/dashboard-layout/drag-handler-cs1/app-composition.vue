<template>
  <div className="control-section" id="control_dash">
    <div className="content-wrapper">
      <!--  DashboardLayout element declaration -->
      <ejs-dashboardlayout ref="DashbordInstance" :columns="6" id='edit_dashboard' :allowResizing="false"
        :allowDragging="true" :draggableHandle="draggable">
        <e-panels>
          <e-panel :row="0" :col="0" :sizeX="3" :sizeY="2" header="<div>Product usage ratio</div>"
            :content="pie"></e-panel>
          <e-panel :row="0" :col="3" :sizeX="3" :sizeY="2" header="<div>Mobile browsers usage</div>"
            :content="pie1"></e-panel>
          <e-panel :row="1" :col="0" :sizeX="3" :sizeY="2" header="<div>Spline Chart</div>" :content="spline"></e-panel>
        </e-panels>
      </ejs-dashboardlayout>
      <!-- end of dashboardlayout element -->
    </div>
  </div>
</template>

<script setup>

// Import syncfusion dashboardlayout component from layouts package
import { DashboardLayoutComponent as EjsDashboardlayout, PanelDirective as EPanel, PanelsDirective as EPanels } from "@syncfusion/ej2-vue-layouts";
// Import syncfusion chart component from charts package
import { AccumulationChartComponent, AccumulationSeriesDirective, AccumulationSeriesCollectionDirective, SeriesDirective, SeriesCollectionDirective, PieSeries, AccumulationDataLabel, AccumulationTooltip, ChartComponent, SplineAreaSeries, Legend, DateTime } from "@syncfusion/ej2-vue-charts";
import { createApp } from "vue";




var splineTemplate = createApp().component("contentTemp1", {
  components: {
    "ejs-chart": ChartComponent,
    "e-series-collection": SeriesCollectionDirective,
    "e-series": SeriesDirective
  },
  template: `
    <div id="container" style='display:block;height:100%, width:100%;'>
      <!--  Chart element declaration -->
      <ejs-chart class="chart-content" ref="splineInstance" style='display:block;height:100%, width:100%;':primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
      :chartArea='chartArea' :height='height' :width='width' :border='border'>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='SplineArea' xName='x' yName='y' name='Jan' width=2 opacity=0.5 :fill="fill0"></e-series>
          <e-series :dataSource='seriesData1' type='SplineArea' xName='x' yName='y' name='Feb' width=2 opacity=0.5 :fill="fill1"></e-series>
        </e-series-collection>
      </ejs-chart>
    <!-- end of chart element -->
  </div>`,

  data: function () {
    return {
      seriesData: [
        { x: new Date(2002, 0, 1), y: 2.2 }, { x: new Date(2003, 0, 1), y: 3.4 },
        { x: new Date(2004, 0, 1), y: 2.8 }, { x: new Date(2005, 0, 1), y: 1.6 },
        { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 2.5 },
        { x: new Date(2008, 0, 1), y: 2.9 }, { x: new Date(2009, 0, 1), y: 3.8 },
        { x: new Date(2010, 0, 1), y: 1.4 }, { x: new Date(2011, 0, 1), y: 3.1 }
      ],
      seriesData1: [
        { x: new Date(2002, 0, 1), y: 2 }, { x: new Date(2003, 0, 1), y: 1.7 },
        { x: new Date(2004, 0, 1), y: 1.8 }, { x: new Date(2005, 0, 1), y: 2.1 },
        { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 1.6 },
        { x: new Date(2008, 0, 1), y: 1.5 }, { x: new Date(2009, 0, 1), y: 2.7 },
        { x: new Date(2010, 0, 1), y: 1.5 }, { x: new Date(2011, 0, 1), y: 2.2 }
      ],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'DateTime',
        labelFormat: 'y',
        majorGridLines: { width: 0 },
        intervalType: 'Years',
        edgeLabelPlacement: 'Shift'
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: '{value}%',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      border: {
        color: 'transparent'
      },
      width: "100%",
      fill1: 'rgb(0, 189, 174)',
      fill0: 'rgb(239, 183, 202)',
      height: "99%"
    };
  },
  provide: {
    chart: [SplineAreaSeries, Legend, DateTime]
  },
  mounted() {
    this.$refs.splineInstance.ej2Instances.height = "100%";
    this.$refs.splineInstance.ej2Instances.width = "100%";
  }
});

var pietemplate = createApp().component("contentTemp2", {
  components: {
    "ejs-accumulationchart": AccumulationChartComponent,
    "e-accumulation-series-collection": AccumulationSeriesCollectionDirective,
    "e-accumulation-series": AccumulationSeriesDirective
  },
  template: `
    <div id="app" style='display:block;height:100%; width:100%;'>
      <ejs-accumulationchart class="chart-content" ref="accumulationInstance" style='display:block;height:100%; width:100%;' :legendSettings="legendSettings" :tooltip="tooltip">
        <e-accumulation-series-collection>
          <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' innerRadius="40%" :dataLabel="dataLabel"> </e-accumulation-series>
        </e-accumulation-series-collection>
      </ejs-accumulationchart>
    </div>`,

  data() {
    return {
      seriesData: [
        { x: 'TypeScript', y: 13, text: 'TS 13%' },
        { x: 'React', y: 12.5, text: 'Reat 12.5%' },
        { x: 'MVC', y: 12, text: 'MVC 12%' },
        { x: 'Core', y: 12.5, text: 'Core 12.5%' },
        { x: 'Vue', y: 10, text: 'Vue 10%' },
        { x: 'Angular', y: 40, text: 'Angular 40%' }
      ],
      legendSettings: { visible: false },
      dataLabel: { visible: true, position: 'Inside', name: 'value' },
      tooltip: {
        enable: true, header: '<b>${point.x}</b>', format: 'Composition: <b>${point.y}</b>'
      },
    };
  },
  provide: {
    accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationTooltip]
  },
  mounted() {
    this.$refs.accumulationInstance.ej2Instances.height = "100%";
    this.$refs.accumulationInstance.ej2Instances.width = "100%";
  }
});

var pietemplate1 = createApp().component("contentTemp3", {
  components: {
    "ejs-accumulationchart": AccumulationChartComponent,
    "e-accumulation-series-collection": AccumulationSeriesCollectionDirective,
    "e-accumulation-series": AccumulationSeriesDirective
  },
  template: `
    <div id="app1" style='display:block;height:100%; width:100%;'>
      <ejs-accumulationchart class="chart-content" ref="accumulationInstance" style='display:block;height:100%; width:100%;' :legendSettings="legendSettings" :tooltip="tooltip">
        <e-accumulation-series-collection>
          <e-accumulation-series  :dataSource='seriesData' xName='x' yName='y' innerRadius="40%" :dataLabel="dataLabel"> </e-accumulation-series>
        </e-accumulation-series-collection>
      </ejs-accumulationchart>
    </div>`,

  data() {
    return {
      seriesData: [
        { 'x': 'Chrome', y: 37, text: '37%' },
        { 'x': 'UC Browser', y: 17, text: '17%' },
        { 'x': 'iPhone', y: 19, text: '19%' },
        { 'x': 'Others', y: 4, text: '4%' },
        { 'x': 'Opera', y: 11, text: '11%' },
        { 'x': 'Android', y: 12, text: '12%' }
      ],
      legendSettings: { visible: false },
      dataLabel: { visible: true, position: 'Inside', name: 'value' },
      tooltip: {
        enable: true, header: '<b>${point.x}</b>', format: 'Composition: <b>${point.y}</b>'
      },
    };
  },
  provide: {
    accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationTooltip]
  },
  mounted() {
    this.$refs.accumulationInstance.ej2Instances.height = "100%";
    this.$refs.accumulationInstance.ej2Instances.width = "100%";
  }
});



const draggable = '.e-panel-header';


const spline = () => {
  return { template: splineTemplate }
};
const pie = () => {
  return { template: pietemplate }
};
const pie1 = () => {
  return { template: pietemplate1 }
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";

/* DashboardLayout element styles  */
#dashboard_default .e-panel .e-panel-content {
  vertical-align: middle;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  line-height: 100px;
}

.chart-content {
  height: 100%;
  width: 100%;
}

#container {
  width: 100%;
  height: 100%;
}

#dashboard_default .e-panel {
  transition: none !important;
}
</style>