<template>
  <div id="app">
    <div>
      <ejs-textbox ref="textbox" placeholder="Enter the row Index" width="250px" floatLabelType="Auto"></ejs-textbox>
      <ejs-button style="margin: 20px 0px 0 10px" v-on:click="clickHandler">Expand</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" height="315" width="auto" :detailTemplate="'detailTemplate'" >
        <e-columns>
          <e-column field="FirstName" headerText="First Name" width="140"></e-column>
          <e-column field="LastName" headerText="Last Name" width="140"></e-column>
          <e-column field="Title" headerText="Title" width="150"></e-column>
          <e-column field="Country" headerText="Country" width="150"></e-column>
        </e-columns>
        <template v-slot:detailTemplate="{ data }">
          <table class="CardTable" cellpadding="3" cellspacing="2">
            <colgroup>
              <col width="35%" />
              <col width="35%" />
              <col width="40%" />
            </colgroup>
            <tbody>
              <tr>
                <td class="rowphoto" rowspan="4" style="text-align: center">
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
                  <span style="font-weight: 500">Postal Code:</span>
                  {{ data.PostalCode }}
                </td>
              </tr>
              <tr>
                <td>
                  <span style="font-weight: 500">Last Name:</span>
                  {{ data.LastName }}
                </td>
                <td>
                  <span style="font-weight: 500">City:</span>
                  {{ data.City }}
                </td>
              </tr>
              <tr>
                <td>
                  <span style="font-weight: 500">Title:</span>
                  {{ data.Title }}
                </td>
                <td>
                  <span style="font-weight: 500">Phone:</span>
                  {{ data.Phone }}
                </td>
              </tr>
              <tr>
                <td>
                  <span style="font-weight: 500">City:</span>
                  {{ data.City }}
                </td>
                <td>
                  <span style="font-weight: 500">Country:</span>
                  {{ data.Country }}
                </td>
              </tr>
            </tbody>
          </table>
        </template>
      </ejs-grid>
    </div>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, DetailRow } from "@syncfusion/ej2-vue-grids";
import { TextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { employeeData } from "./datasource.js";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
export default {
name: "App",
components: {
"ejs-textbox":TextBoxComponent,
"ejs-button":ButtonComponent,
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
    clickHandler: function () {
      this.$refs.grid.ej2Instance.detailRowModule.expand(
        this.$refs.textbox.$el.value
      );
    },
  },
  provide: {
    grid: [DetailRow],
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