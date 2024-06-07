<template>
  <div id="app">
        <ejs-treegrid :dataSource="data" :treeColumnIndex="1" height='300px' :allowSorting='true' :actionBegin='actionBegin' idMapping='TaskID' parentIdMapping='parentID' ref="treegrid">
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" :isPrimaryKey='true' width="70" textAlign="Right"></e-column>
          <e-column field="TaskName" headerText="Task Name" width="70" ></e-column>
          <e-column field="StartDate" headerText="Start Date" format="yMd" width="70" :sortComparer='sortComparer' textAlign="Right"></e-column>
          <e-column field="EndDate" headerText="End Date" width="100" format="yMd" textAlign="Right"></e-column>
          <e-column field="Duration" headerText="Duration" width="90" textAlign="Right"></e-column>
          <e-column field="Priority" headerText="Priority" width="90" textAlign="Right"></e-column>
        </e-columns>
       </ejs-treegrid>
  </div>
</template>
<script>

import { TreeGridComponent, Page, Sort, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { Data } from "./datasource.js";

let action;

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data() {
    return {
      data: Data,
    };
  },
  methods: {
    sortComparer: function(reference, comparer) {
        let sortAsc = action === "Ascending" ? true : false;
        if (sortAsc && reference === null) {
            return 1;
        }
        else if (sortAsc && comparer === null) {
            return -1;
        }
        else if (!sortAsc && reference === null) {
            return -1;
        }
        else if (!sortAsc && comparer === null) {
            return 1;
        } else {
            return reference - comparer;
        }
    },
    actionBegin: function(args) {
        if (args.requestType === "sorting") {
            action = args.direction;
        }
    }
  },
  provide: {
    treegrid: [Page, Sort]
  }
}
</script>