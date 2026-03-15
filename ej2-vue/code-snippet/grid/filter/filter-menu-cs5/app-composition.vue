<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterSettings' height='273px'>
            <e-columns>
                <e-column field='OrderID' :filter= 'filter' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { MultiSelect, CheckBoxSelection } from "@syncfusion/ej2-dropdowns";
import { DataManager } from "@syncfusion/ej2-data";
import {createElement} from "@syncfusion/ej2-base";
const grid = ref(null);
MultiSelect.Inject(CheckBoxSelection);
      let dropInstance = null;
      const filterSettings = {
           type: 'Menu'
        };
        const filter = {
            ui: {
                create: function (args) {
                    let flValInput = createElement('input', { className: 'flm-input' });
                    args.target.appendChild(flValInput);
                    dropInstance = new MultiSelect({
                    dataSource: new DataManager(data),
                    fields: { text: 'OrderID', value: 'OrderID' },
                    placeholder: 'Select a value',
                    popupHeight: '200px',
                    allowFiltering: true,
                    mode: "CheckBox",
                });
                dropInstance.appendTo(flValInput);
                },
                write: function () {
                  var filteredValue = [];
                  grid.value.ej2Instances.filterSettings.columns.map((item) => {
                    if (item.field === "OrderID" && item.value) {
                    filteredValue.push(item.value);
                  }
                });
                  if (filteredValue.length > 0) {
                    dropInstance.value = filteredValue;
                  }
                },
                read: function (args) {
                  grid.value.ej2Instances.removeFilteredColsByField(args.column.field);
                  args.fltrObj.filterByColumn(
                    args.column.field,
                    "contains",
                    dropInstance.value
                  );
                }
            }
        };
  provide('grid',  [Filter,CheckBoxSelection]);
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