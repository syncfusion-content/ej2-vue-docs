

<template>
    <div id="app">
        <ejs-grid :dataSource="data" height='315' :selectionSettings='selectionOptions'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' :customAttributes= "{class: 'custom-css'}" width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' :customAttributes= "{class: 'custom-css'}" width=90></e-column>
            <e-column field='ShipName' headerText='Ship Name' textAlign='Right' width=120 > </e-column>          </e-columns>
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
      data: data,
      selectionOptions: { type: 'Multiple', mode: 'Cell' }
    };
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
  .custom-css {
  background: #d7f0f4;
  font-style: italic;
  color:navy
  }
</style>


