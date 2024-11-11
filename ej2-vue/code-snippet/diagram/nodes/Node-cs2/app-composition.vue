<template>
    <div id="app">
        <button @click="add">add</button>
        <button @click="remove">remove</button>
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Text(label) added to the node
}];

const width = "100%";
const height = "350px";

const add = function () {
    diagram.value.ej2Instances.add(nodes);
}
const remove = function () {
    diagram.value.ej2Instances.remove(diagram.value.ej2Instances.nodes[0]);
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
