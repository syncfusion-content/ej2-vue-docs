<template>
    <div id="app">
        <ejs-grid :dataSource='orderDetails' :editSettings='editOptions' :toolbar='toolbarItems'  height='315'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right'  :validationRules='orderidrules' :isPrimaryKey='true' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer Name' width=120 foreignKeyValue='ContactName' foreignKeyField="CustomerID" :dataSource='customerData' :validationRules='orderidrules'></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width=80 format='C2'></e-column>
                <e-column field='EmployeeID' headerText='Ship City' width=120 foreignKeyValue='City' foreignKeyField="EmployeeID" :dataSource='employeeData' :validationRules='orderidrules'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=130></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Toolbar, ForeignKey } from "@syncfusion/ej2-vue-grids";
import { orderDetails, customerData, employeeData } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      orderDetails: orderDetails,
      customerData: customerData,
      employeeData: employeeData,
      toolbarItems: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      editOptions: { allowEditing: true, allowAdding: true, allowDeleting: true },
      orderidrules: { required: true },
    };
  },
  provide: {
      grid: [Edit, Toolbar, ForeignKey]
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