<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' printMode='CurrentPage' childMapping='subtasks' :treeColumnIndex='1' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' :printComplete='printComplete'>
            <e-columns>
              <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
              <e-column field='taskName' headerText='Task Name' width='160'></e-column>
              <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
              <e-column field='duration' headerText='Duration' width='80' :visible='false' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide, ref } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, Toolbar, ColumnDirective as EColumn,
  ColumnsDirective as EColumns
 } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const data = sampleData;
const treegrid = ref(null);

const toolbarOptions = ['Print'];

const toolbarClick = function() {
    for (var i = 0; i < treegrid.value.ej2Instances.grid.getColumns().length; i++) {
      if (treegrid.value.ej2Instances.grid.getColumns()[i].field == "duration") {
        treegrid.value.ej2Instances.grid.getColumns()[i].visible = true;
      }
      else if (treegrid.value.ej2Instances.grid.getColumns()[i].field == "startDate") {
        treegrid.value.ej2Instances.grid.getColumns()[i].visible = false;
      }
  }
};

const printComplete = function() {
    for (var i = 0; i < treegrid.value.getColumns().length; i++) {
      if (treegrid.value.grid.getColumns()[i].field == "duration") {
        treegrid.value.grid.getColumns()[i].visible = false;
      }
      else if (treegrid.value.grid.getColumns()[i].field == "startDate") {
        treegrid.value.grid.getColumns()[i].visible = true;
      }
  }
};

provide('treegrid',  [ Page, Toolbar ]);

</script>