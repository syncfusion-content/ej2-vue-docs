

<template>
    <div id="app">
        <ejs-button id='clear' cssClass='e-flat' @click.native='clear'>Clear Selection</ejs-button>
        <ejs-grid ref='grid' :dataSource='data' :allowPaging='true' :allowSelection='true' :pageSettings='pageSettings' :selectedRowIndex='2' :selectionSettings='selectionOptions'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=130></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page, Selection } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { cdata } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      data: cdata,
      selectionOptions: { type: 'Multiple' },
      pageSettings: { pageSize: 5 }
    };
  },
  methods: {
    clear: function (args) {
      var gridObj = this.$refs.grid.ej2Instances;
      gridObj.clearSelection();
    }
  },
  provide: {
    grid: [Page, Selection]
  }
}
</script>
<style>
@import "https://ej2.syncfusion.com/vue/documentation./node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


