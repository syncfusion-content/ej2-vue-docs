<template>
    <div id="app">
        <ejs-grid ref='grid' id='grid' :dataSource='data' :load='load' :actionComplete='onActionComplete' :editSettings='editSettings' :toolbar='toolbar' :allowPaging="true">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100 :isPrimaryKey='true'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' width=120 format='C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Edit  } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
      const editSettings ={ allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
       const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
       const isDropdown = false;
      const load = function() {
        grid.value.ej2Instances.element.addEventListener('mouseup', function(e) {
            if (e.target.classList.contains("e-rowcell")) {
              if (grid.value.ej2Instances.isEdit)
                  grid.value.ej2Instances.endEdit();
              let rowInfo = grid.value.ej2Instances.getRowInfo(e.target);
              if (rowInfo.column.field === "ShipCountry")
                  this.isDropdown = true;
              grid.value.ej2Instances.selectRow(rowInfo.rowIndex);
              grid.value.ej2Instances.startEdit();
        }
      }).bind(this);
      }
      const onActionComplete = function(args) {
        if (args.requestType =="beginEdit" && this.isDropdown) {
            this.isDropdown = false;
            let dropdownObj = args.form.querySelector('.e-dropdownlist').ej2_instances[0];
            dropdownObj.element.focus();
            dropdownObj.showPopup();
        }
    }
  provide('grid',  [Edit]);
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>