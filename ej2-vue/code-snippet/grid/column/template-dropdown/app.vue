

<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='315px' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                <e-column headerText='Order Status' :template="'dropdownTemplate'" width=200></e-column>
            </e-columns>
            <template v-slot:dropdownTemplate="{data}">
              <div><ejs-dropdownlist id='dropdownlist' :dataSource='dropData' :value='data.OrderStatus' :popupHeight='250' :popupWidth='150' width="150"> </ejs-dropdownlist></div>
            </template>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

export default {
  data() {
    return {
      data: data,
      dropData: ['Order Placed', 'Processing', 'Delivered'],
    };
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


