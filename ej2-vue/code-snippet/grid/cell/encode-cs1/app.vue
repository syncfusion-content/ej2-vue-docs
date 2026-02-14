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

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

export default {
name: "App",
components: {
"ejs-switch":SwitchComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
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