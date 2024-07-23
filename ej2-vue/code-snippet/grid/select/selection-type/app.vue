<template>
  <div id="app">
    <div style="display: inline-block">
      <label style="padding: 30px 17px 0 0">Choose selection type:</label>
      <ejs-dropdownlist index="0" width="150" :dataSource="dropdownData" :change="valueChange">
      </ejs-dropdownlist>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" height="315px">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
          <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
          <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-dropdownlist":DropDownListComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
},
  data() {
    return {
      data: data,
      dropdownData: [
        { text: "Single", value: "Single" },
        { text: "Multiple", value: "Multiple" },
      ],
    };
  },
  methods: {
    valueChange: function (args) {
      this.$refs.grid.ej2Instances.selectionSettings.type = args.value;
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