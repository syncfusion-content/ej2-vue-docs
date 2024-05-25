<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" height="335" :rowTemplate="'rowTemplate'" width="auto">
      <e-columns>
        <e-column headerText="Employee Image" width="150" textAlign="Center"></e-column>
        <e-column headerText="Employee Details" width="300" textAlign="Center"></e-column>
      </e-columns>
      <template v-slot:rowTemplate="{ data }">
        <tr>
          <td class="rowphoto">
           <img class="photo" :src="'https://ej2.syncfusion.com/vue/demos/source/grid/images/' + data.EmployeeID + '.png'" :alt="data.EmployeeID"/>
          </td>
          <td class="details">
            <table class="CardTable">
              <colgroup>
                <col width="30%" />
                <col width="10%" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="CardHeader">First Name</td>
                  <span>:</span>
                  <td class="CardData">{{ data.FirstName }}</td>
                </tr>
                <tr>
                  <td class="CardHeader">Last Name</td>
                  <span>:</span>
                  <td>{{ data.LastName }}</td>
                </tr>
                <tr>
                  <td class="CardHeader">Title</td>
                  <span>:</span>
                  <td>{{ data.Title }}</td>
                </tr>
                <tr>
                  <td class="CardHeader">Birth Date</td>
                  <span>:</span>
                  <td>{{ format(data.BirthDate) }}</td>
                </tr>
                <tr>
                  <td class="CardHeader">Hire Date</td>
                  <span>:</span>
                  <td>{{ format(data.HireDate) }}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </template>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
import { Internationalization } from "@syncfusion/ej2-base";
let instance = new Internationalization();
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: employeeData,
    };
  },
  methods: {
    format: function (value) {
      return instance.formatDate(value, { skeleton: "yMd", type: "date" });
    },
  },
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
.rowphoto img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 600px) and (min-width: 320px) {
  .rowphoto img {
    width: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 800px) and (min-width: 600px) {
  .rowphoto img {
    width: 70px;
    height: 70px;
  }
}

.rowphoto,
.details {
  border-color: #e0e0e0;
  border-style: solid;
}

.rowphoto {
  border-width: 1px 0px 0px 0px;
  text-align: center;
}

.details {
  border-width: 1px 0px 0px 0px;
  padding-left: 20%;
}

.details > table {
  width: 100%;
}

.CardHeader {
  font-weight: bolder;
}

td {
  padding: 2px 2px 3px 4px;
}
</style>