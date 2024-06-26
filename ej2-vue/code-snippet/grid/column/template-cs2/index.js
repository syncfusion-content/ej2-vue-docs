
import Vue from "vue";
import { GridPlugin, } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(GridPlugin);
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
         <ejs-grid ref="grid" :dataSource="data" height=315 >
          <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width='130'></e-column>
            <e-column field='FirstName' headerText='Name' width='120'></e-column>
            <e-column headerText='Employee Data' width='150' textAlign='Right' :template="'columnTemplate'" isPrimaryKey='true'></e-column>
          </e-columns>
          <template v-slot:columnTemplate="{data}">
            <div>
              <ejs-button class="empData" v-on:click.native="showDetails(data)">View</ejs-button>
              <ejs-dialog ref="dialog" :visible="false" width="50%" showCloseIcon="true" :beforeOpen="contentShow" :header="header">
              </ejs-dialog>
            </div>
          </template>
        </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: employeeData,
      header: 'Selected Row Details',
      selectedRecord: null,
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
          <p><b>LastName:</b>${this.selectedRecord.LastName}</p>
        `;
        this.$refs.dialog.$el.querySelector(".e-dlg-content").innerHTML = dialogContent;
      }
    },
  },
});