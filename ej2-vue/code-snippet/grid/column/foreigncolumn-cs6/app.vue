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
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Filter,ForeignKey } from "@syncfusion/ej2-vue-grids";
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data, employeeData } from './datasource.js'
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
return {
      data: data,
      employeeData: employeeData,
      templateOptions: {
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
              var gridObj = (document.getElementsByClassName('e-grid')[0]).ej2_instances[0];
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
    };
  },
  provide: {
    grid: [Filter, ForeignKey]
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