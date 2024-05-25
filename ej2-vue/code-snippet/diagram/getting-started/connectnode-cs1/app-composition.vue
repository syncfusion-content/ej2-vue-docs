<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
const nodes = [
    {
        id: "node1",
        height: 100,
        width: 100,
        offsetX: 200,
        offsetY: 100,
    },
    {
        id: "node2",
        height: 100,
        width: 100,
        offsetX: 200,
        offsetY: 300,
    }
];
const connectors = [
    {
        id: "connector1",
        sourceID: "node1",
        targetID: "node2"
    },
]

const width = "100%";
const height = "350px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
