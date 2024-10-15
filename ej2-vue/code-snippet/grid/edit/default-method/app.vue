<template>
  <div id="app">
    <ejs-button id='delete' @click.native='clickDelete'>Delete Multiple</ejs-button>
    <div class="control-section" style="padding-top:20px">
      <ejs-grid ref="grid" :dataSource='data' :editSettings='editSettings' :selectionSettings="selectOptions">
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules' width=100>
          </e-column>
          <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
          <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width=120 
          format='C2' :validationRules='freightIDRules'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' :validationRules="shipCountryRules" editType='dropdownedit' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script>
import {GridComponent,ColumnsDirective,ColumnDirective,Edit,Toolbar,Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { employeeData } from "./datasource.js";
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-button": ButtonComponent
  },
  data() {
    return {
      data: employeeData,
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
      },
      selectOptions: { type: 'Multiple' },
      orderIDRules: { required: true },
      customerIDRules: { required: true, minLength: 5 },
      shipCountryRules : { required: true },
      freightIDRules: { required: true, min: 1, max: 1000 }
    };
  },
  methods: {
    clickDelete: function () {
      const gridInstance = this.$refs.grid.$el.ej2_instances['0'];
      const selectedRecords = gridInstance.getSelectedRecords();
      selectedRecords.forEach(record => {
        gridInstance.deleteRecord('OrderID', record);
      });
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