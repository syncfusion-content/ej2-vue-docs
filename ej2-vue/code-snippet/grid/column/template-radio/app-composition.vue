<template>
    <div id="app">
      <ejs-grid ref='grid' id='grid' :dataSource='datasource' height='315px' >
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
<script setup>
import { ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { RadioButtonComponent as EjsRadiobutton } from "@syncfusion/ej2-vue-buttons";

const datasource = ref(data);
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