<template>
  <div id="app">
    <ejs-grid ref='grid'  :dataSource="data" height='315px' :enableHover='false'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100 freeze='Left'></e-column>
        <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd' textAlign='Right'></e-column>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=130></e-column>
        <e-column field='ShipAddress' headerText='Ship Address' width=140 freeze='Fixed'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=100 freeze='Right'></e-column>
        <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
        <e-column field='ShipPostalCode' headerText='Ship Postal Code' width=110></e-column>
        <e-column field='Freight' headerText='Freight' width=80></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Freeze} from "@syncfusion/ej2-vue-grids";
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
      data: data
    };
  },

  provide: {
      grid: [Freeze]
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

  .e-grid .e-fixedfreeze.e-freezeleftborder{
    border-left-color: rgb(9, 209, 9) !important; 
  }

  .e-grid .e-fixedfreeze.e-freezerightborder{
    border-right-color: rgb(10, 224, 10) !important;
  }

  .e-grid .e-rightfreeze.e-freezerightborder {
    border-left-color: rgb(19, 228, 243) !important;
  }

  .e-grid .e-leftfreeze.e-freezeleftborder {
    border-right-color: rgb(198, 30, 204) !important;
  }
</style>