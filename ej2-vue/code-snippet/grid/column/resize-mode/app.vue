<template>
    <div id="app">
        <div style="display: inline-block;">
          <label style="padding:  10px 10px 15px 0"> Change the resize mode: </label> 
          <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0"
          width="100" :dataSource="ddlData" :change="change" 
          ></ejs-dropdownlist>
        </div>
        <ejs-grid ref='grid' style="padding: 5px 5px" :dataSource='data' height='315' :allowResizing='true'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='Freight' headerText='Freight' width=80></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Resize } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent  } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-dropdownlist":DropDownListComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      ddlData : [
        { text: 'Normal', value: 'Normal' },
        { text: 'Auto', value: 'Auto' },
      ],
    };
  },
  methods: {
    change: function(args) {
      this.$refs.grid.ej2Instances.resizeSettings = {mode: args.value}
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