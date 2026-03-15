<template>
  <div id="app">
    <div style="display: flex;">
      <label style="margin-right:5px">
      Enable or disable context menu items
      </label>
      <ejs-switch id="switch" :change="switchChange"></ejs-switch>
    </div>
    <ejs-grid style="padding: 10px 10px" ref='grid' :dataSource='data' :allowPaging='true' height='215px'
    :contextMenuItems="contextMenuItems" :editSettings='editSettings' >
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='90' textAlign="Right" isPrimaryKey='true'></e-column>
        <e-column field='CustomerID' headerText='Customer Name' width='100'></e-column>
        <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right" editType='numericedit' width='90'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, ContextMenu, Page, Edit } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
import { provide, ref } from "vue";
const grid = ref(null);
      const contextMenuItems = ['Copy', 'Edit', 'Delete'];
      const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const switchChange = function(args) {
      if(args.checked){
        grid.value.ej2Instances.contextMenuModule.contextMenu.enableItems(['Copy'], false);
      }
      else{
        grid.value.ej2Instances.contextMenuModule.contextMenu.enableItems(['Copy'], true);
      }
    }
  provide('grid', [ContextMenu, Page, Edit]);
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