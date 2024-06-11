<template>
    <div id="app">
        <ejs-grid ref="grid" id="grid" :dataSource='data' :allowPaging='true' :enableHover='false' :created='created' :load='load' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                <e-column field='OrderDate' headerText='Order Date' textAlign= 'Right' editType= 'datepickeredit' width=120 format= 'yMd'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
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
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  methods: {
      created: function() {
           let gridInstance = document.getElementById("grid").ej2_instances[0];
           gridInstance.getContentTable().addEventListener('click', (args) => {
              if (args.target.classList.contains('e-rowcell')) {
                   gridInstance.editModule.editCell(parseInt(args.target.getAttribute('index')),
                   gridInstance.getColumnByIndex(parseInt(args.target.getAttribute('data-colindex'))).field);
              }
          });
      },
      editACell: function(args) {
          let gridInstance = document.getElementById("grid").ej2_instances[0];
          gridInstance.editModule.editCell(
          parseInt(args.getAttribute('index')),
          gridInstance.getColumnByIndex(parseInt(args.getAttribute('data-colindex'))).field);
      },
      load: function() {
          let gridInstance = document.getElementById("grid").ej2_instances[0];
          gridInstance.element.addEventListener('keydown', (e) => {
          var closesttd = e.target.closest('td');
          if (e.keyCode === 39 && !isNullOrUndefined(closesttd.nextSibling)) {
              this.editACell(closesttd.nextSibling);
          }
          if (e.keyCode === 37 && !isNullOrUndefined(closesttd.previousSibling) &&
            !gridInstance.getColumnByIndex(
                parseInt(closesttd.previousSibling.getAttribute('data-colindex'))).isPrimaryKey)
          {
               this.editACell(closesttd.previousSibling);
          }
          if (e.keyCode === 40 && !isNullOrUndefined(closesttd.closest('tr').nextSibling)) {
            this.editACell(
                closesttd.closest('tr').nextSibling.querySelectorAll('td')[
                parseInt(closesttd.getAttribute('data-colindex'))]);
          }
          if ( e.keyCode === 38 && !isNullOrUndefined(closesttd.closest('tr').previousSibling)) {
            this.editACell(
                closesttd.closest('tr').previousSibling.querySelectorAll('td')[
                 parseInt(closesttd.getAttribute('data-colindex'))]);
          }
          });
      }
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>