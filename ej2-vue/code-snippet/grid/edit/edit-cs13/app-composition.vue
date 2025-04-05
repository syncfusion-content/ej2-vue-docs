<template>
    <div id="app">
      <ejs-grid ref='grid' :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273' :actionBegin="actionBegin">
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
          <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width=120
            format='C2'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script setup>
  import { provide, ref } from "vue";
  import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
  import { data } from './datasource.js';

  const grid = ref(null);
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules = {
    required: true,
    min: [
      (args) => {
        return grid.dataSource.every((data) => data['OrderID'] + '' !== args['value']);
      }, 'The entered value already exists in the primary key column OrderID. Please enter a unique value.'
    ]
  };
  const customerIDRules = { required: true };

  const actionBegin= function (args) {
    const formObj = grid.editModule.formObj;
    if (args.requestType === 'save') {
        formObj.addRules('OrderID', orderIDRules); // Add form validation rules dynamically.
        if (formObj.validate()) { // Check dynamically added validation rules.
            args.cancel = true; // Prevent adding duplicate data action.
        }
        formObj.removeRules('OrderID'); // Remove form validation rules dynamically.
    }
  };
  provide('grid', [Edit, Toolbar]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>