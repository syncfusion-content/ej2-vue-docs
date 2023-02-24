

<template>
    <div id="app">
        <ejs-grid :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' :allowPaging='true' :pageSettings='pageOptions' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' width=120 format= 'C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Group, Page, Data } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
Vue.use(GridPlugin);

let old = Data.prototype.generateQuery;
    Data.prototype.generateQuery = function() {
    let query = old.call(this, true);
    this.pageQuery(query);
    return query;
};

export default {
  data() {
    return {
      data: data,
      pageOptions: { pageSize: 5 },
      groupOptions: { columns: ["ShipCountry"] }
    };
  },
  provide: {
    grid: [Group, Page]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


