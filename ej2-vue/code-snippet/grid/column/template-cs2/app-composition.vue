<template>
    <div id="app">
         <ejs-grid ref="grid" :dataSource="data" height=315>
          <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width='130'></e-column>
            <e-column field='FirstName' headerText='Name' width='120'></e-column>
            <e-column headerText='Employee Data' width='150' textAlign='Right' :template="'columnTemplate'" isPrimaryKey='true'></e-column>
          </e-columns>
          <template v-slot:columnTemplate="{data}">
            <div>
              <ejs-button class="empData" v-on:click="showDetails(data)">View</ejs-button>
              <ejs-dialog ref="dialog" :visible="false" width="50%" showCloseIcon="true" :beforeOpen="contentShow" :header="header">
              </ejs-dialog>
            </div>
          </template>
        </ejs-grid>
    </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ref } from "vue";
const dialog = ref(null);
    const data = employeeData;
    const showDetails = function(rowData) {
      this.selectedRecord = rowData;
      dialog.value.show();
    }
    const contentShow = function() {
      if (this.selectedRecord) {
        const dialogContent = `
          <p><b>EmployeeID:</b>${this.selectedRecord.EmployeeID}</p>
          <p><b>FirstName:</b>${this.selectedRecord.FirstName}</p>
          <p><b>LastName:</b>${this.selectedRecord.LastName}</p>`;
        dialog.value.$el.querySelector(".e-dlg-content").innerHTML = dialogContent;
      }
    }
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