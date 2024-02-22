


<template>
    <div id="app">
      <ejs-button ref='button' style="margin-top: 10px " cssClass='e-outline' v-on:click.native="onExternalSort">Clear Sorting</ejs-button>
        <ejs-grid ref='grid' style="padding: 10px 10px" :dataSource='data' :allowSorting='true' :sortSettings='initialSort' height='315px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
          </e-columns>
  </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Sort } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      data: data,
      initialSort: {
        columns: [
          { field: 'CustomerID', direction: 'Ascending' },
          { field: 'ShipName', direction: 'Descending' },
        ]
      },
    };
  },
  methods: {
    onExternalSort: function() {
      this.$refs.grid.clearSorting();
    }
  },
  provide: {
    grid: [Sort]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>


