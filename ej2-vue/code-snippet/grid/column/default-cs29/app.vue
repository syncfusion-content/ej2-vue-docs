<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :allowPaging="true" height="273px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" :headerTemplate="orderTemplate" width="150"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="135" format="yMd" type="date" :headerTemplate="dateTemplate" textAlign="Right"></e-column>
        <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import {
  GridComponent, ColumnsDirective, ColumnDirective,
  Page,
  Filter,
  Sort,
  Toolbar,
  Edit,
} from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
import { createApp } from "vue";
const app = createApp();
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      dateTemplate: function () {
        return {
          template: app.component("columnTemplate", {
            template: ` <div><span class="e-icon-calender e-icons headericon"></span> Order Date</div>`,
            data: function () {
              return {
                data: {},
              };
            },
            computed: {},
          }),
        };
      },
      orderTemplate: function () {
        return {
          template: app.component("columnTemplate", {
            template: `<div><span class="e-icon-userlogin e-icons employee"></span> Customer ID</div>`,
            data: function () {
              return {
                data: {},
              };
            },
            computed: {},
          }),
        };
      },
    };
  },

  methods: {},
  provide: {
    grid: [Page, Filter, Sort, Edit, Toolbar],
  },
};
</script>
<style>
@import "https://cdn.syncfusion.com/ej2/material.css";
@import "./style.css";
</style>