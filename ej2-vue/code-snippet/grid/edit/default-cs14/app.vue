

<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowPaging='true' :editSettings='editSettings' :pageSettings='pageSettings' :toolbar='toolbar' height='175px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' type='string' :edit='daParams' width=140></e-column>
                <e-column field='Freight' headerText='Freight' type='number' textAlign='Right' editType='numericedit' format='C2' width=120></e-column>
                <e-column field='OrderDate' headerText='Order Date' type='date' editType='datepickeredit' textAlign='Right' format='yMd' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { AutoComplete } from "@syncfusion/ej2-dropdowns";
import { purchaseData } from './datasource.js';

Vue.use(GridPlugin);

let inpuEle;
let autoCompleteIns;
let autoCompleteData = [
  { CustomerID: 'VINET', Id: '1' },
  { CustomerID: 'TOMSP', Id: '2' },
  { CustomerID: 'HANAR', Id: '3' },
  { CustomerID: 'VICTE', Id: '4' },
  { CustomerID: 'SUPRD', Id: '5' },
];

function createCustomerIDFn() {
  inpuEle = document.createElement('input');
  return inpuEle;
}
function destroyCustomerIDFn() {
  autoCompleteIns.destroy();
}
function readCustomerIDFn() {
  return autoCompleteIns.value;
}
function writeCustomerIDFn(args) {
  autoCompleteIns = new AutoComplete({
    allowCustom: true,
    value: args.rowData[args.column.field],
    dataSource: autoCompleteData,
    fields: { value: "CustomerID", text: "CustomerID" },
  });
  autoCompleteIns.appendTo(inpuEle);
}

export default {
  data() {
    return {
      data: purchaseData,
      pageSettings: { pageSizes: true, pageSize: 5 },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      daParams: {
        create: createCustomerIDFn,
        destroy: destroyCustomerIDFn,
        read: readCustomerIDFn,
        write: writeCustomerIDFn,
      },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderIDRules: { required: true },
    };
  },

  provide: {
    grid: [Page, Edit, Toolbar],
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


