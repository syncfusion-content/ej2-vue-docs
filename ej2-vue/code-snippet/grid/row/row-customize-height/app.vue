<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' :height='315' :rowDataBound='rowDataBound'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
    };
  },
  methods: {
    rowDataBound: function (args) {
      if (args.data["OrderID"] === 10249) {
        args.rowHeight = 90;
      }
    },
  },
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
</style>