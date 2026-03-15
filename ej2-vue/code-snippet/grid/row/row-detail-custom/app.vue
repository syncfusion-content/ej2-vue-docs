<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='employeeDataParent' height='315' width='auto' :detailDataBound='detailDataBound' :detailTemplate="'detailTemplate'">
      <e-columns>
        <e-column field='FirstName' headerText='First Name' width='140'></e-column>
        <e-column field='LastName' headerText='Last Name' width='140'></e-column>
        <e-column field='Title' headerText='Title' width='150'></e-column>
        <e-column field='Country' headerText='Country' width='150'></e-column>
      </e-columns>
        <template v-slot:detailTemplate>
          <div class = 'custom-grid' ></div>
        </template>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective,DetailRow,Grid } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
},
  data() {
    return {
     employeeDataParent : employeeData
    };
  },
  methods: {
    detailDataBound: function (args) {
              let detail = new Grid({
            dataSource: data.filter((item) => item['EmployeeID'] === args.data['EmployeeID']),
            columns: [
                { field: 'OrderID', headerText: 'Order ID', width: 110 },
                { field: 'CustomerID', headerText: 'Customer Name', width: 140 },
                { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
            ]
        });
        detail.appendTo(args.detailElement.querySelector('.custom-grid'));
    }
  },
  provide: { grid: [DetailRow] }
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
</style>