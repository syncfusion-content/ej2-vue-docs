<template>
    <div id="app">
      <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :cellEdit="cellEdit" height='273px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' :validationRules='orderIDRules' textAlign='Right' isPrimaryKey='true' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
          <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' :validationRules='freightRules' width=120 format= 'C2'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' :validationRules='shipCountryRules' editType= 'dropdownedit' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      data: employeeData,
      orderIDRules : { required: true },
      customerIDRules : { required: true },
      freightRules : { min:1, max:1000 },
      shipCountryRules:{ required: true },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    };
  },
  
  methods: {
    cellEdit: function (args) {
      if (args.value === 'France') {
            args.cancel = true;
        }
    },
    
  },
  provide: {
    grid: [Page, Edit, Toolbar]
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
  </style>