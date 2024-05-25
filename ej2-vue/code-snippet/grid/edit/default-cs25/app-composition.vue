<template>
    <div id="app">
        <ejs-grid ref="grid" :dataSource='data' height='315px' :created='created'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=120></e-column>
                <e-column field='OrderDate' headerText='Order Date' width=130 textAlign='Right' format='yMd'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=120></e-column>
                <e-column field='Freight' headerText='Receipt Amount' width=120 :template='cTemplate'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, parentsUntil } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { ref, createApp } from 'vue';
const app = createApp();
const grid = ref(null);
const cTemplate = function () {
    return {
        template: app.component('columnTemplate', {
            template: `<div class="image">
                     <input :id='id' :value='value' class='custemp' type='text' style='width: 100%'/>
                </div>`,
            data: function () {
                return {
                    data: {}
                }
            },
            computed: {
                id: function () {
                    return this.data.OrderID;
                },
                value: function () {
                    return this.data.Freight;
                }
            }
        })
    }
}
const created = (args) => {
    grid.value.ej2Instances.element.addEventListener('keyup', function (e) { // Bind the keyup event for the grid.
        if (e.target.classList.contains('custemp')) { // Based on this condition, you can find whether the target is an input element or not.
            var row = parentsUntil(e.target, 'e-row');
            var rowIndex = row.rowIndex; // Get the row index.
            var uid = row.getAttribute('data-uid');
            var rowData = grid.value.ej2Instances.getRowObjectFromUID(uid).data; // Get the row data.
            rowData.Freight = e.target.value; // Update the new value for the corresponding column.
            grid.value.ej2Instances.updateRow(rowIndex, rowData); // Update the modified value in the row data.
        }
    });
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>