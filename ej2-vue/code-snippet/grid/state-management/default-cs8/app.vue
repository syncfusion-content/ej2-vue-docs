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

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
var message = '';
var persistedGridSettings;
export default {
    name: "App",
    components: {
        "ejs-grid": GridComponent,
        "e-columns": ColumnsDirective,
        "e-column": ColumnDirective,
        "ejs-button": ButtonComponent
    },
    data() {
        return {
            data: data,
            message: message
        };
    },
    methods: {
        save: function () {
            persistedGridSettings = JSON.parse(this.$refs.grid.ej2Instances.getPersistData());
            var gridColumns = Object.assign([], (this.$refs.grid.ej2Instances.getColumns()));
            persistedGridSettings.columns.forEach((persistedColumn) => {
                const column = gridColumns.find((col) => col.field === persistedColumn.field);
                if (column) {
                    persistedColumn.headerText = 'Text Changed';
                    persistedColumn.template = column.template;
                    persistedColumn.headerTemplate = column.headerTemplate;
                }
            });
            window.localStorage.setItem('gridOrders1', JSON.stringify(persistedGridSettings));
            this.$refs.grid.ej2Instances.setProperties(persistedGridSettings);
            this.message = 'Saved the headerText, template column, and headerTemplate properties in the persisted settings';
        },
        restore: function () {
            const savedSettings = window.localStorage.getItem("gridOrders1");
            if (savedSettings) {
                this.$refs.grid.ej2Instances.setProperties(JSON.parse(savedSettings));
                this.message = 'Restored the headerText, template column, and headerTemplate';
            } else {
                this.message = 'No saved settings found.';
            }
        }
    },
    provide: {
        grid: [Page]
    }
}
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