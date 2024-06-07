<template>
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='270px' :editSettings='editSettings' :toolbar='toolbar'>
        <e-columns>
                <e-column field='taskID'  :isPrimaryKey='true'  headerText='Task ID'  width=90 textAlign='Right' :validationRules='taskIDRules'></e-column>
                <e-column field='taskName' headerText='Task Name' editType= 'stringedit' :validationRules='taskNameRules' width=170 ></e-column>
                <e-column field='startDate' headerText='Start Date' editType= 'datetimepickeredit' :validationRules='dateRules' :edit='dateParams' :format='formatOptions' textAlign='Right' width=170></e-column>
                <e-column field='approved' headerText='Approved' editType= 'booleanedit' type='boolean' width=110 displayAsCheckBox='true' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width=120 editType= 'numericedit' :validationRules='progressRules' :edit='progressParams' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' editType= 'dropdownedit'  width=110 textAlign='Right' :validationRules='priorityRules'></e-column>
                </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, Edit, Toolbar, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
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
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true,  mode: 'Cell', showDeleteConfirmDialog: true },
      toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
      taskIDRules: { required: true, number: true },
      taskNameRules: { required: true },
      dateRules: { date: true },
      formatOptions: {type:'dateTime', format:'M/d/y hh:mm a'},
      dateParams: { params: {format: 'M/d/y hh:mm a' } },
      progressRules: { min: 0 , number: true },
      progressParams: { params: {format: 'n' } },
      priorityRules: { required: true }
    };
  },
    provide: {
    treegrid: [ Edit, Toolbar ]
  }
}
</script>