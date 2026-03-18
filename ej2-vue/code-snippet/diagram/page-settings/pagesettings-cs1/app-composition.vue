<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' 
            :connectors='connectors' :pageSettings='pageSettings'></ejs-diagram>
    </div>
</template>
<script setup>

import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const connectors = [{
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
}];

const nodes = [{
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    annotations: [{
        content: 'Node1'
    }]
},
{
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 350,
    annotations: [{
        content: 'Node3'
    }]
}];
const width = "750px";
const height = "500px";
const pageSettings = {
    // Sets the Page Break for diagram
    showPageBreaks: true,
    // Defines the background color and image  of diagram
    background: {
        color: 'grey'
    },
    // Sets the width for the Page
    width: 300,
    // Sets the height for the Page
    height: 300,
    // Sets the space to be left between an annotation and its parent node/connector
    margin: {
        left: 10,
        top: 10,
        bottom: 10
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
