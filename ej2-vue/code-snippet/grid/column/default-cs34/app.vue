

<template>
    <div id="app">
    <ejs-button @click.native="AddColumns"> Add Columns </ejs-button>
    <ejs-button @click.native="DeleteColumns"> Delete Columns </ejs-button>
        <ejs-grid ref='grid' :dataSource='data' :height='280'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120 type='date'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      data: data
    };
  },
  methods: {
    AddColumns: function () {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      var newColumns = [
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 120 },
      ];
      newColumns.forEach((col) => {
        grid.columns.push(col);
      });
      grid.refreshColumns();
    },
    DeleteColumns: function () {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      grid.columns.pop();
      grid.refreshColumns();

    }
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


