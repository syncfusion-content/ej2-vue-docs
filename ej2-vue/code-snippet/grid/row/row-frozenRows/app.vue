<template>
  <div id="app">
    <div style="display: inline-block; padding: 0px 0 20px 0">
    <label style="padding: 27px 17px 0 0;"> Change the frozen rows: </label>
    <ejs-numerictextbox ref="frozen" min="0"  max="5" :validateDecimalOnType="true" decimals="0" format="n" value="2" width="100px"></ejs-numerictextbox>
    <ejs-button style="margin-left:10px" v-on:click="frozenRowsFn">Update</ejs-button>
  </div>
  <ejs-grid ref="grid" style="padding: 5px 5px" :dataSource='data' height=315 :frozenRows=2 :allowSelection='false'  :enableHover='false'>
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
      <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd' textAlign='Right'></e-column>
      <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
      <e-column field='ShipName' headerText='Ship Name' width=130></e-column>
      <e-column field='ShipAddress' headerText='Ship Address' width=140></e-column>
      <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
      <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
      <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
      <e-column field='ShipPostalCode' headerText='Ship Postal Code' width=110></e-column>
      <e-column field='Freight' headerText='Freight' width=80></e-column>
    </e-columns>
  </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Freeze } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-numerictextbox":NumericTextBoxComponent,
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
    };
  },
  methods: {
    frozenRowsFn: function () {
      this.$refs.grid.frozenRows = parseInt(this.$refs.frozen.$el.value);
    },
  },
  provide: { grid: [Freeze] },
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