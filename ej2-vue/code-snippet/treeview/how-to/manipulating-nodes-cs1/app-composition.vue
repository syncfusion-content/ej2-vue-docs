<template>
    <div id="app">
        <div class="control_wrapper">
            <ejs-treeview id='treeview' ref="treeview"  :fields="fields"></ejs-treeview>
        </div>
        <div id="btn">
            <ejs-button id="button1" ref="button1" cssClass="e-primary inline-element right" v-on:click="btnClick1" content="Add parent"></ejs-button>
            <ejs-button id="button2" ref="button2" cssClass="e-primary inline-element right" v-on:click="btnClick2" content="Add child"></ejs-button>        
        </div>
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
        treeViewInstance.addNodes([
            { id: 12, name: 'New Parent' },
            { id: 13, pid: 12, name: 'New Child1' },
        ]);
    };
    const btnClick2 = () => {
        treeViewInstance.addNodes([{ id: 11, name: 'New Child2', pid: 1 }], '1', null);
    };
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css";

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