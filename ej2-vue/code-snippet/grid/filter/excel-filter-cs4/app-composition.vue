<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' height='273px' :load='load'>
      <e-columns>
        <e-column field="CategoryName" headerText="Category Name" width="120"></e-column>
        <e-column field="Delivered" headerText="Delivered" width="120" displayAsCheckBox="true" :filter="columnFilterSettings"></e-column>
        <e-column field="ProductID" headerText="ProductID" width="120"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
import { createApp } from "vue";

const app = createApp();

const itemTemplate = app.component('itemTemplate', {
  components: {},
  data: () => ({}),
  template: `<div>
     <span>{{data.Delivered === true ? 'Delivered' : 'Not Delivered'}} </span>
     </div>`
});

provide('grid',  [Filter]);

const filterOptions = { type: "Excel" };
const grid = ref(null);
const columnFilterSettings = { 
  type: "CheckBox",
  itemTemplate: function(){
    return {
      template: itemTemplate
      }
    } 
  };
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