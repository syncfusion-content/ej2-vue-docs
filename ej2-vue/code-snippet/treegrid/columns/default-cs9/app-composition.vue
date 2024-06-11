<template>
<div id="app">
        <ejs-treegrid :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' height='315px' >
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width=90 textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width=180></e-column>
                <e-column field='approved' headerText='Approved' width=120 textAlign='Centre' :template='approvedtemplate'></e-column>
                <e-column field='progress' headerText='Progress' width=80 textAlign='Right'></e-column>
                </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>

import { TreeGridComponent as EjsTreegrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";
import {createApp} from 'vue';

const app = createApp({});

const columnTemplate = app.component('columnTemplate', {
    template: `<div v-if=cData class="template_checkbox">
                    <input type="checkbox" checked />
                </div>
                <div v-else class="template_checkbox">
                    <input type="checkbox" />
                </div>`,
    data: function() {
        return {
            data: {}
        }
    },
    computed: {
        cData: function() {
            return this.data.approved;
        }
    }
});

const data = sampleData;

const approvedtemplate = function () {
    return { template : columnTemplate }
}

</script>