<template>
    <div id="app">
    <div class="e-bigger e-adaptive-demo">
    <div class="e-mobile-layout">
        <div class="e-mobile-content">
            <ejs-treegrid ref='treegrid' id='adaptivebrowser' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='100%' :enableAdaptiveUI='true' :allowPaging='true' :allowSorting='true' :allowFiltering='true' :editSettings='editSettings' :toolbar='toolbar' :filterSettings='filterSettings' :load='load'>
                <e-columns>
                    <e-column field='taskID' headerText='Task ID' :isPrimaryKey='true' width='135' textAlign='Right'></e-column>
                    <e-column field='taskName' headerText='Task Name' width='280'></e-column>
                    <e-column field='duration' headerText='Duration' width='140' textAlign='Right'></e-column>
                    <e-column field='progress' headerText='Progress' width='145' textAlign='Right'></e-column>
                </e-columns>
            </ejs-treegrid>
        </div>
    </div>
    </div>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, Edit, Sort, Filter, Toolbar, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";
import { ref } from "vue";

const treegrid = ref(null);

const data = sampleData;

const editSettings = { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' };

const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];

const filterSettings = { type: 'Excel' };

const load = () => {
    treegrid.value.ej2_instances[0].grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
};

provide('treegrid',  [Page, Edit, Sort, Filter, Toolbar]);

</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-treegrid/styles/material.css";
 /* The device with borders */
    .e-mobile-layout {
        position: relative;
        width: 360px;
        height: 640px;
        margin: auto;
        border: 16px #f4f4f4 solid;
        border-top-width: 60px;
        border-bottom-width: 60px;
        border-radius: 36px;
        box-shadow: 0 0px 2px rgb(144 144 144), 0 0px 10px rgb(0 0 0 / 16%);
    }

    /* The horizontal line on the top of the device */
    .e-mobile-layout:before {
        content: '';
        display: block;
        width: 60px;
        height: 5px;
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ebebeb;
        border-radius: 10px;
    }

    /* The circle on the bottom of the device */
    .e-mobile-layout:after {
        content: '';
        display: block;
        width: 35px;
        height: 35px;
        position: absolute;
        left: 50%;
        bottom: -65px;
        transform: translate(-50%, -50%);
        background: #e8e8e8;
        border-radius: 50%;
    }

    /* The screen (or content) of the device */
    .e-mobile-layout .e-mobile-content {
        overflow-x: hidden;
        width: 328px;
        height: 521px;
        background: white;
        border: 0px solid #dddddd;
    }

    .highcontrast .e-mobile-layout {
        border: 16px #000000 solid;
        border-top-width: 60px;
        border-bottom-width: 60px;
        box-shadow: -1px 2px white, -2px -2px white, 2px -2px white, 2px 1px white;
    }
</style>