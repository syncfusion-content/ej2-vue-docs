<template>
    <div id="app">
        <h4 id='message' style='color: red; text-align: center'>{{ message }}</h4>
        <ejs-button id="add" style='margin:3px' cssClass="e-success" @click="save">Save</ejs-button>
        <ejs-button id="add" style='margin:3px' cssClass="e-danger" @click="restore">Restore</ejs-button>
        <ejs-grid ref="grid" id="Orders" :dataSource="data" :enablePersistence="true">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='125' textAlign='Right'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width='170'
                    :headerTemplate="'hTemplate'"></e-column>
                <e-column field='ShipName' headerText='Ship Name' width='170'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='170'
                    :template="'columnTemplate'"></e-column>
            </e-columns>
            <template v-slot:hTemplate="{}">
                <ejs-button>HeaderTemplate</ejs-button>
            </template>
            <template v-slot:columnTemplate="{}">
                #template
            </template>
        </ejs-grid>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
const grid = ref(null);
const message = ref('');
var persistedGridSettings;
const save = () => {
    persistedGridSettings = JSON.parse(grid.value.ej2Instances.getPersistData());
    var gridColumns = Object.assign([], (grid.value.ej2Instances.getColumns()));
    persistedGridSettings.columns.forEach((persistedColumn) => {
        const column = gridColumns.find((col) => col.field === persistedColumn.field);
        if (column) {
            persistedColumn.headerText = 'Text Changed';
            persistedColumn.template = column.template;
            persistedColumn.headerTemplate = column.headerTemplate;
        }
    });
    window.localStorage.setItem('gridOrders1', JSON.stringify(persistedGridSettings));
    grid.value.setProperties(persistedGridSettings);
    message.value = 'Saved the headerText, template column, and headerTemplate properties in the persisted settings';
}
const restore = () => {
    const savedSettings = window.localStorage.getItem("gridOrders1");
    if (savedSettings) {
        grid.value.ej2Instances.setProperties(JSON.parse(savedSettings));
        message.value = 'Restored the headerText, template column, and headerTemplate';
    } else {
        message.value = 'No saved settings found.';
    }
}
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