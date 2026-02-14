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
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { employeeData } from "./datasource.js";
const grid = ref(null);
const data= employeeData;
const editSettings= {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
      };
const selectOptions= { type: 'Multiple' };
const orderIDRules= { required: true };
const customerIDRules= { required: true, minLength: 5 };
const shipCountryRules = { required: true };
const freightIDRules= { required: true, min: 1, max: 1000 }
const clickDelete= function () {
      const gridInstance =grid.value.ej2Instances;
      const selectedRecords = gridInstance.getSelectedRecords();
      selectedRecords.forEach(record => {
        gridInstance.deleteRecord('OrderID', record);
      });
    }
provide('grid', [Edit, Toolbar],);
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