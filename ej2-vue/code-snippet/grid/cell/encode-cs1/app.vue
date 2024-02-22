

<template>
    <div id="app">
        <div>
          <label style="padding: 10px 10px">
          Enable or disable HTML Encode
          </label>
          <ejs-switch id="switch" :change="change"></ejs-switch>
        </div>
        <ejs-grid ref='grid' :dataSource="data" height='315' style="padding: 10px 10px">
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='<strong> Customer ID </strong>'  width=100></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=120> </e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
Vue.use(GridPlugin);
Vue.use(SwitchPlugin);

export default {
  data() {
    return {
      data: data
    };
  },
  methods: {
    change: function(args) {
      if(args.checked){
        this.$refs.grid.getColumnByField('CustomerID').disableHtmlEncode = false;
      }
      else{
        this.$refs.grid.getColumnByField('CustomerID').disableHtmlEncode = true;
      }
      this.$refs.grid.refreshColumns()
    }
  },
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


