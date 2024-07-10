<template>
  <div id="app">
    <ejs-grid :dataSource='complexData' :editSettings='editSettings' :toolbar='toolbar' :actionBegin="actionBegin" height='280px' >
      <e-columns>
        <e-column field="EmployeeID" headerText="Employee ID" textAlign="Right" isPrimaryKey="true" width="120"></e-column>
        <e-column field="Name.FirstName" headerText="First Name" :editTemplate="'firstNameTemplate'" width="200"></e-column>
        <e-column field="Name.LastName" headerText="Last Name" :editTemplate="'lastNameTemplate'" width="200"></e-column>
        <e-column field="Title" headerText="Title" width="150" ></e-column>
      </e-columns>
      <template v-slot:firstNameTemplate={data}>
        <input class="e-input" name="Name___FirstName" type="text" id="Name___FirstName" :value="data.Name.FirstName" />
      </template>
      <template v-slot:lastNameTemplate={data}>
        <input class="e-input" name="Name___LastName" type="text" id="Name___LastName" :value="data.Name.LastName" />        
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { complexData } from './datasource.js';

const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

provide('grid', [Edit, Toolbar]);
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