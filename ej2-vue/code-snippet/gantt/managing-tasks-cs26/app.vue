<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data"  :resources= "resourceCollection" :resourceFields= "resourceFields" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :editSettings= "editSettings"  :editDialogFields="editDialogFields" :addDialogFields= "addDialogFields"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Edit, Toolbar } from "@syncfusion/ej2-vue-gantt";
import {projectData ,editingResources} from "./data-source"

export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
        data: projectData,
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                resourceInfo: 'resources',
                work: 'work',
                child: 'subtasks',
                segments: 'Segments',
                notes:"note",
        },
        resourceCollection:editingResources,
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'resourceUnit',
            group: 'resourceGroup'
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },

            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],

            addDialogFields: [
                { type: 'General'},
                { type: 'Dependency', additionalParams: {allowPaging: true, allowSorting: true, toolbar: ["Search", "Print",]}},
                { type: 'Resources', additionalParams: { allowSorting: true, allowPaging: true, toolbar: ["Search", "Print"], columns: [{ field: "newData" }]}},
                {type:"Segments", additionalParams:{columns:[{field:"segmentTask",width:"170px" ,headerText:"Segment Task"}],}}
            ],
            editDialogFields: [
                { type: 'General' },
                {type: 'Dependency', additionalParams: {allowPaging: true, allowSorting: true, toolbar: ["Search", "Print",]}},
                { type: 'Resources', additionalParams: { allowSorting: true, allowPaging: true, toolbar: ["Search", "Print"], columns: [{ field: "newData" }]}},
                {type: "Segments", additionalParams: {columns: [{ field: "segmentTask", width: "170px", headerText: "Segment Task" }],}}
            ],
      };
  },
  provide: {
      gantt: [ Edit, Toolbar ]
  },

};
</script>