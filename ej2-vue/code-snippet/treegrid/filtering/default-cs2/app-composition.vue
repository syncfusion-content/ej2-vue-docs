<template>
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :allowFiltering='true' height='273px' :filterSettings='filterOptions' :actionBegin = 'actionBegin'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160' ></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Filter, ColumnDirective as EColumn,
ColumnsDirective as EColumns
 } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const data = sampleData;
const filterOptions = {
  type: 'Excel'
};

provide('treegrid',  [ Filter ]);

const actionBegin = (args) => {
   if(args.requestType === 'filtersearchbegin' && args.column.type === "string")
  {
    args.operator = 'contains';
  }
}

</script>