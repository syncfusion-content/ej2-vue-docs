<template>
    <div id="app">
        <div class="control_wrapper">
            <ejs-treeview id='treeview' :fields="fields" :allowDragAndDrop='true'></ejs-treeview>
        </div>
    </div>
</template>
<script setup>

import { TreeViewComponent as EjsTreeview } from "@syncfusion/ej2-vue-navigations";

var dataSource = [
    {
        id: 1, name: 'ASP.NET MVC Team', expanded: true,
        child: [
            { id: 2, pid: 1, name: 'Smith' },
            { id: 3, pid: 1, name: 'Johnson', isSelected: true },
            { id: 4, pid: 1, name: 'Anderson' },
        ]
    },
    {
        id: 5, name: 'Windows Team',
        child: [
            { id: 6, pid: 5, name: 'Clark' },
            { id: 7, pid: 5, name: 'Wright' },
            { id: 8, pid: 5, name: 'Lopez' },
        ]
    },
    {
        id: 9, name: 'Web Team',
        child: [
            { id: 11, pid: 9, name: 'Joshua' },
            { id: 12, pid: 9, name: 'Matthew' },
            { id: 13, pid: 9, name: 'David' },
        ]
    },
    {
        id: 14, name: 'Build Team',
        child: [
            { id: 15, pid: 14, name: 'Ryan' },
            { id: 16, pid: 14, name: 'Justin' },
            { id: 17, pid: 14, name: 'Robert' },
        ]
    },
    {
        id: 18, name: 'WPF Team',
        child: [
            { id: 19, pid: 18, name: 'Brown' },
            { id: 20, pid: 18, name: 'Johnson' },
            { id: 21, pid: 18, name: 'Miller' },
        ]
    }
];

const fields = { dataSource: dataSource, id: 'id', text: 'name', child: 'child', selected: 'isSelected' };

</script>
<style>
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";

.control_wrapper {
    display: block;
    max-width: 350px;
    max-height: 350px;
    margin: auto;
    overflow: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
}
</style>