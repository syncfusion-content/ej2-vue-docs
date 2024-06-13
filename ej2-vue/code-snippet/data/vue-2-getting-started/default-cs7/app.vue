<template>
  <div id="app">
    <ejs-grid :dataSource="data">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='Freight' headerText='Freight' format='C2'  width=90></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import Vue from 'vue';
import { GridPlugin } from '@syncfusion/ej2-vue-grids';
import { DataManager } from '@syncfusion/ej2-data';

Vue.use(GridPlugin);

export default {
  data() {
    const SERVICE_URI = 'https://services.syncfusion.com/vue/production/';
    return {
      data: new DataManager({ url: SERVICE_URI+ 'api/Orders' })
    };
  },   
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
