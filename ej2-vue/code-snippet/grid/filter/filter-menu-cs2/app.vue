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
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { DataManager } from "@syncfusion/ej2-data";
import {createElement} from "@syncfusion/ej2-base";
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
      filterOptions: {
           type: 'Menu'
        },
        filter: {
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
        }
    };
  },
  provide: {
    grid: [Filter]
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