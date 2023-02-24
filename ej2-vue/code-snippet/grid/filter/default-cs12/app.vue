

<template>
    <div id="app">
        <ejs-grid :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :filter='filterParams' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' width=120 format= 'C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
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
           type: 'Menu'
        },
    filterParams: { params: {showSpinButton: false}}
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


