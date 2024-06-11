<template>
<div id="app">
        <ejs-treegrid :dataSource="data" childMapping='subtasks' :treeColumnIndex='0' height='315px'>
            <e-columns>
                <e-column field='taskName' :headerTemplate='projectName' width=180></e-column>
                <e-column field='startDate' :headerTemplate='dateTemplate' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' :headerTemplate='durationTemplate' textAlign='Right'></e-column>
                <e-column field='progress' :headerTemplate='progressTemplate' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>

import { TreeGridComponent as EjsTreegrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { headerData } from "./datasource.js";
import { createApp } from 'vue';

const app = createApp({});

const columnTemplate = app.component('columnTemplate', {
    template: `<div class="image">
                    <img :src="image" width=20 height=20 class="e-image"/> Task Name
                </div>`,
    data: function() {
        return {
            data: {}
        }
    },
    computed: {
        image: function() {
            return "Taskname.png";
        }
    }
});

const columnTemplate1 = app.component('columnTemplate', {
    template: `<div class="image">
                    <img :src="image" width=20 height=20 class="e-image"/> Start Date
                </div>`,
    data: function() {
        return {
            data: {}
        }
    },
    computed: {
        image: function() {
            return "Startdate.png";
        }
    }
});

const columnTemplate2 = app.component('columnTemplate', {
    template: `<div class="image">
                    <img :src="image" width=20 height=20 class="e-image"/> Duration
                </div>`,
    data: function() {
        return {
            data: {}
        }
    },
    computed: {
        image: function() {
            return "Duration.png";
        }
    }
});

const columnTemplate3 = app.component('columnTemplate', {
    template: `<div class="image">
                    <img :src="image" width=20 height=20 class="e-image"/> Progress
                </div>`,
    data: function() {
        return {
            data: {}
        }
    },
    computed: {
        image: function() {
            return "progress.png" ;
        }
    }
});

const data = headerData;

const projectName = function () {
    return { template : columnTemplate}
};

const dateTemplate = function () {
    return { template : columnTemplate1}
};

const durationTemplate = function () {
    return { template : columnTemplate2}
};

const progressTemplate = function () {
    return { template : columnTemplate3}
};

</script>