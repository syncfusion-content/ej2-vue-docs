<template>
  <div id="app">
    <div>
      <label style="padding: 30px 17px 0 0">Enter the start row index: </label>
      <ejs-textbox ref="textbox" required  width="120"></ejs-textbox>
    </div>
    <div style="padding-top: 10px">
      <label style="padding: 30px 17px 0 0">Enter the end row index: </label>
      <ejs-textbox ref="textbox1" required width="120"></ejs-textbox>
    </div>
    <div style="padding: 10px 0 0px 180px">
      <ejs-button id="button" @click="onClick">Select rows</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
           <e-column field="Freight" headerText="Freight" format="C2" width="100"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-textbox":TextboxComponent,
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      selectionOptions:{ type: 'Multiple', mode: 'Row' },
      pageOptions : { pageSize: 5 }
    };
  },
   methods: {
    onClick: function () {
        this.startIndex = parseInt(this.$refs.textbox.$el.value, 10); 
        this.endIndex = parseInt(this.$refs.textbox1.$el.value, 10); 
        this.$refs.grid.clearRowSelection();
        if (!isNaN(this.startIndex) && !isNaN(this.endIndex)) {
          this.$refs.grid.$el.ej2_instances[0].selectionModule.selectRowsByRange(this.startIndex, this.endIndex);
        }
     }
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