<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :enableHover="false" :allowSelection="false" :height="315" :rowDataBound="rowDataBound">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="80"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="130"></e-column>
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
      if (args.data["Freight"] < 30) {
        args.row.classList.add("below-30");
      } else if (args.data["Freight"] >= 30 && args.data["Freight"] < 80) {
        args.row.classList.add("below-80");
      } else {
        args.row.classList.add("above-80");
      }
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
.below-30 {
  background-color: rgb(211, 225, 248);
}
.below-80 {
  background-color: rgb(163, 236, 217);
}
.above-80 {
  background-color: rgb(220, 248, 177);
}
</style>