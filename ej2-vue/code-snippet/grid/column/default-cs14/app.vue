

<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource="data" :allowReordering='true' :columnDrag='columnDrag' :columnDrop='columnDrop' :columnDragStart='columnDragStart' height='315px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Reorder } from "@syncfusion/ej2-vue-grids";
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
  provide: {
      grid: [Reorder]
  },
  methods: {
    columnDragStart: function() {
        alert('columnDragStart event is Triggered');
    },
    columnDrag: function() {
        alert('columnDrag event is Triggered');
    },
    columnDrop: function() {
        alert('columnDrop event is Triggered');
    }
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";

 #reorderMultipleCols {
     text-transform: none;
 }
</style>


