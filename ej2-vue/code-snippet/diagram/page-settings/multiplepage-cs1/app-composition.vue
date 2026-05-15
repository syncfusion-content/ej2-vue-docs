<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'
            :connectors='connectors' :pageSettings='pageSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
}];

let nodes = [{
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
    // Sets the Multiple page for diagram
    multiplePage: true,
    // Sets the Page Break for diagram
    showPageBreaks: true,
    width: 300,
    height: 300,
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
