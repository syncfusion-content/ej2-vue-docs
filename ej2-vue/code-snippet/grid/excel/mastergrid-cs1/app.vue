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
            masterData: customerData.filter(function (e) {
                return names.indexOf(e.CustomerID) !== -1;
            }),
            exportGrids: ['masterGrid', 'detailGrid'],
        };
    },
    methods: {
        rowSelected: function (args) {
            let selectedRecord = args.data;
            this.$refs.detailgrid.dataSource = data.filter((record) => record.CustomerName === selectedRecord.ContactName).slice(0, 5);
            document.getElementById("key").innerHTML = selectedRecord.ContactName;
        },
        toolbarClick: function (args) {
            if (args.item.id === 'masterGrid_excelexport') {
                const appendExcelExportProperties = {
                    multipleExport: { type: "AppendToSheet", blankRows: 2 },
                };
                this.$refs.mastergrid.excelExport(appendExcelExportProperties);
            }
        }
    },
    provide: {
        grid: [Toolbar, ExcelExport],
    }
};
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