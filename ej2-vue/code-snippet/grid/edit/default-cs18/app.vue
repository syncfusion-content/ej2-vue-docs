<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowPaging='true' :editSettings='editSettings'  :toolbar='toolbar'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' type='string' width=120>
                </e-column>
                <e-column field='ShipCountry' headerText='Ship Country' type='string' :edit='params'  width=300>
                </e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { Query } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.js';
let element;
let dropdownobj;

function create() {
  element = document.createElement('input');
  return element;
}
function destroy() {
  dropdownobj.destroy();
}
function read() {
  return dropdownobj.value;
}
function write(args) {
     dropdownobj = new DropDownList({
         dataSource:data,
         value: args.rowData[args.column.field],
         query: new Query().select(['EmployeeID', 'ShipCountry']).take(10),
         fields: { text: 'ShipCountry', value: 'ShipCountry' },
         placeholder: 'Select a Country',
         headerTemplate: '<table><tr><th>EmployeeID</th><th>ShipCountry</th></tr></table>',
         itemTemplate: '<div class="e-grid"><table class="e-table"><tbody><tr><td class="e-rowcell">${EmployeeID}</td><td class="e-rowcell">${ShipCountry}</td></tr> </tbody></table></div>'
      });
      dropdownobj.appendTo(element);
}
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
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      params: {
        create: create,
        destroy: destroy,
        read: read,
        write: write,
      },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  provide: {
    grid: [Page, Edit, Toolbar],
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
    .content {
        margin: 0 auto;
        width: 550px;
    }
    table{
        width:100%;
        border-collapse: separate;
        table-layout: fixed;
    }
    th,td{  
        border-width: 1px 0 0 1px;
        border-color: #e0e0e0;
        text-align: left;
        border-style: solid;
        display: table-cell;
    }
    th{
        line-height: 36px;
        text-indent: 16px;
    }
    .e-ddl-header{
        padding-right: 17px;
        border-width: 1px 0px 1px 0px;
        border-color: #e0e0e0;
        border-style: solid;
    }
    .e-dropdownbase .e-list-item{
        padding-right:0px;
    }
</style>