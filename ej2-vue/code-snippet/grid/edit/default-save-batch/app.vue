<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :pageSettings="pageSettings" :editSettings="editSettings" :toolbar="toolbar" :cellSaved="save">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="140" textAlign="Right" isPrimaryKey="true" :validationRules="orderIDRules"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="140" :validationRules="customerIDRules"></e-column>
        <e-column field="Freight" headerText="Freight" width="140" format="C2" textAlign="Right" editType="numericedit" :validationRules="freightRules"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="140" editType="datetimepickeredit" :format="formatoptions" textAlign="Right" :validationRules="orderDateRules"></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' :edit='editparams' :validationRules="shipCountryRules"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import {GridComponent,ColumnsDirective,ColumnDirective,Toolbar,Edit,Page} from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
  },
  data() {
    return {
      data: employeeData,
      orderIDRules: { required: true },
      orderDateRules: { required: true },
      shipCountryRules: { required: true },
      customerIDRules: { required: true },
      freightRules: { min: 1, max: 1000 },
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: "Batch",
      },
      toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
      editparams: { params: { popupHeight: "300px" } },
      pageSettings: { pageCount: 5 },
      formatoptions: { type: "dateTime", format: "M/d/y hh:mm a" },
    };
  },

  methods: {
    save: function () {
      this.$refs.grid.$el.ej2_instances[0].editModule.batchSave();
    },
  },
  provide: {
    grid: [Page, Edit, Toolbar],
  },
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