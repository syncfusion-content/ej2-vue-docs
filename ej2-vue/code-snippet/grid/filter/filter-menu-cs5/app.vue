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
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { MultiSelect, CheckBoxSelection } from "@syncfusion/ej2-dropdowns";
import { DataManager } from "@syncfusion/ej2-data";
import {createElement} from "@syncfusion/ej2-base";
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
MultiSelect.Inject(CheckBoxSelection);
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
      let dropInstance = null;
    return {
      data: data,
      filterSettings: {
           type: 'Menu'
        },
        filter: {
            ui: {
                create: function (args) {
                    let db = new DataManager(data);
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
                write: function (args) {
                  var grid = document.getElementById("Grid").ej2_instances[0];
                  var filteredValue = [];
                  grid.filterSettings.columns.map((item) => {
                    if (item.field === "OrderID" && item.value) {
                    filteredValue.push(item.value);
                  }
                });
                  if (filteredValue.length > 0) {
                    dropInstance.value = filteredValue;
                  }
                },
                read: function (args) {
                  var grid = document.getElementById("Grid").ej2_instances[0];
                  grid.removeFilteredColsByField(args.column.field);
                  args.fltrObj.filterByColumn(
                    args.column.field,
                    "contains",
                    dropInstance.value
                  );
                }
            }
        }
    };
  },
  provide: {
    grid: [Filter,CheckBoxSelection]
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