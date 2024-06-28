<template>
  <div id="grid">
      <ejs-grid ref="grid" :dataSource="ds">
          <e-columns>
              <e-column field="OrderID" headerText="Order ID" width=120 textAlign="Right" />
              <e-column field="CustomerName" headerText="Customer Name" width=150 />
              <e-column field="ShipCountry" headerText="Ship Country" width=150 :template='cTemplate' />
          </e-columns>
      </ejs-grid>
  </div>
</template>

<script setup>
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-grids';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { createApp } from "vue";

const app = createApp();

const inlineTemplate = app.component('inlineTemplate', {
  components: {
      'ejs-button': ButtonComponent
  },
  data: () => ({}),
  template: '<ejs-button :content="`${data.ShipCountry}`"></ejs-button>'
});

const cTemplate = () => {
  return { template: inlineTemplate };
}

const ds = [
  { OrderID: 10248, ShipCountry: "France", CustomerName: "Paul Henriot" },
  { OrderID: 10249, ShipCountry: "Germany", CustomerName: "Karin Josephs" },
  { OrderID: 10250, ShipCountry: "Brazil", CustomerName: "Mario Pontes" },
  { OrderID: 10251, ShipCountry: "France", CustomerName: "Mary Saveley" }
];

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
