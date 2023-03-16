

<template>
    <div id="app">
        <ejs-button id='collapse' cssClass='e-flat' @click.native='collapse'>Collapse</ejs-button>
        <ejs-grid ref='grid' :dataSource='data' :allowGrouping='true' :groupSettings='groupSettings' height='240px'>
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
import { GridPlugin, Group } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      data: data,
      groupSettings: { columns: ['CustomerID'] }
    };
  },
  methods: {
    collapse: function() {
        if (this.$refs.grid.getSelectedRowIndexes().length) {
            let currentTr = this.$refs.grid.getRows()[this.$refs.grid.getSelectedRowIndexes()[0]];
            while (currentTr.classList && currentTr.classList.length) {
                currentTr = currentTr.previousSibling;
            }
            let collapseElement = currentTr.querySelector('.e-recordplusexpand');
            this.$refs.grid.ej2Instances.groupModule.expandCollapseRows(collapseElement); // pass the collapse row element.
        }
    }
  },
  provide: {
    grid: [Group]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


