<template>
<div id="app">
        <ejs-treegrid ref='treegrid':dataSource="data" :treeColumnIndex='1' :allowPaging='true' :allowSorting='true' :showColumnMenu='true' childMapping='subtasks' :columnMenuOpen='columnMenuOpen' :allowFiltering='true' :filterSettings='filterSettings'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                <e-column field='taskName' headerText='Task Name' width=180></e-column>
                <e-column field='startDate' headerText=' Start Date' textAlign='Right' format='yMd' type='date' width=90></e-column>
                <e-column field='duration' headerText='Duration' textAlign='Right'  width=80></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, Sort, ColumnMenu, Page, Filter, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

 data() {
    return {
      data: sampleData,
      filterSettings: { type: "Menu" },
    };
  },
  provide: {
      treegrid: [Sort, ColumnMenu, Page, Filter]
  },
  methods: {
   columnMenuOpen: function (args) {
      for (let item of args.items) {
        if (item.text === 'Filter' && args.column.field === 'taskName') {
            item.hide = true;
        } else {
            item.hide = false;
        }
      }
    }
  },
}
</script>