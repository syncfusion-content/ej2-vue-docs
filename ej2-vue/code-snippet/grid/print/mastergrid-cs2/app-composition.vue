<template>
  <div id="app">
    <ejs-grid :dataSource="masterdata" :selectedRowIndex="1" :toolbar="toolbar" :rowSelected="rowSelected" :beforePrint="beforePrint">
        <e-columns>
            <e-column field="ContactName" headerText="Customer Name" width="150"></e-column>
            <e-column field="CompanyName" headerText="Company Name" width="150"></e-column>
            <e-column field="Address" headerText="Address" width="150"></e-column>
            <e-column field="Country" headerText="Country" width="130"></e-column>
        </e-columns>
    </ejs-grid>
    <div class="e-statustext">Showing orders of Customer: <b id="key"></b></div>
    <ejs-grid ref="grid" :allowSelection="false">
        <e-columns>
            <e-column field="OrderID" headerText="Order ID" width="100" textAlign="Right"></e-column>
            <e-column field="Freight" headerText="Freight" format="C2" width="100" type="number"></e-column>
            <e-column field="ShipName" headerText="Ship Name" width="200"></e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
            <e-column field="ShipAddress" headerText="Ship Address" width="200"></e-column>
         </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import {GridComponent as EjsGrid,ColumnDirective as EColumn,ColumnsDirective as EColumns,Toolbar,Print } from "@syncfusion/ej2-vue-grids";
import { customerData, data } from "./datasource.js";
const grid = ref(null);
var names = ["AROUT", "BERGS", "BLONP", "CHOPS", "ERNSH"];
const toolbar = ["Print"];
const masterdata = customerData.filter(function (e) {
  return names.indexOf(e.CustomerID) !== -1;
});
const rowSelected = function (args) {
  let selectedRecord = args.data;
  grid.value.ej2Instances.dataSource = data.filter((record) => record.CustomerName === selectedRecord.ContactName).slice(0, 5);
  document.getElementById("key").innerHTML = selectedRecord.ContactName;
};
const beforePrint = function (args) {
  let customEle = document.createElement("div");
  customEle.innerHTML =document.getElementsByClassName("e-statustext")[0].innerHTML +grid.value.ej2Instances.element.innerHTML;
  customEle.appendChild(document.createElement("br"));
  args.element.append(customEle);
};
provide("grid", [Toolbar, Print]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
.e-statustext{
  padding: 8px 0px 10px 0px;
}
</style>