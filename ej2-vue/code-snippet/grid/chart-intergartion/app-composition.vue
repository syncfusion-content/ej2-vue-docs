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
    enableRtl: gridInstance.value.enableRtl,
    locale: gridInstance.value.locale,
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
      }
    };
    const model= {
      chart: chartModel,
      accumulationChart: { }
    };
    const categorySeries= {
      category: ['Product', 'Month'],
      series: ['Online', 'Retail']
    };
    gridChart.value.render(chartArgs, model, categorySeries);
  }
};

provide('grid', [ContextMenu]);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
@import '../node_modules/@syncfusion/ej2-grid-chart/styles/material3.css';
</style>