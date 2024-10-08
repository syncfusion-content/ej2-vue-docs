<template>
    <div id="app">
        <h4 id='message' style='color: red; text-align: center'>{{ message }}</h4>
        <ejs-button style='margin:3px' v-for="v in versions" :key="v" :id="'restore' + v"
            @click="clickHandler('v.' + v)">
            Version {{ v }}
        </ejs-button>
        <ejs-grid ref="grid" id="OrderDetails" :dataSource='data' :enablePersistence='true'
            :ej2StatePersistenceVersion='gridversion' :allowPaging='true' :allowFiltering='true' :allowGrouping='true'
            :allowSorting="true">
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
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Filter, Group, Sort } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

const grid = ref(null);
var message = ref('');
var gridversion = ref('v.0');
var versions = [1, 2, 3];
const clickHandler = function (version) {
    gridversion.value = version;
    var persistedGridSettings = window.localStorage.getItem(`gridOrderDetails${version}`);
    if (persistedGridSettings) {
        grid.value.setProperties(JSON.parse(persistedGridSettings));
        message.value = `Grid state restored to ` + version;
    } else {
        var gridData = grid.value.ej2Instances.getPersistData();
        window.localStorage.setItem(`gridOrderDetails${version}`, gridData);
        message.value = `Grid state saved for ` + version;
    }
}

provide('grid', [Page, Filter, Group, Sort]);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
