<template>
  <div id="app">
    <div style="padding: 0px 0px 20px 0px">
      <ejs-button class="btn" @click.native="buttonClick(1, 3)">
      Select [1, 3]</ejs-button>
      <ejs-button class="btn" @click.native="buttonClick(2, 2)">
      Select [2, 2]</ejs-button>
      <ejs-button class="btn" @click.native="buttonClick(0, 0)">
      Select [0, 0]</ejs-button>
    </div>
    <div style="padding: 0px 0px 20px 0px">
      <ejs-button class="btn" @click.native="buttonClick(4, 2)">
      Select [4, 2]</ejs-button>
      <ejs-button class="btn" @click.native="buttonClick(5, 1)">
      Select [5, 1]</ejs-button>
      <ejs-button class="btn" @click.native="buttonClick(3, 3)">
      Select [3, 3]</ejs-button>
    </div>
    <div style="padding: 0px 0px 20px 0px">
      <ejs-button class="btn" @click.native="buttonClick(0, 3)">
      Select [0, 3]</ejs-button>
      <ejs-button class="btn" @click.native="buttonClick(8, 1)">
      Select [8, 1]</ejs-button>
      <ejs-button class="btn" @click.native="buttonClick(8, 2)">
      Select [8, 2]</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
          width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120">
          </e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130">
          </e-column>
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
import { data } from './datasource.js';
Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      data: data,
      selectionOptions :{ type: 'Multiple', mode: 'Cell' },
    };
  },
 methods: {
    buttonClick: function (rowIndex, columnIndex) {
        this.$refs.grid.selectCells([{ rowIndex: rowIndex, cellIndexes: [columnIndex] }]);
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
