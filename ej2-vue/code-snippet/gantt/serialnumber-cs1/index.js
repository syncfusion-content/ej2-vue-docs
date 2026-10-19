import Vue from "vue";
import { GanttPlugin, Selection, Edit, Toolbar, Filter, Sort, Resize, RowDD, ColumnMenu, ContextMenu } from "@syncfusion/ej2-vue-gantt";
import { data } from './data-source.js';
Vue.use(GanttPlugin);

new Vue({
    el: '#app',
    template: `
    <div>
        <ejs-gantt id="ganttDefault" :dataSource="data" :height="height" :allowSorting="true" :allowFiltering="true" :allowResizing="true" :enableContextMenu="true" :showColumnMenu="true" :enableSerialNumber="true" :allowRowDragAndDrop="true" :allowTaskbarDragAndDrop="true" :treeColumnIndex="2" :editSettings="editSettings" :taskFields="taskFields" :splitterSettings="splitterSettings" :toolbar="toolbar" :columns="columns"></ejs-gantt>
    </div>
    `,
    data: function () {
        return {
            data: data,
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                parentID: 'ParentID'
            },
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            toolbar: [
                'Add',
                'Edit',
                'Update',
                'Delete',
                'Cancel',
                'Indent',
                'Outdent',
                'ExpandAll',
                'CollapseAll',
                'Search'
            ],
            splitterSettings: { columnIndex: 4 },
            columns: [
                { field: 'TaskID', headerText: 'Task ID', visible: false },
                { field: 'SerialNumber', headerText: 'S.No', width: '100', allowFiltering: false },
                { field: 'TaskName', headerText: 'Task Name', allowReordering: false, width: '280' },
                { field: 'StartDate', headerText: 'Start Date', width: '140' },
                { field: 'Duration', headerText: 'Duration', allowEditing: false, width: '130' },
                { field: 'Progress', headerText: 'Progress' }
            ]
        };
    },
    provide: {
        gantt: [Selection, Edit, Toolbar, Filter, Sort, Resize, RowDD, ColumnMenu, ContextMenu]
    }
});
