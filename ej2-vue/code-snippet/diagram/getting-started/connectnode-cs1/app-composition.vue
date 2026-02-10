<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'
            :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
const nodes = [
    {
        id: "node1",
        offsetY: 50,
        shape: { type: "Flow", shape: "Terminator" },
        annotations: [{
            content: "Start"
        }]
    },
    {
        id: "node2",
        offsetY: 140,
        shape: { type: "Flow", shape: "Process" },
        annotations: [{
            content: "var i = 0;"
        }]
    },
    {
        id: "node3",
        offsetY: 230,
        shape: { type: "Flow", shape: "Decision" },
        annotations: [{
            content: "i < 10?"
        }]
    },
];
const getNodeDefaults = (node) => {
    node.height = 50;
    node.width = 140;
    node.style = { fill: "skyblue", strokeColor: "skyblue" };
    node.offsetX = 300;
    return node;
}
const width = "100%";
const height = "350px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
