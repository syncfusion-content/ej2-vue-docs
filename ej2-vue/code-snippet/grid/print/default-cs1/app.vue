

<template>
    <div id="app">
        <ejs-button id='copy' @click.native='copy'>Copy</ejs-button>
        <ejs-button id='copyHeader' @click.native='copyHeader'>CopyHeader</ejs-button>
        <ejs-grid ref='grid' :dataSource='data' height='280px' :selectionSettings='selectionOptions'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
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
      data: data,
      selectionOptions: { type: 'Multiple'}
    };
  },
  methods: {
    copy: function() {
        this.$refs.grid.copy();
    },
    copyHeader: function() {
        this.$refs.grid.copy(true);
    }
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>



