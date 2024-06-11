<template>
    <div id="app">
        <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width=120
                    format='C2'></e-column>
                <e-column field='OrderDate' headerText='Order Date' type='date' format='yMd' width=150
                    :editTemplate='editTemplate'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, createApp } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { DatePickerComponent as EjsDatepicker } from "@syncfusion/ej2-vue-calendars";
const app = createApp();
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const editTemplate = function () {
    return {
        template: app.component('datePicker', {
            template: `<ejs-datepicker id="OrderDate" placeholder="Order Date" v-model="data.OrderDate" floatLabelType='Never'></ejs-datepicker>`,
            data() {
                return { data: {} }
            }
        })
    }
}
provide('grid', [Page, Edit, Toolbar]);
</script>
<style>@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";</style>