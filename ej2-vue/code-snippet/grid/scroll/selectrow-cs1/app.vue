

<template>
    <div id="app">
    <ejs-numerictextbox ref='numeric' format='N' min='0' placeholder='Enter index to select a row' width=200 :showSpinButton='false' :change='onchange'></ejs-numerictextbox>
        <ejs-grid ref='grid' :dataSource='data' height='280' width='100%' :rowSelected='rowSelected'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(NumericTextBoxPlugin);

export default {
  data() {
    return {
      data: data
    };
  },
  methods: {
    onchange: function(){
      this.$refs.grid.selectRow(parseInt(this.$refs.numeric.getText(), 10));
    }
    rowSelected: function (args) {
        let rowHeight = this.$refs.grid.getRows()[this.$refs.grid.getSelectedRowIndexes()[0]].scrollHeight;
        this.$refs.grid.getContent().children[0].scrollTop = rowHeight * this.$refs.grid.getSelectedRowIndexes()[0];
    }
  }
}
</script>
<style>
  @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


