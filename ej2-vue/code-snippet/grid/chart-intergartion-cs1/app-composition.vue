<template>
  <div class="col-lg-12 control-section">
    <div class="content-wrapper">
      <ejs-grid ref='gridInstance' id='GridChart' :dataSource='data' :height="417" :allowSelection="true" :selectionSettings="selectionSettings"
      :contextMenuItems="contextMenuItems" :contextMenuClick="contextMenuClick" :created="created">
        <e-columns>
          <e-column type='checkbox' width='50'></e-column>
          <e-column field='Product' headerText='Products' width='200' ></e-column>
          <e-column field='Month' headerText='Month' width='140' ></e-column>
          <e-column field='Online' headerText='Online' format='C2' textAlign='Right' width='160'></e-column>
          <e-column field='Retail' headerText='Retail' format='C2' textAlign='Right' width='160'></e-column>
          <e-column field='Total' headerText='Total' format='C2' textAlign='Right' width='160' ></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>

<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, ContextMenu } from "@syncfusion/ej2-vue-grids";
import { salesDatas } from "./datasource.js";
import { provide, ref } from "vue";
import { GridChart } from '@syncfusion/ej2-grid-chart';
import { isNullOrUndefined } from "@syncfusion/ej2-base";

const gridInstance=ref(null);
const data = salesDatas;
const selectionSettings = { type: 'Multiple' };
const contextMenuItems = ['Bar', 'StackingBar', 'StackingBar100', 'Pie',
  'Column', 'StackingColumn', 'StackingColumn100',
  'Line', 'StackingLine', 'StackingLine100',
  'Area', 'StackingArea', 'StackingArea100',
  'Scatter'
];
let gridChart = ref(null);

const created = () => {
  gridChart.value = new GridChart({
    enablePropertyPanel: true,
    allowExport: true,
    enableRtl: gridInstance.value.enableRtl,
    locale: gridInstance.value.locale,
    updateChartSettings: updateChartSettings
  });
};

const contextMenuClick = (args) => {
  if (args.chartType && args.gridInstance) {
    const chartArgs = {
      gridInstance: args.gridInstance,
      chartType: args.chartType,
      records: args.records,
    };
    const chartModel = {
      primaryXAxis: {
        valueType: 'Category',
        labelRotation: 315,
      },
      margin: {
        top: 20,
        bottom: 20,
        right: 20,
        left: 20
      },
      tooltip: {
        enable: true,
        textStyle: {
          size: '16px',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }
      },
      title: 'Sales Data',
      titleStyle: {
        size: '24px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 'Bold'
      },
      subTitle: 'Sales data for various products over the months',
      load: (args) => {
        if (args.chart.titleStyle) {
          args.chart.titleStyle.color = '#1976d2';
        }
      }
    };
    const accumulationChartModel = {
      title :'Sales Distribution'
    };
    const model= {
      chart: chartModel,
      accumulationChart: accumulationChartModel
    };
    const categorySeries= {
      category: ['Product', 'Month'],
      series: ['Online', 'Retail']
    };
    gridChart.value.render(chartArgs, model, categorySeries);
  }
};

const updateChartSettings = (args) => {
  const chart = args.changes?.chart;
  if (!chart) return;
  const chartMargin = chart.margin;
  if (chartMargin && !isNullOrUndefined(chartMargin)) {
    if (chartMargin.top < 20) chartMargin.top = 20;
    if (chartMargin.bottom < 20) chartMargin.bottom = 20;
    if (chartMargin.left < 20) chartMargin.left = 20;
    if (chartMargin.right < 20) chartMargin.right = 20;
  }
};

provide('grid', [ContextMenu]);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
@import '../node_modules/@syncfusion/ej2-grid-chart/styles/tailwind.css';
</style>