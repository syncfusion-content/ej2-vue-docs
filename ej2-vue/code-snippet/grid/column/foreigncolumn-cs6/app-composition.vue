<template>
    <div id="app">
        <ejs-grid id='grid' ref='grid' :dataSource='data' :allowFiltering='true' height='270px' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
               <e-column field='EmployeeID' headerText='Employee Name' :dataSource='employeeData' foreignKeyValue='FirstName' :filterBarTemplate='templateOptions' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' width=80></e-column>
                 <e-column field='ShipCity' headerText='Ship City' width=130></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter,ForeignKey } from "@syncfusion/ej2-vue-grids";
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data, employeeData } from './datasource.js'
const grid = ref(null);
      const templateOptions = {
        create: function () {
          const dropdown = document.createElement('input');
          dropdown.id = 'EmployeeID';
          return dropdown;
        },
        write: function () {
          let DropDownListObj = new DropDownList({
            dataSource: employeeData,
            fields: { text: 'FirstName', value: 'FirstName' },
            placeholder: 'Select a value',
            popupHeight: '200px',
            change: function (e) {
              var gridObj = grid.value.ej2Instances;
              if (e.value == 'All') {
                gridObj.removeFilteredColsByField('FirstName');
              } else {
                gridObj.filterByColumn('EmployeeID', 'equal', e.value);
              }
            }
          });
          DropDownListObj.appendTo('#EmployeeID');
        }
      }
  provide('grid',  [Filter, ForeignKey]);
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