<template>
  <div id="app">
    <ejs-grid  ref="MasterGrid" :dataSource="data" id="MasterGrid" :selectedRowIndex="1" :toolbar="toolbar" :rowSelected="rowSelected" :toolbarClick="toolbarClick" allowExcelExport="true">
        <e-columns>
            <e-column field="ContactName" headerText="Customer Name" width="150"></e-column>
            <e-column field="CompanyName" headerText="Company Name" width="150"></e-column>
            <e-column field="Address" headerText="Address" width="150"></e-column>
            <e-column field="Country" headerText="Country" width="130"></e-column>
        </e-columns>
    </ejs-grid>
    <div class="e-statustext">Showing orders of Customer: <b id="key"></b></div>
    <ejs-grid ref="grid" :allowSelection="false" allowExcelExport="true">
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
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { customerData, data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
    data() {
        var names = ["AROUT", "BERGS", "BLONP", "CHOPS", "ERNSH"];
        return {
            toolbar: ["ExcelExport"],
            data: customerData.filter(function (e) {
                return names.indexOf(e.CustomerID) !== -1;
            })
        };
    },
    methods: {
        rowSelected: function (args) {
            let selectedRecord = args.data;
            this.$refs.grid.ej2Instances.dataSource = data.filter((record) => record.CustomerName === selectedRecord.ContactName).slice(0, 5);
            document.getElementById("key").innerHTML = selectedRecord.ContactName;
        },
        toolbarClick: function (args) {
            const appendExcelExportProperties = {
                multipleExport: { type: "AppendToSheet", blankRows: 2 },
            };
            const firstGridExport = this.$refs.MasterGrid.ej2Instances.excelExport(
                         appendExcelExportProperties, true);
            firstGridExport.then((fData) => {
                this.$refs.grid.ej2Instances.excelExport(appendExcelExportProperties, false, fData);
            });
            }
    },
    provide: {
        grid: [Toolbar, ExcelExport],
    }
};
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>