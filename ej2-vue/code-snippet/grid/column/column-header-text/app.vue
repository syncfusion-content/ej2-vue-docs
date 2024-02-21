<template>
  <div id="app">
    <div style="display: inline-block">
      <label style="padding: 30px 20px 0 0"> Select column name :</label>
      <ejs-dropdownlist ref="dropdown"  index="0" width="220" :dataSource="dropdownData"
        :fields="field"></ejs-dropdownlist>
    </div>
    <div style="padding: 30px 17px 0 0">
      <label style="padding: 30px 17px 0 0">Enter new header text :</label>
      <ejs-textbox ref="textbox" required placeholder="Enter new header text" width="220">
      </ejs-textbox>
      <ejs-button style="margin-left: 10px" id="buttons"  v-on:click.native="changeHeaderText" >
        Change
      </ejs-button>
    </div>
    <div style="padding: 20px 17px 0 0">
      <ejs-grid ref="grid" :dataSource="data" allowPaging="true">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="140">
          </e-column>
          <e-column field="Freight" headerText="Freight" format="C" width="120">
          </e-column>
          <e-column field="OrderDate" type="date" headerText="Order Date" format="yMd" width="140"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { TextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";
Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);
Vue.use(TextBoxPlugin);

export default {
  data() {
    return {
      data: data,
      dropdownData: [
        { text: "OrderID", value: "OrderID" },
        { text: "CustomerID", value: "CustomerID" },
        { text: "Freight", value: "Freight" },
        { text: "OrderDate", value: "OrderDate" },
      ],
      field: { text: "text", value: "value" },
    };
  },
  methods: {
    changeHeaderText: function () {
      if (this.$refs.textbox.$el.value !== "") {
        const column = this.$refs.grid.getColumnByField(
          this.$refs.dropdown.$el.value
        );
        column.headerText = this.$refs.textbox.$el.value;
        this.$refs.grid.refreshHeader();
      }
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