<template>
  <div id="app">
    <div style="display: inline-block">
      <label style="padding: 30px 17px 0 0;font-weight: bold"> Select new row position:</label>
      <ejs-dropdownlist  index="0" width="150" :dataSource="positionData" :change="changePosition">
      </ejs-dropdownlist>
    </div>
    <div style="padding-top:20px">
      <ejs-grid ref="batchgrid" :dataSource='data' allowPaging='true' :editSettings="editSettings" :pageSettings='pageSettings' :toolbar='toolbar' >
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width='120' :validationRules='customerIDRules'></e-column>
          <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
          <e-column field='OrderDate' headerText='Order Date' width='130' format='yMd' type="date" editType='datepickeredit' textAlign='Right' :validationRules="orderDateRules"></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' :validationRules="shipCountryRules" width='150' editType='dropdownedit' :edit='editparams'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script>
import { GridComponent,ColumnsDirective,ColumnDirective,Edit,Toolbar,Page } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";

import { employeeData } from "./datasource.js";
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-dropdownlist": DropDownListComponent,
  },
  data() {
    return {
      data: employeeData,
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
      },
      toolbar: ["Add", "Delete", "Update", "Cancel"],
      orderIDRules: { required: true, number: true },
      customerIDRules: { required: true },
      freightRules: { required: true },
      shipCountryRules: { required: true },
      orderDateRules: { required: true },
      editparams: { params: { popupHeight: "300px" } },
      pageSettings: { pageCount: 5 },
      positionData: [
        { text: "Top", value: "Top" },
        { text: "Bottom", value: "Bottom" },
      ],
    };
  },
  methods: {
    changePosition: function (args) {
      this.$refs.batchgrid.$el.ej2_instances[0].editSettings.newRowPosition =args.value;
    },
  },
  provide: {
    grid: [Page, Edit, Toolbar],
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