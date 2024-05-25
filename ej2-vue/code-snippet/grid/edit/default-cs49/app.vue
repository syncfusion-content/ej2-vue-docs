<template>
  <div id="app">
    <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='315px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100
          :validationRules='orderidrules'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120 :validationRules='customeridrules'></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width=120 format='C2'
          :validationRules='freightrules'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top', showAddNewRow: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderidrules: { required: true, number: true },
      customeridrules: { required: true, minLength: 5 },
      freightrules: { required: true, min: 1 }
    };
  },
  provide: {
    grid: [Edit, Toolbar]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";</style>