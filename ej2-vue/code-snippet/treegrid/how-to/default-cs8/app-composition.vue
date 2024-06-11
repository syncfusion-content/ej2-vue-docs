<template>
    <div id="app">
        <div>
             <ejs-treegrid :dataSource="data" :treeColumnIndex="1" height='250px' :actionComplete='actionComplete' childMapping="subtasks" ref="treegrid" :editSettings="editSettings" :toolbar="toolbar">
               <e-columns>
                <e-column field="taskID" :isPrimaryKey="true" headerText="Task ID" width="70" textAlign="Right"></e-column>
                <e-column field="taskName" headerText="Task Name" width="100"></e-column>
                <e-column field="startDate" headerText="Start Date" format="yMd" width="90" textAlign="Right"></e-column>
                <e-column field="endDate" headerText="Start Date" format="yMd" width="90" textAlign="Right"></e-column>
                <e-column field="duration" headerText="Duration" width="90" textAlign="Right"></e-column>
               </e-columns>
             </ejs-treegrid>
            </div>
        </div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, Toolbar, Edit, ColumnDirective as EColumn,
ColumnsDirective as EColumns
 } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from './datasource.js';

const data = sampleData;
const editSettings = { allowAdding:true, allowDeleting:true, allowEditing: true, mode: 'Dialog' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

provide('treegrid',  [Page, Edit, Toolbar]);

const actionComplete = (args) => {
    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
        let dialog = args.dialog;
        dialog.height = 400;
        // change the header of the dialog
        dialog.header = args.requestType === 'beginEdit' ? 'Record of ' + args.rowData['taskName'] : 'New Record';
    }
};

</script>