<template>
  <div id="app">
    <div style="display: inline-block;">
      <label> Change the frozen column: </label> 
      <ejs-dropdownlist id='dropdownlist' :dataSource='dropDownData' index="0" :change="columnChange" :fields='fields' width="150"></ejs-dropdownlist>
    </div>
    <ejs-grid ref='grid' style="padding: 5px 5px"  :dataSource="data" height='315px'  :enableHover='false'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100 :isFrozen="true"></e-column>
        <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd' textAlign='Right'></e-column>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=130></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
        <e-column field='ShipPostalCode' headerText='Ship Postal Code' width=110></e-column>
        <e-column field='Freight' headerText='Freight' width=80></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Freeze } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-dropdownlist":DropDownListComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      fields: { text: 'text', value: 'value' },
      dropDownData: [
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'OrderID', value: 'OrderID' },
        { text: 'OrderDate', value: 'OrderDate' },
        { text: 'EmployeeID', value: 'EmployeeID' },
        { text: 'ShipName', value: 'ShipName' },
        { text: 'ShipCity', value: 'ShipCity' },
        { text: 'ShipCountry', value: 'ShipCountry' },
        { text: 'ShipRegion', value: 'ShipRegion' },
        { text: 'ShipPostalCode', value: 'ShipPostalCode' },
        { text: 'Freight', value: 'Freight' },
      ]
    };
  },
  methods: {
    columnChange: function(args) {
      const grid = this.$refs.grid.$el.ej2_instances[0]
      const selectedColumn = grid.getColumnByField(args.value);
      // Iterate through all columns and unfreeze any previously frozen columns
      grid.columns.forEach((column) => {
        if (column.isFrozen) {
          column.isFrozen = false;
        }
      });
      // Freeze the newly selected column, if it exists
      if (selectedColumn) {
        selectedColumn.isFrozen = true;
      }
      // Refresh the columns
      grid.refreshColumns();
    }
  },
  provide: {
    grid: [Freeze]
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