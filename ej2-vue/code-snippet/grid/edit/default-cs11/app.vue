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
<script>
import { GridComponent, ColumnsDirective, ColumnDirective,Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
},
  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderIDRules : { required: true, number: true },
      customerIDRules : { required: true },
      freightRules : { required: true },
      shipCountryRules : { required: true },
    };
  },
  methods: {
    actionComplete(args) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
          const dialogInstance = args.dialog;
          dialogInstance.buttons = [
            {
              buttonModel: { content: 'Discard', cssClass: 'e-primary custom-button-style' },
              click: () => {
                this.$refs.grid.ej2Instances.editModule.closeEdit();
              }
            },
            {
              buttonModel: { content: 'Submit', cssClass: 'e-success custom-button-style' },
              click: () => {
                this.$refs.grid.ej2Instances.editModule.endEdit();
              }
            }
          ];
        }
    }
  },
  provide: {
    grid: [Edit, Toolbar]
  }
}
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