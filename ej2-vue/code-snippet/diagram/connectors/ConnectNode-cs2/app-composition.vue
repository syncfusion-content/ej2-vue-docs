<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
            :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: 'node',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
},
{
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
}
];
const connectors = [{
    id: "connector1",
    sourceID: "node",
    targetID: "node1",
    // Set Source Padding value
    sourcePadding: 20,
    // Set Target Padding value
    targetPadding: 20
},]

const width = "100%";
const height = "350px";
const getNodeDefaults = (node) => {
    node.height = 100;
    node.width = 100;
    node.style.fill = '#6BA5D7';
    node.style.strokeColor = 'white';
    return node;
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
