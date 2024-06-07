<template>
    <div id="app">
    <div style="padding-top: 7px; float:left">Hierarchy Mode</div><div style="padding-left: 10px; display: inline-block">
            <ejs-dropdownlist id='ddlelement' :dataSource='dropData' value='Parent' :fields='fields' :change="onChange"></ejs-dropdownlist></div>
        <ejs-treegrid ref=treegrid :dataSource='treeGridData' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' copyHierarchyMode='Parent' :pageSettings='pageSettings' height='230px' :selectionSettings='selectionOptions'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, Page, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { sampleData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-dropdownlist":DropDownListComponent,
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data ()  {
    return {
      treeGridData: sampleData,
      pageSettings: { pageSize: 10 },
      selectionOptions: { type: 'Multiple'},
      fields:  { text: 'mode', value: 'id' },
      dropData: [
        { id: 'Parent', mode: 'Parent' },
        { id: 'Child', mode: 'Child' },
        { id: 'Both', mode: 'Both' },
        { id: 'None', mode: 'None' },
    ]
    };
  },
  provide: {
      treegrid: [ Page ]
    },
    methods: {
    onChange: function(e) {
      let mode = e.value.toString();
      this.$refs.treegrid.ej2Instances.copyHierarchyMode = mode;
    }
  }
}
</script>