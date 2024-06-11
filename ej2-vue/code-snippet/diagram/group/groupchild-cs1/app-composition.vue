<template>
    <div id="app">
        <button @click="addChild">addChild</button>
        <button @click="removeChild">removeChild</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const node = {
    id: 'node1', width: 150, height: 100, offsetX: 100, offsetY: 100, annotations: [{ content: 'Node1' }]
};
const node2 = {
    id: 'node2', width: 80, height: 130, offsetX: 200, offsetY: 200, annotations: [{ content: 'Node2' }]
};
const group = {
    id: 'group1', children: ['node1', 'node2']
};
const node3 = {
    id: 'node3', width: 100, height: 100, offsetX: 300, offsetY: 300, annotations: [{ content: 'Node3' }]
};

const width = "100%";
const height = "450px";
const nodes = [node, node2, node3, group];

const addChild = function () {
    diagram.value.ej2Instances.addChildToGroup(group, 'node3');
}
const removeChild = function () {
    diagram.value.ej2Instances.removeChildFromGroup(group, 'node3');
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
