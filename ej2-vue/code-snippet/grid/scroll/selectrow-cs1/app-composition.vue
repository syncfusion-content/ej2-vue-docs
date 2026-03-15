<template>
  <div id="app">
    <div style="display: inline-block">
      <label style="padding: 30px 20px 0 0" > Select row index :</label>
      <ejs-dropdownlist ref="dropdown" id='value'  index='0' 
        width='220' :dataSource='dropDownData' :change='valueChange' >
      </ejs-dropdownlist>
    </div>
    <div style="padding: 20px 17px 0 0">
      <ejs-grid ref="grid" :dataSource='gridData' height='315' width='100%' :rowSelected='rowSelected'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
          <e-column field='Frieght' headerText='Employee ID' textAlign='Right' width=120></e-column>
          <e-column field='ShipAddress' headerText='Ship Address' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";
const gridData= data;
const grid=ref(null);
const dropDownData= [
        { text: 'Select count' },
        { text: '10', value: '10' },
        { text: '20', value: '20' },
        { text: '30', value: '30' },
        { text: '80', value: '80' },
        { text: '100', value: '100' },
        { text: '200', value: '200' },
        { text: '232', value: '232' },
        { text: '300', value: '300' },
        { text: '500', value: '500' },
        { text: '800', value: '800' },
        { text: '820', value: '850' },
        { text: '920', value: '920' },
        { text: '2020', value: '2020' },
        { text: '3000', value: '3000' },
        { text: '4000', value: '4000' },
        { text: '4999', value: '4999' }

      ];
const valueChange=function(args){
        grid.value.ej2Instances.selectionModule.selectRow(parseInt(args.value, 10));   
    };
const rowSelected=function(){
        const rowHeight = grid.value.ej2Instances.getRows()[grid.value.ej2Instances.getSelectedRowIndexes()[0]].scrollHeight;
       grid.value.ej2Instances.getContent().children[0].scrollTop = rowHeight * grid.value.ej2Instances.getSelectedRowIndexes()[0];
    };
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