<template>
  <div id="app">
    <label>Empty Record Mode :</label>
    <ejs-dropdownlist :dataSource="mode" :fields="dropdownFields" value="Sticky" width="100"
      :change="changeMode"></ejs-dropdownlist>
    <ejs-grid :dataSource="data" :emptyRecordMode="emptyRecordMode" :editSettings="editSettings"
      :toolbar="toolbar">
      <e-columns>
        <e-column field="OrderID" isPrimaryKey="true" headerText="Order ID" textAlign="Right" width="140"
          :validationRules="orderIDRules"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="140"
          :validationRules="customerIDRules"></e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" editType="numericedit" width="140"
          format="C2" :validationRules="freightRules"></e-column>
        <e-column field="OrderDate" headerText="Order Date" editType="datepickeredit" width="160"
          format="ymd"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
        <e-column field="ShipAddress" headerText="Ship Address" width="200"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Toolbar } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-column": ColumnDirective,
    "e-columns": ColumnsDirective,
    "ejs-dropdownlist": DropDownListComponent
  },
  data() {
    return {
      data: [],
      emptyRecordMode: "Sticky",
      mode: [
        { Id: "Sticky", Mode: "Sticky" },
        { Id: "Normal", Mode: "Normal" }
      ],
      dropdownFields: { text: "Mode", value: "Id" },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
      orderIDRules: { required: true, number: true },
      customerIDRules: { required: true },
      freightRules: { required: true }
    };
  },
  methods: {
    changeMode(args) {
      this.emptyRecordMode = args.value;
    }
  },
  provide: {
    grid: [Edit, Toolbar]
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