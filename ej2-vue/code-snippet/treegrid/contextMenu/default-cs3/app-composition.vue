<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :editSettings='editSettings' :allowPaging='true' :pageSettings='pageSettings' :contextMenuItems="contextMenuItems" :contextMenuOpen='contextMenuOpen' :contextMenuClick='contextMenuClick'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>

<script setup>
import { provide, ref } from "vue";

import { TreeGridComponent as EjsTreegrid, ContextMenu, Page, Edit, ColumnDirective as EColumn, ColumnsDirective as EColumns  } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

const treegrid = ref(null);

const data = sampleData;

const editSettings = { allowDeleting: true, allowEditing: true, allowAdding: true, mode: 'Row' };

const pageSettings = { pageSize: 7 };

const contextMenuItems = [
    {text: 'Edit Record', target: '.e-content', id: 'Edit_record'},
    { text: 'Delete Record', target: '.e-content', id: 'Delete_record' },
];

const contextMenuOpen = function (args) {
    if (args.rowInfo.rowData.hasChildRecords == true) {
      treegrid.value.ej2Instances.grid.contextMenuModule.contextMenu.enableItems(['Edit Record'],true);
      treegrid.value.ej2Instances.grid.contextMenuModule.contextMenu.enableItems(['Delete Record'],false);
    } else  {
      treegrid.value.ej2Instances.grid.contextMenuModule.contextMenu.enableItems(['Edit Record'],false);
      treegrid.value.ej2Instances.grid.contextMenuModule.contextMenu.enableItems(['Delete Record'],true);
    }
};

const contextMenuClick = function (args) {
    if(args.element.innerHTML == "Edit Record"){
        treegrid.value.ej2Instances.grid.editModule.startEdit(args.rowInfo.row);
    }
    else if(args.element.innerHTML == "Delete Record"){
         treegrid.value.ej2Instances.grid.editModule.deleteRecord(args.rowInfo.row);
    }
};

provide('treegrid',  [ ContextMenu, Page, Edit ]);

</script>