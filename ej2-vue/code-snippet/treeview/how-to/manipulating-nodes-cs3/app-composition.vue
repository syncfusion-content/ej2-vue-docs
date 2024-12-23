<template>
    <div id="app">
        <div class="control_wrapper">
            <ejs-treeview id='treeview' ref="treeViewInstance" :fields="fields" :allowEditing='true'></ejs-treeview> 
        </div>
        <div id="btn"><ejs-button id="button1" cssClass="e-primary inline-element right" v-on:click="btnClick1" content="Update node"></ejs-button></div>
    </div>
</template>
<script setup>

import { TreeViewComponent as EjsTreeview } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

const treeViewInstance = ref(null);
var dataSource = [
    { id: 1, name: 'Parent 1', hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'Child 1' },
    { id: 3, pid: 1, name: 'Child 2' },
    { id: 4, pid: 1, name: 'Child 3' },
    { id: 7, name: 'Parent 2', hasChild: true },
    { id: 8, pid: 7, name: 'Child 1' },
    { id: 9, pid: 7, name: 'Child 2' },
    { id: 10, pid: 7, name: 'Child 3' },
];

const fields = { dataSource: dataSource, id: 'id', parentID: 'pid', text: 'name',  hasChildren: 'hasChild' };

const btnClick1 = () => {
    treeViewInstance.updateNode('4', 'Node updated');
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";

.control_wrapper {
    display: block;
    max-width: 400px;
    max-height: 320px;
    margin: auto;
    overflow: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
}

#app {
    width: 350px;
    margin: 0 auto;
}
#btn{
        margin-left: 50px;
        margin-top: 20px;
    }
</style>