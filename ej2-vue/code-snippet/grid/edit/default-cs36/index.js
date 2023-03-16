
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { employeeDetails } from './datasource.js';
import { Query } from '@syncfusion/ej2-data';

Vue.use(GridPlugin);
window.role = "";

let jobRole = [
    { role: "TeamLead", destId: "0" },
    { role: "Manager", destId: "1" },
    { role: "Engineer", destId: "2" },
    { role: "Sales", destId: "3" },
    { role: "Support", destId: "4" },
];

let salaryDetails = [
    { salary: "11000", destId: "1" },
    { salary: "13500", destId: "2" },
    { salary: "16500", destId: "2" },
    { salary: "18500", destId: "1" },
    { salary: "21500", destId: "2" },
    { salary: "23000", destId: "2" },
];

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref="grid" :dataSource="data" :editSettings="editSettings" :toolbar="toolbar" :load="load">
            <e-columns>
                <e-column field="EmployeeID" headerText="Employee ID" textAlign="Right" :isPrimaryKey="true" width="120"></e-column>
                <e-column field="Role" headerText="Role" editType="dropdownedit" :edit="roleParams"
                width="160"></e-column>
                <e-column field="Salary" headerText="Salary" textAlign="Right" editType="dropdownedit"
                width="160" :edit="salaryParams"></e-column>
                <e-column field="Address" headerText="Address" width="150"></e-column>
            </e-columns>
      </ejs-grid>
    </div>
`,

    data() {
        return {
            data: employeeDetails,
            editSettings: {
                allowEditing: true,
                allowAdding: true,
                allowDeleting: true
            },
            toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
            roleParams: {
                params: {
                    allowFiltering: true,
                    dataSource: jobRole,
                    fields: { value: "role", text: "role" },
                    query: new Query(),
                    change: this.valChange
                }
            },
            salaryParams: {
                params: {
                    allowFiltering: true,
                    dataSource: salaryDetails,
                    fields: { value: "salary", text: "salary" },
                    query: new Query()
                }
            },
           customFn: function (args) {
               switch (window["role"]) {
                  case "Engineer":
                      if (args.value > 10000 && args.value < 15000) {
                          return true;
                      } else {
                          this.rules["Salary"]["required"][1] = "Please enter valid Engineer Salary";
                      }
                  break;

                  case "TeamLead":
                      if (args.value > 15000 && args.value < 20000) {
                          return true;
                      } else {
                          this.rules["Salary"]["required"][1] = "Please enter valid TeamLead Salary";
                      }
                  break;

                  case "Manager":
                      if (args.value > 20000 && args.value < 25000) {
                          return true;
                      } else {
                          this.rules["Salary"]["required"][1] = "Please enter valid Manager Salary";
                      }
                  break;

                  case "Sales":
                      if (args.value > 5000 && args.value < 25000) {
                          return true;
                      } else {
                          this.rules["Salary"]["required"][1] = "Please enter valid Manager Salary";
                      }
                  break;

                  case "Support":
                      if (args.value > 10000 && args.value < 19000) {
                          return true;
                      } else {
                           this.rules["Salary"]["required"][1] = "Please enter valid Manager Salary";
                  }
                  break;
              }
              return false;
          }
    };
  },
  methods: {
      load: function () {
          var column = this.$refs.grid.getColumnByField("Salary");
          column.validationRules = {
              required: [this.customFn, window["Please enter valid salary"]],
          };
      },
      valChange: function (args) {
          window["role"] = args.value;
      }
  },
  provide: {
      grid: [Edit, Toolbar]
  }

});