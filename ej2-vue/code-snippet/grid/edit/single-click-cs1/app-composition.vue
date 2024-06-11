<template>
    <div id="app">
        <ejs-grid ref='grid' id='grid' :dataSource='data' :load='load' :editSettings='editSettings' :toolbar='toolbar' :allowPaging="true">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100 :isPrimaryKey='true'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' width=120 format='C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Edit  } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
      const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
       const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
      const load = function() {
        grid.value.ej2Instances.element.addEventListener('mouseup', function(e) {
            var instance = grid.value.ej2Instances;
            if (e.target.classList.contains("e-rowcell")) {
            if (instance.isEdit)
                instance.endEdit();
                let index = parseInt(e.target.getAttribute("Index"));
                instance.selectRow(index);
                instance.startEdit();
            };
        });
      }
  provide('grid',  [Edit]);
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>