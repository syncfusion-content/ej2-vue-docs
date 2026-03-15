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
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-button":ButtonComponent,
"ejs-dialog":DialogComponent
},
  data: () => {
    return {
      data: employeeData,
    };
  },
  methods: {
    showDetails(rowData) {
      this.selectedRecord = rowData;
      this.$refs.dialog.show();
    },
    contentShow() {
      if (this.selectedRecord) {
        const dialogContent = `
          <p><b>EmployeeID:</b>${this.selectedRecord.EmployeeID}</p>
          <p><b>FirstName:</b>${this.selectedRecord.FirstName}</p>
          <p><b>LastName:</b>${this.selectedRecord.LastName}</p>`;
        this.$refs.dialog.$el.querySelector(".e-dlg-content").innerHTML = dialogContent;
      }
    },
  },
}
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