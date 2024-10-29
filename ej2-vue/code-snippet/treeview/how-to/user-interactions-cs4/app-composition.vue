{% raw %}
<template>
    <div id="app">
        <div class="control_wrapper">
            <ejs-treeview id='treeview' ref="treeViewInstance" :fields="fields" :nodeTemplate='Template'>
            </ejs-treeview>
            <ejs-button id="button1" cssClass="e-primary inline-element right" v-on:click="btnClick1" content="Refresh node"></ejs-button>
        </div>
    </div>
</template>
<script setup>

import { TreeViewComponent as EjsTreeview } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

const treeViewInstance = ref(null);
var demoVue = createApp().component("demo", {
    template: "<div><span class="treeName">{{ data.name }} : {{data.value}}</span></div>",
    data() {
        return {
            data: {}
        };
    }
});

var dataSource = [
    { id: 1, name: 'Parent 1', value: 10, hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'Child 1', value: 10 },
    { id: 3, pid: 1, name: 'Child 2', value: 10 },
    { id: 4, pid: 1, name: 'Child 3', value: 10 },
    { id: 7, name: 'Parent 2',value: 10, hasChild: true, expanded: true },
    { id: 8, pid: 7, name: 'Child 1', value: 10 },
    { id: 9, pid: 7, name: 'Child 2', value: 10 },
    { id: 10, pid: 7, name: 'Child 3',value:10 },
];

const fields = { dataSource: dataSource, id: 'id', text: 'name', child: 'subChild' };

const Template = () => {
    return {
        template: demoVue
    };
};

const btnClick1 = () => {
    var nodeData = treeViewInstance.getTreeData('4');
    nodeData[0].value = 400;
    nodeData[0].name = 'Node refreshed';
    treeViewInstance.refreshNode('4', nodeData);
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

</style>
{% endraw %}