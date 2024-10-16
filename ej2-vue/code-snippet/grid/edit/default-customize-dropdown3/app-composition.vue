<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='265px' :load='load' :actionComplete='onActionComplete'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100 :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID'  headerText='Customer ID' width=120 :validationRules='customerIDRules'></e-column>
        <e-column field='Freight'  headerText='Freight' textAlign= 'Right' editType= 'numericedit' :validationRules='freightRules'  width=120></e-column>
        <e-column field='ShipCountry' headerText='Ship Country'  editType= 'dropdownedit'  :validationRules='countryRules'   width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref} from "vue";
import { data } from './datasource.js';
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";

const grid = ref(null);
const dataGrid = data;
const editSettings = {
  allowEditing: true,
  allowAdding: true,
  allowDeleting: true,
};
const toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];
const orderIDRules = { required: true, number: true };
const freightRules = { required: true, min: 1, max: 1000 };
const customerIDRules = { required: true };
const countryRules = { required: true };
const load = function () {
  grid.value.ej2Instances.element.addEventListener("mouseup", (e) => {
    if (e.target.classList.contains("e-rowcell")) {
      if (grid.value.ej2Instances.isEdit) {
        this.$refs.grid.ej2Instances.endEdit();
      }
      let rowInformation = grid.value.ej2Instances.getRowInfo(e.target);
      if (rowInformation && rowInformation.column && rowInformation.column.field === "ShipCountry") {
        this.isDropDown = true;
        grid.value.ej2Instances.selectRow(rowInformation.rowIndex);
        grid.value.ej2Instances.startEdit();
      }
    }
  });
};
const onActionComplete = function (args) {
  if (args.requestType === "beginEdit" && this.isDropDown) {
    this.isDropDown = false;
    let dropDownObj =
      args.form.querySelector(".e-dropdownlist")["ej2_instances"][0];
    dropDownObj.element.focus();
    dropDownObj.showPopup();
  }
};
provide("grid", [Edit, Toolbar]);
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