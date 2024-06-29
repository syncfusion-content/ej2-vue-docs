<template>
  <div id="app">
    <div>
      <ejs-button id='loadButton' cssClass='e-outline' v-on:click="onloadData">Load Data</ejs-button>
      <ejs-button id='showButton' style="margin-left: 5px" cssClass='e-outline' v-on:click="showhideSpinner">Show Spinner</ejs-button>
      <ejs-button id='hideButton' style="margin-left: 5px" cssClass='e-outline' v-on:click="showhideSpinner">Hide Spinner</ejs-button>
    </div>
    <ejs-grid ref='grid' :allowPaging='true' style='margin-top:10px' height='315px' >
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ProductName' headerText='Product Name' width=110></e-column>
        <e-column field='Quantity' headerText='Quantity' width=100></e-column>
      </e-columns>
      </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-button": ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
    };
  },
  methods: {
    onloadData: function () {
      this.$refs.grid.showSpinner();
      setTimeout(() => {
        this.$refs.grid.ej2Instances.dataSource = data;
        this.$refs.grid.hideSpinner();
      }, 1000);
    },
    showhideSpinner: function (args) {
      if (args.currentTarget.id === 'showButton') {
        this.$refs.grid.showSpinner();
      }
      else {
        this.$refs.grid.hideSpinner();
      }
    },
  },
  provide: {
    grid: [Toolbar, ExcelExport]
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