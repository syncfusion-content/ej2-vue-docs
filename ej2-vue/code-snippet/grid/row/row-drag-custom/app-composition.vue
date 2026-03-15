<template>
  <div id="app">
    <ejs-grid ref="grid" id='Grid' :dataSource='data' :allowPaging="true" :pageSettings="true"
    allowSelection="true" :allowRowDragAndDrop="true" :selectionSettings="selectionOptions"
    :rowDropSettings="srcDropOptions" :rowDrop='onRowDrop' :editSettings="gridEditSettings">
      <e-columns> 
        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
        <e-column field='description' headerText='Description' textAlign='Left' width=180></e-column>
        <e-column field='category' headerText='Category' textAlign='Left' width=180></e-column>
        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
      </e-columns>
    </ejs-grid>
    <ejs-treegrid ref="treegrid" style="margin-top: 20px" id='TreeGrid'  childMapping='subtasks' :editSettings='treeGridEditSettings'>
      <e-columns>
        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
      </e-columns>
    </ejs-treegrid>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns,Edit as GridEdit,RowDD, Page } from "@syncfusion/ej2-vue-grids";
import { TreeGridComponent as EjsTreegrid,Edit as TreeGridEdit   } from "@syncfusion/ej2-vue-treegrid";
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { employeeData } from "./datasource.js";
const grid = ref(null);
const treegrid = ref(null);
      const data = employeeData;
      const selectionOptions = { type: 'Multiple' };
      const srcDropOptions = { targetID: 'TreeGrid' };
      const gridEditSettings = { allowDeleting: true };
      const treeGridEditSettings = { allowAdding: true, allowEditing: true };
    const onRowDrop = (args) => {
      if (args.target.closest('.e-treegrid')) {
        args.cancel = true;
        var rowIndex = !isNullOrUndefined(args.target.closest('.e-row'))
          ? args.target.closest('.e-row').rowIndex
          : 0;
        for (var i = 0; i < args.data.length; i++) {
          treegrid.value.addRecord(args.data[i], rowIndex);
          grid.value.deleteRecord('taskID', args.data[i]);
        }
      }
    }
  provide('grid',  [RowDD, Page,  GridEdit]);
  provide('treegrid', [RowDD, Page, TreeGridEdit]);
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