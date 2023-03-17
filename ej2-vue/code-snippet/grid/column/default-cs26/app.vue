

<template>
    <div id="app">
        <ejs-button @click.native="show"> Show </ejs-button>
        <ejs-button @click.native="hide"> Hide </ejs-button>
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
    show: function() {
        this.$refs.grid.showColumns(['Customer ID', 'Ship Name']); // show by HeaderText
    },
    hide: function() {
        this.$refs.grid.hideColumns(['Customer ID', 'Ship Name']); // hide by HeaderText
    }

  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


