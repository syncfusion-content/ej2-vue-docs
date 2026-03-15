<template>
    <div id="app">
      <div style="display: flex;">
        <label style="margin-right:5px">
        Enable or disable toolbar items
        </label>
        <ejs-switch id="switch" :change="onSwitchChange"></ejs-switch>
      </div>
      <ejs-grid id='Grid' ref='grid' style="margin-top: 10px" :dataSource='data' height='200px' :allowGrouping='true' :groupSettings='groupOptions' :toolbar='toolbar' :toolbarClick='clickHandler'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Group } from "@syncfusion/ej2-vue-grids";
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
      data: data,
      toolbar: ['Expand', 'Collapse'],
      groupOptions: { columns: ['CustomerID'] }
    };
  },
  methods: {
      clickHandler: function(args) {
        if (args.item.id === 'Grid_Collapse') { // Grid_Collapse is control id + '_' + toolbar value.
            this.$refs.grid.ej2Instances.groupModule.collapseAll();
        }

        if (args.item.id === "Grid_Expand"){
            this.$refs.grid.ej2Instances.groupModule.expandAll();
        }
    },
    onSwitchChange(args) {
        if (args.checked) {
            this.$refs.grid.ej2Instances.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], false); // Disable toolbar items.
        } else {
            this.$refs.grid.ej2Instances.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], true); // Enable toolbar items.
        }
    }
  },
  provide: {
      grid: [Toolbar, Group]
  }
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