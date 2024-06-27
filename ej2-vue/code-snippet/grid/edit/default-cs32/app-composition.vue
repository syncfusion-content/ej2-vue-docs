<template>
  <div id="app">
    <div style="display: inline-block">
      <label style="padding: 30px 17px 0 0;font-weight: bold"> Select new row position:</label>
      <ejs-dropdownlist  index="0" width="150" :dataSource="positionData" :change="changePosition">
      </ejs-dropdownlist>
    </div>
    <div style="padding-top:20px">
      <ejs-grid ref="batchgrid" :dataSource='data' allowPaging='true' :editSettings="editSettings" :pageSettings='pageSettings' :toolbar='toolbar' >
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width='120' :validationRules='customerIDRules'></e-column>
          <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
          <e-column field='OrderDate' headerText='Order Date' width='130' format='yMd' type="date" editType='datepickeredit' textAlign='Right' :validationRules="orderDateRules"></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' :validationRules="shipCountryRules" width='150' editType='dropdownedit' :edit='editparams'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ref } from "vue";
import { GridComponent as EjsGrid,ColumnDirective as EColumn,ColumnsDirective as EColumns,Page,Toolbar,Edit} from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { employeeData } from "./datasource.js";
const data = employeeData;
const editSettings = {
  allowEditing: true,
  allowAdding: true,
  allowDeleting: true,
};
const toolbar = ["Add", "Delete", "Update", "Cancel"];
const orderIDRules = { required: true, number: true };
const customerIDRules = { required: true };
const freightRules = { required: true };
const shipCountryRules = { required: true };
const orderDateRules = { required: true };
const batchgrid = ref(null);
const editparams = { params: { popupHeight: "300px" } };
const pageSettings = { pageCount: 5 };
const positionData = [
  { text: "Top", value: "Top" },
  { text: "Bottom", value: "Bottom" },
];
const changePosition = function (args) {
  batchgrid.value.ej2Instances.editSettings.newRowPosition = args.value;
};
provide("grid", [Page, Edit, Toolbar]);
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