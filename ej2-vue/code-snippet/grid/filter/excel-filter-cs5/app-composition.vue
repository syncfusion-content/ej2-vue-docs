<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' height='273px' :load='load'>
      <e-columns>
        <e-column field="CategoryName" headerText="Category Name" :filter="columnFilterSettings" width="120"></e-column>
        <e-column field="Delivered" headerText="Delivered" width="120" displayAsCheckBox="true"></e-column>
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
  data: () => {
    return {
      categoryIcons: {
        Beverages: 'fas fa-coffee',
        Condiments: 'fas fa-leaf',
        Confections: 'fas fa-birthday-cake',
        DairyProducts: 'fas fa-ice-cream',
        Grains: 'fas fa-seedling',
        Meat: 'fas fa-drumstick-bite',
        Produce: 'fas fa-carrot',
        Seafood: 'fas fa-fish',
      },
    };
  },
  template: `<div><span :class="this.categoryIcons[data.CategoryName]"></span> {{data.CategoryName}}</div>`,
});

provide('grid',  [Filter]);

const filterOptions = { type: "Excel" };
const grid = ref(null);
const columnFilterSettings = { 
  type: "Excel",
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