<template>
  <div id="app">
    <ejs-button style="margin-bottom: 20px" cssClass="e-danger"  v-on:click="onClick">Print</ejs-button >
    <ejs-grid ref="grid" :dataSource="dataGrid" :allowPaging="true" :pageSettings="pageSettings" :printMode="printMode" 
    :dataBound="dataBound" :actionComplete="actionComplete" :beforePrint="beforePrint">
      <e-columns>
        <e-column field="OrderDate" headerText="Order Date" width="130" format="yMd" textAlign="right"></e-column>
        <e-column field="Freight" width="120" format="C2" textAlign="right"></e-column>
      </e-columns>
    </ejs-grid>
    <h4>Chart</h4>
    <div>
      <ejs-chart ref="chart" id="chart-container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :title="title" width="60%">
        <e-series-collection>
          <e-series type="Line" xName="OrderDate" yName="Freight" width="1" columnWidth="0.4" name="dataview" :marker="marker"></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
  </div>
</template>
<script setup>
import { provide ,ref} from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar,Page} from "@syncfusion/ej2-vue-grids";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries,DateTime} from "@syncfusion/ej2-vue-charts";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { data } from './datasource.js';
let dataGrid =new DataManager(data).executeLocal(new Query().take(100));
let printMode="CurrentPage";
let pageSettings= { pageSize: 10 };
let primaryXAxis= {
        valueType: 'DateTime',
        labelFormat: 'MMMd'
      };
let primaryYAxis={
        labelFormat: '{value}'
      };
let title= 'Order Data';
let marker= { visible: true };
const grid = ref(null);
const chart = ref(null);
const dataBound= function() {
     chart.value.ej2Instances.series[0].marker = { visible: true };
    chart.value.ej2Instances.series[0].xName = 'OrderDate';
     chart.value.ej2Instances.series[0].yName = 'Freight';
    chart.value.ej2Instances.series[0].dataSource = grid.value.ej2Instances.getCurrentViewRecords();
    };
const onClick= function() {
       grid.value.ej2Instances.print();
    };
const beforePrint= function(args) {
        const clonedChartContainer = chart.value.$el.cloneNode(true);
        args.element.appendChild(clonedChartContainer);
    };
const actionComplete= function(args) {
      if (args.requestType === 'paging') {
        chart.value.ej2Instances.series[0].dataSource = grid.value.ej2Instances.getCurrentViewRecords();
        chart.value.ej2Instances.refresh();
      }
    }
provide('grid', [Page,Toolbar]);
provide('chart', [ LineSeries,DateTime]);

</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
</style>