

<template>
    <div id="app">
        <ejs-grid :dataSource="data" height='315'>
          <e-columns>
            <e-column field='OrderID' headerText='<span> Order ID </span>' :disableHtmlEncode='true' textAlign='Right' width=140></e-column>
            <e-column field='CustomerID' headerText='<span> Customer ID </span>' :disableHtmlEncode='false' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date' width=120> </e-column>
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
</style>


