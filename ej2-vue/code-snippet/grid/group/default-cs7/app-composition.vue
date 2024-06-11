<template>
    <div id="app">
        <ejs-button id='collapse' cssClass='e-flat' @click='collapse'>Collapse</ejs-button>
        <ejs-grid ref='grid' :dataSource='data' :allowGrouping='true' :groupSettings='groupSettings' height='240px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton} from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
const grid = ref(null);
      const groupSettings = { columns: ['CustomerID'] };
    const collapse = function() {
        if (grid.value.getSelectedRowIndexes().length) {
            let currentTr = grid.value.getRows()[grid.value.getSelectedRowIndexes()[0]];
            while (currentTr.classList && currentTr.classList.length) {
                currentTr = currentTr.previousSibling;
            }
            let collapseElement = currentTr.querySelector('.e-recordplusexpand');
            grid.value.ej2Instances.groupModule.expandCollapseRows(collapseElement); // pass the collapse row element.
        }
    }
  provide('grid',  [Group]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>