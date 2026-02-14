<template>
  <div id="app">
      <div>
        <label style="padding: 30px 40px 0 0">Enter the start row index: </label>
        <ejs-textbox ref="textbox" required width="120"></ejs-textbox>
      </div>
      <div style="padding-top: 10px">
        <label style="padding: 30px 17px 0px 0px">Enter the start column index: </label>
        <ejs-textbox ref="textbox1" required width="120"></ejs-textbox>
      </div>
      <div style="padding-top: 10px">
        <label style="padding: 30px 40px 0 0">Enter the end row index: </label>
        <ejs-textbox ref="textbox2" required width="120"></ejs-textbox>
      </div>  
      <div style="padding-top: 10px">
        <label style="padding: 30px 19px 0 0px">Enter the end column index: </label>
        <ejs-textbox ref="textbox3" required width="120"></ejs-textbox>
        <ejs-button id="button" @click="onClick">Select range of Cell</ejs-button >
      </div>
      <div style="padding: 20px 0px 0px 0px">
        <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
            width="120"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
            <e-column field="Freight" headerText="Freight" format="C2" width="100">
            </e-column>
          </e-columns>
        </ejs-grid>
      </div>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { TextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-textbox":TextBoxComponent,
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      selectionOptions: { type: "Multiple", mode: "Cell" }
    };
  },
  methods: {
    onClick: function () {
      let startRowIndex = parseInt(this.$refs.textbox.ej2Instances.value, 10);
      let startColumnIndex = parseInt(this.$refs.textbox1.ej2Instances.value, 10);
      let endRowIndex = parseInt(this.$refs.textbox2.ej2Instances.value, 10);
      let endColumnIndex = parseInt(this.$refs.textbox3.ej2Instances.value, 10);
      this.$refs.grid.ej2Instances.clearCellSelection();
      if (!isNaN(startRowIndex) &&!isNaN(startColumnIndex) &&!isNaN(endRowIndex) && !isNaN(endColumnIndex))
        this.$refs.grid.ej2Instances.selectCellsByRange(
          { rowIndex: startRowIndex, cellIndex: startColumnIndex },
          { rowIndex: endRowIndex, cellIndex: endColumnIndex }
        );
    },
  },
};
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