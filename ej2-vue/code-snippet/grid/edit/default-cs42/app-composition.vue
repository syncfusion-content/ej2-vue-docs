<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px' :load = 'load'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='CustomerID' :visible = 'false' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
      const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
      const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
      const load = (args) => {
       grid.value.$el.addEventListener('keydown', keyDownHandler);
    }
    const keyDownHandler = (e) => {
      if(e.keyCode) {
        let gridIns =  grid.value.ej2Instances;
        gridIns.addRecord();
      }
    }
  provide('grid',  [Page, Edit, Toolbar]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>