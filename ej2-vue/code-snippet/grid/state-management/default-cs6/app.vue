<template>
  <div id="app">
    <ejs-button id="add" style='margin:3px' cssClass="e-success" @click="addColumn">Add Columns</ejs-button>
    <ejs-button id="remove" style='margin:3px' cssClass="e-danger" @click="removeColumns">Remove Columns</ejs-button>
    <br /><br />
    <ejs-grid ref="grid" :dataSource='data' :enablePersistence='true' :allowPaging='true' id="OrderDetails"
      :dataBound='dataBound'>
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

import { GridComponent, ColumnsDirective, ColumnDirective, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-button": ButtonComponent
  },
  data() {
    return {
      data: data
    };
  },
  methods: {
    dataBound: function () {
      let cloned = this.$refs.grid.ej2Instances.addOnPersist;
      this.$refs.grid.ej2Instances.addOnPersist = function (key) {
        key = key.filter((item) => item !== "columns");
        return cloned.call(this, key);
      };
    },
    addColumn: function () {
      let obj = { field: "Freight", headerText: 'Freight', width: 120 }
      this.$refs.grid.ej2Instances.columns.push(obj); //you can add the columns by using the Grid columns method
      this.$refs.grid.ej2Instances.refreshColumns();
    },
    removeColumns: function () {
      this.$refs.grid.ej2Instances.columns.pop();
      this.$refs.grid.ej2Instances.refreshColumns();
    }
  },
  provide: {
    grid: [Page]
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