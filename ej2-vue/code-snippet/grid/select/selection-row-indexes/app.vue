<template>
  <div id="app">
    <div style="padding: 10px 0px 20px 0px">
      <ejs-button class="btn" @click="onClick">Get selected row indexes</ejs-button >
    </div>
    <p  id="message">{{showMessage}}</p>
    <ejs-grid ref="grid" :dataSource="data" height="315px" :selectionSettings="selectionOptions">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
        <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      showMessage: "",
      selectedRowIndexes: [],
      selectionOptions: { type: "Multiple" },
    };
  },
  methods: {
    onClick: function () {
      this.selectedRowIndexes = this.$refs.grid.ej2Instances.getSelectedRowIndexes();
      if (this.selectedRowIndexes.length > 0)
        this.showMessage ="Selected row indexes:" + this.selectedRowIndexes.join(", ");
    },
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
#message {
  color: red;
  text-align: center;
  padding: 0px 0px 10px 0px;
}
</style>