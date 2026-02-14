<template>
    <div id="app">
        <ejs-grid ref="mastergrid" :dataSource="masterData" id="masterGrid" :selectedRowIndex="1" 
        :toolbar="toolbar" :rowSelected="rowSelected" :toolbarClick="toolbarClick" 
        allowExcelExport="true" :exportGrids='exportGrids'>
            <e-columns>
                <e-column field="ContactName" headerText="Customer Name" width="150"></e-column>
                <e-column field="CompanyName" headerText="Company Name" width="150"></e-column>
                <e-column field="Address" headerText="Address" width="150"></e-column>
                <e-column field="Country" headerText="Country" width="130"></e-column>
            </e-columns>
        </ejs-grid>
        <div class="e-statustext">Showing orders of Customer: <b id="key"></b></div>
        <ejs-grid ref="detailgrid" id='detailGrid' :allowSelection="false" allowExcelExport="true">
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
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { customerData, data } from "./datasource.js";
const mastergrid = ref(null);
const detailgrid = ref(null);
const exportGrids= ['masterGrid', 'detailGrid'];
const names = ["AROUT", "BERGS", "BLONP", "CHOPS", "ERNSH"];
const toolbar = ["ExcelExport"];
const masterData = customerData.filter(function (e) {
    return names.indexOf(e.CustomerID) !== -1;
})
const rowSelected = function (args) {
    let selectedRecord = args.data;
    detailgrid.value.dataSource = data.filter((record) => record.CustomerName === selectedRecord.ContactName).slice(0, 5);
    document.getElementById("key").innerHTML = selectedRecord.ContactName;
}
const toolbarClick = function (args) {
    if (args.item.id === 'masterGrid_excelexport') {
        const appendExcelExportProperties = {
            multipleExport: { type: "AppendToSheet", blankRows: 2 },
        };
        mastergrid.value.excelExport(appendExcelExportProperties);
    }   
}
provide('grid', [Toolbar, ExcelExport]);
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
</style>