<template>
  <div id="app">
        <ejs-treegrid :dataSource="data" :treeColumnIndex="1" height='250px' idMapping='TaskID' parentIdMapping='parentID' ref="treegrid" :editSettings="editSettings" :toolbar="toolbar">
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" :isPrimaryKey='true' width="70" textAlign="Right"></e-column>
          <e-column field="TaskName" headerText="Task Name" width="100" ></e-column>
          <e-column field="StartDate" headerText="Start Date" format="yMd" editType= 'datepickeredit' width="100" textAlign="Right"></e-column>
          <e-column field="EndDate" headerText="End Date" width="100" format="yMd" editType='datepickeredit' textAlign="Right"></e-column>
          <e-column field="Priority" headerText="Priority" width="90" editType= 'dropdownedit' textAlign="Left" :edit="priorityParams"></e-column>
        </e-columns>
       </ejs-treegrid>
  </div>
</template>
<script>

import { TreeGridComponent, Page, Toolbar, Edit, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { projectData } from "./datasource.js";
import { Query } from '@syncfusion/ej2-data';

let priorityData = [
      { priorityName: 'Normal', priorityId: '1' },
      { priorityName: 'High', priorityId: '2' },
      { priorityName: 'Low', priorityId: '3' },
      { priorityName: 'Critical', priorityId: '4' },
      { priorityName: 'Breaker', priorityId: '5' }
  ];

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data() {
    return {
      data: projectData,
      editSettings: { allowAdding:true, allowDeleting:true, allowEditing: true, mode: 'Row' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      priorityParams: {
        params: {
          allowFiltering: true,
          dataSource: priorityData,
          fields: { text: "priorityName", value: "priorityName" },
          query: new Query(),
          actionComplete: () => false
        }
      },
    };
  },
  provide: {
    treegrid: [Page, Edit, Toolbar]
  }
}
</script>