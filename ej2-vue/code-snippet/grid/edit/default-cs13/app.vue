

<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowPaging='true' :editSettings='editSettings' :pageSettings='pageSettings' :toolbar='toolbar' height='175px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' type='string' width=120>
                </e-column>
                <e-column field='Freight' headerText='Freight' type='number' textAlign='Right' editType='numericedit' format='C2' width=120></e-column>
                <e-column field='OrderDate' headerText='Order Date' type='date' textAlign='Right' format="hh:mm" :edit='dpParams' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { TimePicker } from "@syncfusion/ej2-calendars";
import { enableRipple } from "@syncfusion/ej2-base";
import { purchaseData } from './datasource.js';

Vue.use(GridPlugin);

let ddElem;
let timeObject;

function createOrderDateFn() {
  ddElem = document.createElement('input');
  return ddElem;
}
function destroyOrderDateFn() {
  timeObject.destroy();
}
function readOrderDateFn() {
  return timeObject.value;
}
function writeOrderDateFn(args) {
  enableRipple(true);
  timeObject = new TimePicker({
    value: args.rowData[args.column.field],
    step: 60,
  });
  timeObject.appendTo(ddElem);
}

export default {
  data() {
    return {
      data: purchaseData,
      pageSettings: { pageSizes: true, pageSize: 5 },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      dpParams: {
        create: createOrderDateFn,
        destroy: destroyOrderDateFn,
        read: readOrderDateFn,
        write: writeOrderDateFn,
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


