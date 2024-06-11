<template>
<div id="app">
      <ejs-button id='enable' cssClass='e-flat' @click='enable'>Enable</ejs-button>
      <ejs-button id='disable' cssClass='e-flat' @click='disable'>Disable</ejs-button>
      <ejs-treegrid ref='treegrid' :dataSource='data' height='200' childMapping='subtasks' :treeColumnIndex='1' :toolbar='toolbar' :toolbarClick='toolbarClick' :allowFiltering='true'>
            <e-columns>
              <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
              <e-column field='taskName' headerText='Task Name' width='180'></e-column>
              <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
              <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
      </ejs-treegrid>
</div>
</template>
<script setup>
import { provide, ref } from "vue";

import { TreeGridComponent as EjsTreegrid, Toolbar, Filter, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { sampleData } from "./datasource.js";

const treegrid = ref(null);

const data = sampleData;

const toolbar = ['QuickFilter', 'ClearFilter'];

const toolbarClick = function (args) {
  if (args.item.text === 'QuickFilter') {
    treegrid.value.filterByColumn('taskName', 'startswith', 'Testing');
  }
  if (args.item.text === 'ClearFilter') {
    treegrid.value.clearFiltering();
  }
};

const enable = function() {
    treegrid.value.ej2Instances.toolbarModule.enableItems(['_gridcontrol_QuickFilter', '_gridcontrol_ClearFilter'], true);//Enable toolbar items.
};

const disable = function() {
    treegrid.value.ej2Instances.toolbarModule.enableItems(['_gridcontrol_QuickFilter', '_gridcontrol_ClearFilter'], false);//Disable toolbar items.
};

provide('treegrid',  [ Toolbar, Filter ]);

</script>