<template>
    <div id="app">
        <div class="control_wrapper">
            <ejs-treeview id='treeview' ref="treeview" :fields="fields" >                
            </ejs-treeview></div>
            <div id="btn">
            <ejs-button id="button1" cssClass="e-primary inline-element right" v-on:click="btnClick1" content="Remove parent"></ejs-button>
            <ejs-button id="button2" cssClass="e-primary inline-element right" v-on:click="btnClick2" content="Remove child"></ejs-button>        
        </div>
    </div>
</template>
<script>
import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

export default {
    name: "App",
    components: {
        "ejs-treeview": TreeViewComponent,
        "ejs-button": ButtonComponent
    },
    data() {
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
        return {
            fields: { dataSource: dataSource, id: 'id', parentID: 'pid', text: 'name',  hasChildren: 'hasChild' },
        }
    },
    methods: {
        btnClick1: function () {
            this.$refs.treeview.removeNodes(['7']);
        },
        btnClick2: function () {
            this.$refs.treeview.removeNodes(['3','4']);
        },
    }
}
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