<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :allowPaging='true' :allowTextWrap='true' :editSettings='editSettings'
      :pageSettings='pageSettings' :toolbar='toolbar' height='175px' :created='created'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true'
          :validationRules='orderIDRules' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' type='string' width=140>
        </e-column>
        <e-column field='Freight' headerText='Freight' type='number' textAlign='Right' editType='numericedit' format='C2'
          width=120></e-column>
        <e-column field='ShipAddress' headerText='Ship Address' type='string' :edit='ddParams'
          :valueAccessor='valueAccessor' :disableHtmlEncode='disableHtmlEncode' width=180>
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref} from "vue";
import { purchaseData } from './datasource.js';
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { RichTextEditor, Toolbar as RTEToolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(RTEToolbar, Link, Image, HtmlEditor, QuickToolbar);
const grid = ref(null);
let rteElem;
let richTextEditor;
function createShipAddressFn() {
  rteElem = document.createElement("textarea");
  return rteElem;
}
function destroyShipAddressFn() {
  richTextEditor.destroy();
}
function readShipAddressFn() {
  return richTextEditor.value;
}
function writeShipAddressFn(args) {
  richTextEditor = new RichTextEditor({
    value: args.rowData[args.column.field],
  });
  richTextEditor.appendTo(rteElem);
}
const data = purchaseData;
const pageSettings = { pageSizes: true, pageSize: 5 };
const disableHtmlEncode = false;
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
const ddParams = {
  create: createShipAddressFn,
  destroy: destroyShipAddressFn,
  read: readShipAddressFn,
  write: writeShipAddressFn,
};
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const orderIDRules = { required: true };
const created = (args) => {
  grid.value.ej2Instances.keyConfigs.enter = "";
}
const valueAccessor = function (field, cdata, column) {
  var value = cdata[field];
  if (value !== undefined) {
    return value.split("\n").join("<br>");
  } else {
    return "";
  }
}
provide('grid', [Page, Edit, Toolbar],);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>