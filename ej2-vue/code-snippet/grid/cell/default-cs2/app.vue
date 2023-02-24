

<template>
    <div id="app">
        <ejs-grid :dataSource="data" height='315'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' :customAttributes= "{class: 'e-attr'}" textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' :customAttributes= "{class: 'e-attr'}" textAlign='Right' width=90></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date' width=120 > </e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data
    };
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
  .e-attr {
  background: #d7f0f4;
  }
</style>


