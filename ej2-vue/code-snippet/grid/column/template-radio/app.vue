<template>
    <div id="app">
      <ejs-grid ref='grid' id='grid' :dataSource='data' height='315px' >
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
          <e-column field='OrderDate' headerText='Order Date' textAlign='Right' type='date' format='yMd' width=120></e-column>    
          <e-column headerText='Order Status' width='150' :template="'radioTemplate'" ></e-column>
        </e-columns>
        <template v-slot:radioTemplate="{ data }">
          <div style="display: flex; flex-direction: column; align-items: start; gap: 10px;">
            <ejs-radiobutton label="Pending" :name="'radio-' + data.OrderID" cssClass="e-warning" :checked="data.OrderStatus === 'Pending'">
            </ejs-radiobutton>
            <ejs-radiobutton label="Confirmed" :name="'radio-' + data.OrderID" cssClass="e-success" :checked="data.OrderStatus === 'Confirmed'">
            </ejs-radiobutton>
            <ejs-radiobutton label="Shipped" :name="'radio-' + data.OrderID" cssClass="e-success" :checked="data.OrderStatus === 'Shipped'">
            </ejs-radiobutton>
          </div>
        </template>
      </ejs-grid>
    </div>
</template>
<script>
  import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
  import { RadioButtonComponent } from "@syncfusion/ej2-vue-buttons";
  import { data } from './datasource.js';
  
  export default {
    name: "App",
    components: {
      "ejs-grid": GridComponent,
      "e-columns": ColumnsDirective,
      "e-column": ColumnDirective,
      "ejs-radiobutton": RadioButtonComponent
    },
    data() {
      return {
        data: data,
      };
    }
  };
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
  