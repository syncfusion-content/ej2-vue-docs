<template>
  <div id="app">
    <div id='show' style="padding:0px 0px 20px 0px;" ></div>
      <ejs-grid ref="grid" :dataSource='data' :rowDataBound='rowDataBound'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
          <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
          <e-column field='OrderDate' type="Date" headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
        </e-columns>
      </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
    };
  },
  methods: {
    rowDataBound: function (args) {
      args.row.addEventListener("mouseover", (e) => {
        const rowInformation = this.$refs.grid.ej2Instances.getRowInfo(e.target);
        document.getElementById("show").innerHTML = `
        <table style="border-collapse: collapse; width: 600px;">
          <tr style="border: 2px solid;">
            <td style="padding: 2px;"><b>Row Information:</b></td>
          </tr>
          <tr style="border: 2px solid; padding: 8px;">
            <th style="border: 2px solid; padding: 8px; width: 120px;"><b>Class Name</b>
            </th>
            <td style="border: 2px solid; padding: 8px;">${rowInformation.row.className}
            </td>
          </tr>
          <tr style="border: 2px solid;">
            <th style="border: 2px solid; padding: 8px;"><b>Row Index</b>
            </th>
            <td style="border: 2px solid; padding: 8px;">${rowInformation.rowIndex}
          </td>
          </tr>
         </table>`;
      });
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
</style>