

<template>
    <div id="app">
        <ejs-grid :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      filterOptions: {
            columns: [{ field: 'ShipCity', matchCase: false, operator: 'startswith', predicate: 'and', value: 'reims' },
            { field: 'ShipName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Vins et alcools Chevalier' }]
      }
    };
  },
  provide: {
    grid: [Filter]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


