<template>
  <div id="app">
    <h4 id='message' style='color: red; text-align: center'>{{ message }}</h4>
    <ejs-button style='margin:3px' cssClass="e-success" @click="save()">Save</ejs-button>
    <ejs-button style='margin:3px' cssClass="e-danger" @click="restore()">Restore</ejs-button>
    <ejs-grid ref="grid" id="OrderDetails" :dataSource='data' :enablePersistence='true' :allowPaging='true' :allowFiltering='true' allowGrouping='true' allowSorting="true" :groupSettings="groupSettings">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { ref } from 'vue';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Filter, Sort, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
var message = ref('');
var groupSettings = { showGroupedColumn: false, columns: ["ShipCountry"] };
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
      data: data,
      message: message,
      groupSettings: groupSettings
    };
  },
  methods: {
    // Save grid state to local storage
    save: function () {
      var persistData = this.$refs.grid.ej2Instances.getPersistData(); // Grid persistData
      window.localStorage.setItem("gridOrderDetails", persistData);
      this.message = "Grid state saved.";
    },

    // Restore grid state from local storage
    restore: function () {
      let value = window.localStorage.getItem("gridOrderDetails"); //"gridOrderDetails" is component name + component id.
      this.state = JSON.parse(value);
      if (this.state) {
        this.$refs.grid.ej2Instances.setProperties(this.state);
        this.message = "Previous grid state restored.";
      } else {
        this.message = "No saved state found.";
      }
    }
  },
  provide: {
    grid: [Page, Filter, Sort, Group]
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