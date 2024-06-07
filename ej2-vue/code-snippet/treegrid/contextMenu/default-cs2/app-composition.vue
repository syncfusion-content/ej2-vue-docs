<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :contextMenuItems="contextMenuItems" :contextMenuOpen='contextMenuOpen' :contextMenuClick='contextMenuClick'>
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

import { TreeGridComponent as EjsTreegrid, ContextMenu, Page, ColumnDirective as EColumn, ColumnsDirective as EColumns  } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';

const treegrid = ref(null);
const data = sampleData;

const pageSettings = { pageSize: 7 };

const contextMenuItems = [
    {text: 'Collapse the Row', target: '.e-content', id: 'collapserow'},
    {text: 'Expand the Row', target: '.e-content', id: 'expandrow'}
];

provide('treegrid',  [ ContextMenu, Page ]);

const contextMenuOpen = function (arg) {
    let elem = arg.event.target;
    let uid = (elem.closest('.e-row')).getAttribute('data-uid');
    if (isNullOrUndefined(getValue('hasChildRecords', treegrid.value.ej2Instances.grid.getRowObjectFromUID(uid).data))) {
        arg.cancel = true;
    } else {
      let flag = getValue('expanded', treegrid.value.ej2Instances.grid.getRowObjectFromUID(uid).data);
      let val = flag ? 'none' : 'block';
      document.querySelectorAll('li#expandrow')[0].setAttribute('style', 'display: ' + val + ';');
      val = !flag ? 'none' : 'block';
      document.querySelectorAll('li#collapserow')[0].setAttribute('style', 'display: ' + val + ';');
    }
};

const contextMenuClick = function (args) {
    let selectedRows = treegrid.value.getSelectedRows();
    let selectedRecords = treegrid.value.getSelectedRecords();
    if (args.item.id === 'collapserow') {
      treegrid.value.collapseRow(selectedRows[0], selectedRecords[0]);
    } else {
      treegrid.value.expandRow(selectedRows[0], selectedRecords[0]);
    }
};

</script>