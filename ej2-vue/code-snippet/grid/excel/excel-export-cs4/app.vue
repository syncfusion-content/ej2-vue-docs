<template>
    <div id="app">
      <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowExcelExport='true' :toolbarClick='toolbarClick'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        </e-columns>
        <e-aggregates>
          <e-aggregate>
            <e-columns>
              <e-column columnName="ShipCountry" type="Custom" :customAggregate="customAggregateFn" :footerTemplate='footerTemplate'></e-column>
            </e-columns>
          </e-aggregate>
        </e-aggregates>
      </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, AggregateDirective, AggregatesDirective, Toolbar, ExcelExport, Aggregate } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { createApp } from "vue";

var app = createApp();
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"e-aggregates":AggregatesDirective,
"e-aggregate":AggregateDirective
},
  data() {
    return {
      data: data,
      toolbarOptions: ['ExcelExport'],
      footerTemplate: function () {
        return {
          template: app.component('footerTemplate', {
            template: `<span> {{data.Custom}} </span>`,
            data() { return { data: {} }; }
          })
        }
      }
    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        this.$refs.grid.excelExport();
      }
    },
    customAggregateFn: function (data) {
      const brazilCount = data.result ? data.result.filter((item) => item['ShipCountry'] === 'Brazil').length
      : data.filter((item) => item['ShipCountry'] === 'Brazil').length;
      return `Brazil count: ${brazilCount}`;
    }
  },
  provide: {
    grid: [Toolbar, ExcelExport, Aggregate]
  }
}
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
</style>