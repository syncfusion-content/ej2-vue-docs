<template>
  <div id="app">
    <ejs-grid :dataSource='data' :toolbar='toolbar' :editSettings='editSettings' :selectionSettings="selectOptions"  >
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules' width=100>
        </e-column>
        <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2' :validationRules='freightIDRules'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' :validationRules="shipCountryRules" width=150></e-column>
        </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import {GridComponent,ColumnsDirective,ColumnDirective,Edit,Toolbar,Page } from "@syncfusion/ej2-vue-grids";
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
     data : employeeData,
     editSettings :{
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal',
    },
    orderIDRules : { required: true },
    customerIDRules : { required: true, minLength: 5 },
    freightIDRules:{required: true, min: 1, max:1000 },
    shipCountryRules : { required: true },
  
    toolbar : ['Delete'],
    selectOptions : { type: 'Multiple' }
    };
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
  #edit,#add,#delete,#updaterow,#updatecell{
    margin-left: 10px
  }
</style>