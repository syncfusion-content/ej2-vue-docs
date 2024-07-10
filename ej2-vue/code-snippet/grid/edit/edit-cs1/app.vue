<template>
    <div id="app">
      <ejs-grid :dataSource='data' :editSettings='editSettings' height='315px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
          <e-column field='Freight' headerText='Freight' :validationRules='freightRules' editType= 'numericedit' textAlign='Right' width=120 format= 'C2'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      orderIDRules: { required: true, number: true },
      customerIDRules: { required: true },
      freightRules: { required: true, min: 1, max: 1000 },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true }
    };
  },
  provide: {
    grid: [Edit]
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