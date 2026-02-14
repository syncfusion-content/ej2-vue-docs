<template>
    <div id="app">
        <ejs-grid :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' :filter= 'filter' width=120></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { DataManager } from "@syncfusion/ej2-data";
import {createElement} from "@syncfusion/ej2-base";
      let dropInstance = null;
      const filterOptions = {
           type: 'Menu'
        };
        const filter = {
            ui: {
                create: function (args) {
                    let flValInput = createElement('input', { className: 'flm-input' });
                    args.target.appendChild(flValInput);
                    dropInstance = new DropDownList({
                    dataSource: new DataManager(data),
                    fields: { text: 'CustomerID', value: 'CustomerID' },
                    placeholder: 'Select a value',
                    popupHeight: '200px'
                });
                dropInstance.appendTo(flValInput);
                },
                write: function (args) {
                    dropInstance.value = args.filteredValue;
                },
                read: function (args) {
                    args.fltrObj.filterByColumn(args.column.field, args.operator, dropInstance.value);
                }
            }
        };
  provide('grid',  [Filter]);
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