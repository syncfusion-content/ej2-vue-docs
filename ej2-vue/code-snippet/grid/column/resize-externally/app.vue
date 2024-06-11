<template>
  <div id="app">
      <div style="display: inline-block;">
        <label style='padding:  10px 10px 15px 0'> Change the field:  </label> 
        <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0"
        width="130" :dataSource="ddlData"></ejs-dropdownlist>
      </div>
      <div>
      <label style="padding: 30px 17px 0 0">Enter the width: </label>
      <ejs-textbox ref='textbox' type="textbox" placeholder="Enter new width" width="120"></ejs-textbox>
      <ejs-button ref='button' cssClass='e-outline' v-on:click="onExternalResize">Resize</ejs-button>
      </div> 
      <ejs-grid ref='grid' style="padding: 5px 5px" :dataSource='data' height='315' :allowResizing='true'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='Freight' headerText='Freight' width=80></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Resize } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent  } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-dropdownlist":DropDownListComponent,
"ejs-textbox":TextBoxComponent,
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      ddlData : [
        { text: 'OrderID', value: 'OrderID' },
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'Freight', value: 'Freight' },
        { text: 'ShipCountry', value: 'ShipCountry' },
      ],
    };
  },
  methods: {
    onExternalResize: function() {
      this.$refs.grid.getColumnByField(this.$refs.dropdown.$el.value).width = this.$refs.textbox.$el.value;
      this.$refs.grid.refreshColumns();
    }
  },
  provide: {
      grid: [Resize]
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