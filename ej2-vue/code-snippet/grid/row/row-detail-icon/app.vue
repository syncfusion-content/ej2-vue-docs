<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' id='Grid' :detailTemplate="'detailTemplate'">
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' width='125' textAlign='Right'></e-column>
        <e-column field='FirstName' headerText='Name' width='120'></e-column>
        <e-column field='Title' headerText='Title' width='170'></e-column>
        <e-column field='HireDate' headerText='Hire Date' width='135' textAlign='Right' format='yMd'></e-column>
        <e-column field='ReportsTo' headerText='Reports To' width='120' textAlign='Right'></e-column>
      </e-columns>
      <template v-slot:detailTemplate="{ data }">
        <table class="detailtable" width="100%">
          <colgroup>
            <col width="35%" />
            <col width="35%" />
            <col width="30%" />
          </colgroup>
          <tbody>
            <tr>
              <td rowspan="4" style="text-align: center">
                <img
                  class="photo"
                  :src="
                    'https://ej2.syncfusion.com/vue/demos/source/grid/images/' +
                    data.EmployeeID +
                    '.png'
                  "
                  :alt="data.EmployeeID"
                />
              </td>
              <td>
                <span style="font-weight: 500">First Name: </span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500">Postal Code: </span>
                {{ data.PostalCode }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Last Name: </span>
                {{ data.LastName }}
              </td>
              <td>
                <span style="font-weight: 500">City: </span> {{ data.City }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Title: </span> {{ data.Title }}
              </td>
              <td>
                <span style="font-weight: 500">Phone: </span>
                {{ data.HomePhone }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Address: </span>
                {{ data.Address }}
              </td>
              <td>
                <span style="font-weight: 500">HireDate: </span>
                {{ format(data.HireDate) }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, DetailRow } from "@syncfusion/ej2-vue-grids";
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
  provide: {
    grid: [DetailRow],
  },
};
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
.detailtable td {
  font-size: 13px;
  padding: 4px;
  max-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: normal;
}

.photo {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 800px) and (min-width: 320px) {
  .photo {
    width: 70px;
    height: 70px;
  }
}
  .e-grid .e-icon-grightarrow::before {
      content: "\e7a9";
  }
  .e-grid .e-icon-gdownarrow::before {
      content: "\e7fe";
  }
</style>