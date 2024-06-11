<template>
    <div id="app">
    <ejs-tooltip ref="tooltip" target=".e-rowcell" :beforeRender="beforeRender">
      <ejs-grid ref="grid" :dataSource="data" height="315px">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
          <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
          <e-column field="ShipName" headerText="Ship Name" width="120"></e-column>
        </e-columns>
      </ejs-grid>
    </ejs-tooltip>
    </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { TooltipComponent } from "@syncfusion/ej2-vue-popups";
export default {
name: "App",
components: {
"ejs-tooltip":TooltipComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
    data() {
      return {
        data: data
      };
    },
    methods: {
      beforeRender: function (args) {
        if (args.target.closest("td")) {
           this.$refs.tooltip.content = args.target.innerText;
        }
      }
    }
  }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>