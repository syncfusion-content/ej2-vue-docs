

<template>
  <div id="app">
      <ejs-grid :dataSource="data"> </ejs-grid>
  </div>
</template>
<script>
import Vue from 'vue';
import { GridPlugin } from '@syncfusion/ej2-vue-grids';

Vue.use(GridPlugin);
export default {
  data () {
    return {
      data: [
      { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
      { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
      { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }]
    }
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


