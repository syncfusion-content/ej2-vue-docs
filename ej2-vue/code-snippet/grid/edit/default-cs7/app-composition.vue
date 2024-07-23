<template>
  <div id="app">
    <ejs-grid :dataSource="data" :editSettings="editSettings" :commandClick="commandClick" height="400px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" isPrimaryKey="true" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" editType="numericedit" width="120" format="C2"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" editType="dropdownedit" width="150"></e-column>
        <e-column headerText="Commands" width="140" :commands="commands"></e-column>
      </e-columns>
    </ejs-grid>
    <ejs-dialog  header="Row Information" :content="dialogContent" showCloseIcon="true" width="400px" :visible="dialogVisible" :close="dialogClose">
    </ejs-dialog>
  </div>
</template>
<script setup>
import {  ref, provide } from "vue";
import { GridComponent as EjsGrid,ColumnDirective as EColumn,ColumnsDirective as EColumns,Page,Toolbar,Edit,CommandColumn } from "@syncfusion/ej2-vue-grids";
import { DialogComponent as EjsDialog } from "@syncfusion/ej2-vue-popups";
import { data } from "./datasource.js";

const editSettings = { allowEditing: true, allowDeleting: true };
const commands = [{ buttonOption: { content: "Details", cssClass: "e-flat" } }];
const dialogVisible = ref(false);
const dialogContent = ref("");

const commandClick = (args) => {
  dialogContent.value = `
    <p><b>OrderID:</b> ${args.rowData.OrderID}</p>
    <p><b>CustomerID:</b> ${args.rowData.CustomerID}</p>
    <p><b>Freight:</b> ${args.rowData.Freight}</p>
    <p><b>ShipCountry:</b> ${args.rowData.ShipCountry}</p>`;
  dialogVisible.value = true;
};

const dialogClose = () => {
  dialogVisible.value = false;
};

provide("grid", [Page, Edit, Toolbar, CommandColumn]);

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