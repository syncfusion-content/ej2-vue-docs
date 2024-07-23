<template>
  <div id="app">
    <div>
      <ejs-button id="small" cssClass="e-small" v-on:click="clickHandler">
      Change height 20px</ejs-button>
      <ejs-button id="medium" cssClass="e-small" v-on:click="clickHandler">
      Default height 42px</ejs-button>
      <ejs-button  id="big" cssClass="e-small" v-on:click="clickHandler">
      Change height 60px</ejs-button>
    </div>
    <div style="padding-top:20px">
      <ejs-grid ref="grid" :dataSource='data' :rowHeight='42' height='400' >
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'>
          </e-column>
          <e-column field='CustomerID' headerText='Customer Name' width='150'>
          </e-column>
          <e-column field='OrderDate' type="Date" headerText='Order Date' width='130' format="yMd" 
          textAlign='Right'> </e-column>
          <e-column field='Freight' headerText='Freight' width='120' format='C2'
          textAlign='Right'></e-column>
          <e-column field='ShippedDate' type="Date" headerText='Shipped Date' width='140' format='yMd' 
          textAlign='Right'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column> 
        </e-columns>
      </ejs-grid>
      </div>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
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
    clickHandler: function (args) {
      const heightRow = {
        small: 20,
        medium: 40,
        big: 60,
      };
      this.$refs.grid.ej2Instances.rowHeight = heightRow[args.target.id];
    },
  },
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