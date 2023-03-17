

<template>
    <div id="app">
        <ejs-grid :dataSource='data' :allowSorting='true' :actionBegin='actionBegin'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='OrderDate' headerText='Order Date' format='yMd'  :sortComparer='sortComparer' width=120></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Sort } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);
let action;

export default {
  data: () => {
    return {
      data: data
    };
  },
  methods: {
    sortComparer: function(reference, comparer) {
        let sortAsc = action === "Ascending" ? true : false;
        if (sortAsc && reference === null) {
            return 1;
        }
        else if (sortAsc && comparer === null) {
            return -1;
        }
        else if (!sortAsc && reference === null) {
            return -1;
        }
        else if (!sortAsc && comparer === null) {
            return 1;
        } else {
            return reference - comparer;
        }
    },
    actionBegin: function(args) {
        if (args.requestType == "sorting") {
            action = args.direction;
        }
    }
  },
  provide: {
    grid: [Sort]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


