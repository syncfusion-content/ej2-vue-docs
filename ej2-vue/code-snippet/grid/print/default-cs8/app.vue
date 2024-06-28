<template>
  <div id="app">
    <ejs-button style="margin-bottom: 20px" cssClass="e-danger"  v-on:click="onClick">Print</ejs-button >
    <ejs-grid ref="grid" :dataSource="data" :allowPaging="true" :pageSettings="pageSettings" :printMode="printMode" 
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

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar } from "@syncfusion/ej2-vue-grids";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries,DateTime} from '@syncfusion/ej2-vue-charts';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { Query, DataManager } from '@syncfusion/ej2-data';
import {data} from './datasource.js'


export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-chart": ChartComponent,
    "e-series-collection": SeriesCollectionDirective,
    "e-series": SeriesDirective,
    "ejs-button": ButtonComponent

  },
  data() {
    return {
      data :new DataManager(data).executeLocal(new Query().take(100)),
      printMode:"CurrentPage",
      pageSettings: { pageSize: 10 },
      primaryXAxis: {
        valueType: 'DateTime',
        labelFormat: 'MMMd'

      },
      primaryYAxis: {
        labelFormat: '{value}'
      },
      title: 'Order Data',
      marker: { visible: true }
    };
  },
  methods: {
    dataBound() {
      if( this.$refs.chart){
      this.$refs.chart.ej2Instances.series[0].marker = { visible: true };
      this.$refs.chart.ej2Instances.series[0].xName = 'OrderDate';
      this.$refs.chart.ej2Instances.series[0].yName = 'Freight';
      this.$refs.chart.ej2Instances.series[0].dataSource = this.$refs.grid.ej2Instances.getCurrentViewRecords();
    }
    },
    onClick() {
      this.$refs.grid.ej2Instances.print();
    },
    beforePrint(args) {
        const clonedChartContainer = this.$refs.chart.$el.cloneNode(true);
        args.element.appendChild(clonedChartContainer);
    },
    actionComplete(args) {
      if (args.requestType === 'paging') {
        this.$refs.chart.ej2Instances.series[0].dataSource = this.$refs.grid.ej2Instances.getCurrentViewRecords();
        this.$refs.chart.ej2Instances.refresh();
      }
    }
  },
  provide: {
    grid: [Page, Toolbar],
    chart: [LineSeries,DateTime]
  }
};
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
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind.css";
</style>