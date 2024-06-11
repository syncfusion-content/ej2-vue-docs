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
<script>

import { TreeGridComponent, Toolbar, Filter, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { sampleData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data ()  {
    return {
      data: sampleData,
      toolbar: ['QuickFilter', 'ClearFilter'],
    };
  },
  methods: {
    toolbarClick: function (args) {
      if (args.item.text === 'QuickFilter') {
        this.$refs.treegrid.filterByColumn('taskName', 'startswith', 'Testing');
      }
      if (args.item.text === 'ClearFilter') {
        this.$refs.treegrid.clearFiltering();
      }
    },
    enable: function() {
        this.$refs.treegrid.ej2Instances.toolbarModule.enableItems(['_gridcontrol_QuickFilter', '_gridcontrol_ClearFilter'], true);//Enable toolbar items.
    },
    disable: function() {
        this.$refs.treegrid.ej2Instances.toolbarModule.enableItems(['_gridcontrol_QuickFilter', '_gridcontrol_ClearFilter'], false);//Disable toolbar items.
    }
  },
  provide: {
      treegrid: [ Toolbar, Filter ]
  }
}
</script>