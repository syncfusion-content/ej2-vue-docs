<template>
    <div id="app">
        <h4 id='message' style='color: red; text-align: center'>{{ message }}</h4>
        <ejs-button style='margin:3px' cssClass="e-success" @click="save()">Save</ejs-button>
        <ejs-button style='margin:3px' cssClass="e-danger" @click="restore()">Restore</ejs-button>
        <ejs-grid ref="grid" id="OrderDetails" :dataSource='data' :enablePersistence='true' :allowPaging='true'
            :allowFiltering='true' allowGrouping='true' allowSorting="true" :groupSettings="groupSettings">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>

            </e-columns>
        </ejs-grid>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Filter, Group, Sort } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

const grid = ref(null);
var message = ref('');
var state = ref(null);
const groupSettings = { showGroupedColumn: false, columns: ["ShipCountry"] }

// Save grid state to local storage
const save = function () {
    var persistData = grid.value.ej2Instances.getPersistData(); // Grid persistData
    window.localStorage.setItem("gridOrderDetails", persistData);
    message.value = "Grid state saved.";
}

// Restore grid state from local storage
const restore = function () {
    let persistDataValue = window.localStorage.getItem("gridOrderDetails"); //"gridOrderDetails" is component name + component id.
    state.value = JSON.parse(persistDataValue);
    console.log(state.value);
    if (state.value) {
        grid.value.ej2Instances.setProperties(state.value);
        message.value = "Previous grid state restored.";
    } else {
        message.value = "No saved state found.";
    }
}

provide('grid', [Page, Filter, Group, Sort]);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>
