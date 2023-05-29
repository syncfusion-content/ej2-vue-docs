

<template>
    <div id="app">
        <ejs-grid :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' height='273px'>
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
import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { DataManager } from "@syncfusion/ej2-data";
import {createElement} from "@syncfusion/ej2-base";

Vue.use(GridPlugin);

export default {
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
                    let db = new DataManager(data);
                    let flValInput = createElement('input', { className: 'flm-input' });
                    args.target.appendChild(flValInput);
                    dropInstance = new DropDownList({
                    dataSource: new DataManager(data),
                    fields: { text: 'OrderID', value: 'OrderID' },
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
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


