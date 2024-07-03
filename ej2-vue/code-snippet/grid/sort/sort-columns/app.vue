<template>
  <div id="app">
   <div style="display: inline-block;">
      <label style='padding:  10px 10px 15px 0'> Column name : </label>
      <ejs-dropdownlist ref='columnDropDown' id='columnDropDown' index="0" width="150" :dataSource="columnData"
        :fields='fields'></ejs-dropdownlist>
    </div>
    <div style="display: inline-block;">
      <label style='padding:  10px 10px 15px 0; margin-left:5px'> Sorting direction : </label>
      <ejs-dropdownlist ref='directionDropDown' id='directionDropDown' index="0" width="150" :dataSource="directionData"
        :fields='fields'></ejs-dropdownlist>
    </div>
    <ejs-button style="margin: 5px" ref='button' cssClass='e-outline' v-on:click="addSortColumn">Add sort
      column</ejs-button>
    <ejs-grid ref='grid' style="margin-top: 10px" :dataSource='data' :allowSorting='true' :sortSettings='initialSort'
      height='315px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        <e-column field='Freight' headerText='Freight' width='80' format='C2' textAlign='Right'></e-column>
      </e-columns>
    </ejs-grid>
</div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Sort } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-dropdownlist":DropDownListComponent,
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      initialSort: {
        columns: [{ field: 'ShipName', direction: 'Ascending' },]
      },
      fields: { text: 'text', value: 'value' },
      columnData : [
        { text: 'Order ID', value: 'OrderID' },
        { text: 'Customer ID', value: 'CustomerID' },
        { text: 'Freight', value: 'Freight' },
      ],
      directionData: [{ text: 'Ascending', value: 'Ascending' },
        { text: 'Descending', value: 'Descending' },],
    };
  },
  methods: {
    addSortColumn: function() {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      grid.sortColumn(
        this.$refs.columnDropDown.$el.ej2_instances[0].value,
        this.$refs.directionDropDown.$el.ej2_instances[0].value,
        true
      );
    }
  },
  provide: {
    grid: [Sort]
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