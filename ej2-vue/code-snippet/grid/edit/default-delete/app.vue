


<template>
  <div id="app"> 
    <div style="padding: 20px;display:inline-flex">
      <label style="padding-right: 10px;font-weight: bold;">Enable/Disable show delete confirmation dialog</label>
      <ejs-switch id="switch1" :change="toggleShowDeleteConfirmDialog"></ejs-switch>
    </div>
    <ejs-grid ref="grid" :dataSource="data" allowPaging=true :editSettings="editSettings" :toolbar="toolbar" >
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" :validationRules="orderIDRules"
        isPrimaryKey="true" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" :validationRules="customerIDRules" width="120"></e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" editType="numericedit" width="120" format="C2"
        :validationRules="freightRules"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" editType="dropdownedit" :validationRules="shipCountryRules" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import {GridComponent,ColumnsDirective,ColumnDirective,Edit,Toolbar,Page } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { employeeData } from "./datasource.js";
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-switch": SwitchComponent
  },
  data() {
    return {
     data : employeeData,
     editSettings :{
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal'
    },
    orderIDRules : { required: true, number: true },
    shipCountryRules : { required: true },
    customerIDRules : { required: true },
    freightRules : { min: 1, max: 1000 },
    toolbar: ['Add', 'Delete', 'Update', 'Cancel']
    };
  },
   methods: {
    toggleShowDeleteConfirmDialog: function (args) {
      this.$refs.grid.$el.ej2_instances[0].editSettings.showDeleteConfirmDialog = args.checked;    
    }
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }
}
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