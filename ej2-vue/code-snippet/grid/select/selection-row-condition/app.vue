<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :selectionSettings="selectionOptions" :rowDataBound="rowDataBound" :dataBound="dataBound"
      height="273px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" isPrimaryKey="true" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="EmployeeID" headerText="Employee ID" textAlign="Right" width="120"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="120"></e-column>
        <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective,Page } from "@syncfusion/ej2-vue-grids";
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
      selectionOptions: { type: "Multiple", mode: "Row" },
      pageOptions: { pageSize: 5 },
      selIndex: [],
    };
  },
  methods: {
    rowDataBound: function (args) {
      if (args.data.CustomerID > 3) {
        this.selIndex.push(
          parseInt(args.row.getAttribute("data-rowindex"), 10)
        );
      }
    },
    dataBound: function () {
      if (this.selIndex.length) {
        this.$refs.grid.ej2Instances.selectRows(this.selIndex);
        this.selIndex = [];
      }
    },
  },

  provide:{
    grid:[Page]
  }
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