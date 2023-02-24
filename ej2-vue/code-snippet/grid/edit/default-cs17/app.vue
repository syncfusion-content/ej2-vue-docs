

<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowPaging='true' :allowTextWrap='true' :editSettings='editSettings' :pageSettings='pageSettings' :toolbar='toolbar' height='175px' :created='created'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' type='string' width=140>
                </e-column>
                <e-column field='Freight' headerText='Freight' type='number' textAlign='Right' editType='numericedit' format='C2' width=120></e-column>
                <e-column field='ShipAddress' headerText='Ship Address' type='string' :edit='ddParams' :valueAccessor='valueAccessor' :disableHtmlEncode='disableHtmlEncode' width=180>
                </e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { TextBox } from "@syncfusion/ej2-inputs";
import { purchaseData } from './datasource.js';

Vue.use(GridPlugin);

let tbElem;
let textEditor;

function createShipAddressFn() {
  tbElem = document.createElement("textarea");
  return tbElem;
}
function destroyShipAddressFn() {
  textEditor.destroy();
}
function readShipAddressFn() {
  return textEditor.value;
}
function writeShipAddressFn(args) {
  textEditor = new TextBox({
    multiline: true,
    value: args.rowData[args.column.field],
    floatLabelType: "Auto",
  });
  textEditor.appendTo(tbElem);
}

export default {
  data() {
    return {
      data: purchaseData,
      pageSettings: { pageSizes: true, pageSize: 5 },
      disableHtmlEncode: false,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      ddParams: {
        create: createShipAddressFn,
        destroy: destroyShipAddressFn,
        read: readShipAddressFn,
        write: writeShipAddressFn,
      },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderIDRules: { required: true },
    };
  },
  methods: {
    created(args) {
      this.$refs.grid.ej2Instances.keyConfigs.enter = "";
    },
    valueAccessor: function (field, cdata, column) {
      var value = cdata[field];
      if (value !== undefined) {
        return value.split("\n").join("<br>");
      } else {
        return "";
      }
    },
  },

  provide: {
    grid: [Page, Edit, Toolbar],
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


