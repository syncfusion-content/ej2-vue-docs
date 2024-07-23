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
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Edit, CommandColumn } from "@syncfusion/ej2-vue-grids";
import { DialogComponent } from "@syncfusion/ej2-vue-popups";
import { data } from "./datasource.js";

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-dialog": DialogComponent,
  },
  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowDeleting: true },
      commands: [{ buttonOption: { content: "Details", cssClass: "e-flat" } }],
      dialogVisible: false,
      dialogContent: ""
    };
  },
  methods: {
    commandClick(args) {
      this.dialogContent = `
        <p><b>OrderID:</b> ${args.rowData.OrderID}</p>
        <p><b>CustomerID:</b> ${args.rowData.CustomerID}</p>
        <p><b>Freight:</b> ${args.rowData.Freight}</p>
        <p><b>ShipCountry:</b> ${args.rowData.ShipCountry}</p>`;
      this.dialogVisible = true;
    },
    dialogClose() {
      this.dialogVisible = false;
    }
  },
  provide: {
    grid: [Page, Edit, CommandColumn],
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
