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
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Group } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
const grid=ref(null);
      const toolbar = ['Expand', 'Collapse'];
      const groupOptions = { columns: ['CustomerID'] };
      const clickHandler = function(args) {
        if (args.item.id === 'Grid_Collapse') { // Grid_Collapse is control id + '_' + toolbar value.
            grid.value.ej2Instances.groupModule.collapseAll();
        }

        if (args.item.id === "Grid_Expand"){
            grid.value.ej2Instances.groupModule.expandAll();
        }
    }
    const onSwitchChange = (args) => {
        if (args.checked) {
            grid.value.ej2Instances.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], false); // Disable toolbar items.
        } else {
            grid.value.ej2Instances.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], true); // Enable toolbar items.
        }
    }
  provide('grid',  [Toolbar, Group]);
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