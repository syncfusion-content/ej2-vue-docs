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

<script>

import { GridComponent, ColumnsDirective, ColumnDirective,Edit as GridEdit,RowDD, Page } from "@syncfusion/ej2-vue-grids";
import { TreeGridComponent, ColumnsDirective, ColumnDirective,Edit as TreeGridEdit   } from "@syncfusion/ej2-vue-treegrid";
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { employeeData } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-treegrid":TreeGridComponent
},
  data() {
    return {
      data: employeeData,
      selectionOptions: { type: 'Multiple' },
      srcDropOptions: { targetID: 'TreeGrid' },
      gridEditSettings: { allowDeleting: true },
      treeGridEditSettings: { allowAdding: true, allowEditing: true }
    };
  },
  methods: {
    onRowDrop(args) {
      if (args.target.closest('.e-treegrid')) {
        args.cancel = true;
        var rowIndex = !isNullOrUndefined(args.target.closest('.e-row'))
          ? args.target.closest('.e-row').rowIndex
          : 0;
        for (var i = 0; i < args.data.length; i++) {
          this.$refs.treegrid.addRecord(args.data[i], rowIndex);
          this.$refs.grid.deleteRecord('taskID', args.data[i]);
        }
      }
    }
  },
  provide: {
    grid: [RowDD, Page,  GridEdit],
    treegrid: [RowDD, Page, TreeGridEdit]
  }
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