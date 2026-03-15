<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" height="315" width="auto" :detailTemplate="'detailTemplate'">
      <e-columns>
        <e-column field="FirstName" headerText="First Name" width="140"></e-column>
        <e-column field="LastName" headerText="Last Name" width="140"></e-column>
        <e-column field="Title" headerText="Title" width="150"></e-column>
        <e-column field="Country" headerText="Country" width="150"></e-column>
      </e-columns>
      <template v-slot:detailTemplate="{ data }">
        <table class="detailtable" width="100%">
          <colgroup>
            <col width="35%" />
            <col width="35%" />
            <col width="40%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="rowphoto" rowSpan="4" style="text-align: center">
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
                <span style="font-weight: 500">First Name:</span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500"> Postal Code:</span>
                {{ data.FirstName }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Last Name:</span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500"> City:</span>
                {{ data.FirstName }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Title:</span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500"> Phone:</span>
                {{ data.FirstName }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">City:</span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500"> Country:</span>
                {{ data.FirstName }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, DetailRow } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
provide('grid', [DetailRow]);
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
  padding-left: 18px;
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