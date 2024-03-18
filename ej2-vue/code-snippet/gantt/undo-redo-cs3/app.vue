


<template>
     <div>
        <ejs-button id="undo" cssClass="e-info" v-on:click.native="undo">Undo</ejs-button>
        <ejs-button id="redo" cssClass="e-info" v-on:click.native="redo">Redo</ejs-button>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :allowSorting='true' :allowFiltering='true' :enableUndoRedo='true' :allowRowDragAndDrop='true' :undoRedoActions="undoRedoActions" :allowReordering='true' :showColumnMenu='true' :allowResizing='true' :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :editSettings= "editSettings"></ejs-gantt>
    </div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Toolbar, Selection, Edit, Filter,Sort,RowDD,ColumnMenu,Reorder,Resize,UndoRedo } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source.js';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(GanttPlugin);
Vue.use(ButtonPlugin);
export default {
  data: function() {
      return{
            data: projectNewData,
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Search', 'ZoomIn', 'ZoomOut', 'ZoomToFit','Indent','Outdent', 
            'PrevTimeSpan', 'NextTimeSpan','Undo','Redo'],
            undoRedoActions: ['Add', 'Edit', 'Delete', 'Search','Sorting','Filtering', 'ZoomIn', 'ZoomOut', 'ZoomToFit','Indent','Outdent', 
    'PreviousTimeSpan', 'NextTimeSpan','ColumnState'],
             editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
      };
  },
  provide: {
      gantt: [ Toolbar, Selection, Edit, Filter,Sort,RowDD,ColumnMenu,Reorder,Resize,UndoRedo ]
  },
  methods: {
      undo: function(e){
          var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
          ganttObj.undo();
      },
      redo: function(e){
          var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
          ganttObj.redo();
      },
  }
};
</script>



