<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'
            :actionBegin='actionBegin' :actionComplete='actionComplete'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='CustomerID' :visible='false' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width=120
                    format='C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const actionBegin = (args) => {
    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
        for (var i = 0; i < grid.value.getColumns().length; i++) {
            if (grid.value.getColumns()[i].field == "CustomerID") {
                grid.value.getColumns()[i].visible = true;
            }
            else if (grid.value.getColumns()[i].field == "ShipCountry") {
                grid.value.getColumns()[i].visible = false;
            }
        }
    }
}
const actionComplete = (args) => {
    if ((args.requestType === 'save')) {
        for (var i = 0; i < grid.value.getColumns().length; i++) {
            if (grid.value.getColumns()[i].field == "CustomerID") {
                grid.value.getColumns()[i].visible = false;
            }
            else if (grid.value.getColumns()[i].field == "ShipCountry") {
                grid.value.getColumns()[i].visible = true;
            }
        }
    }
}
provide('grid', [Page, Edit, Toolbar]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";</style>