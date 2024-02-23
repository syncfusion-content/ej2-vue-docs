<template>
  <div id="app">
    <div>
      <label style="padding: 30px 17px 0 0">Enter the row index: </label>
      <ejs-textbox ref="textbox" required width="120"></ejs-textbox>
    </div>
    <div style="padding-top: 10px ">
      <label style="padding: 30px 17px 0 0">Enter the cell index: </label>
      <ejs-textbox ref="textbox1" required width="120"></ejs-textbox>
      <ejs-button @click.native="onClick">Select Cell</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120">
          </e-column>
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
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';
Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(TextBoxPlugin);

export default {
  data() {
    return {
      data: data,
      selectionOptions :{ mode: 'Cell', type: 'Single' },
    };
  },
 methods: {
    onClick: function () {
        this.rowIndex = parseInt(this.$refs.textbox.$el.value, 10);
        this.cellIndex = parseInt(this.$refs.textbox1.$el.value, 10);
        if (!isNaN(this.rowIndex) && !isNaN(this.cellIndex))
           this.$refs.grid.$el.ej2_instances[0].selectCell({ rowIndex: this.rowIndex, cellIndex: this.cellIndex });
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
