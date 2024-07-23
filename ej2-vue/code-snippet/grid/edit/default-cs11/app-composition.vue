<template>
  <div id="app">
    <ejs-grid ref="grid"  :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px' :actionComplete="actionComplete">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='140' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='140' :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules' ></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150' :validationRules='shipCountryRules' editType='dropdownedit' ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide,ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid=ref(null);
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const orderIDRules = { required: true, number: true };
const shipCountryRules = { required: true };
const freightRules = { required: true };
const customerIDRules = { required: true };
    const actionComplete = (args) => {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
          const dialogInstance = args.dialog;
          dialogInstance.buttons = [
            {
              buttonModel: { content: 'Discard', cssClass: 'e-primary custom-button-style' },
              click: () => {
                grid.value.ej2Instances.editModule.closeEdit();
              }
            },
            {
              buttonModel: { content: 'Submit', cssClass: 'e-success custom-button-style' },
              click: () => {
                grid.value.ej2Instances.editModule.endEdit();
              }
            }
          ];
        }
    }

  provide('grid',  [Edit, Toolbar]);
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
.e-footer-content .e-btn.e-primary.custom-button-style {
   border-radius: 4px; 
   font-size: 15px;
  }
.e-footer-content .e-btn.e-success.custom-button-style {
   border-radius: 4px; 
   font-size: 15px;
   background: #cbf4cb;
  }
  </style>