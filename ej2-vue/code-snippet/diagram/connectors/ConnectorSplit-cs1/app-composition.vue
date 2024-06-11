<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors' :nodes='nodes'
            :enableConnectorSplit='enableConnectorSplit'></ejs-diagram>
    </div>
</template>

<script setup>
import { DiagramComponent as EjsDiagram, ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';

let nodes = [
    { id: 'node1', offsetX: 150, offsetY: 150, width: 100, height: 100, annotations: [{ content: 'node1' }] },
    { id: 'node2', offsetX: 650, offsetY: 150, width: 100, height: 100, annotations: [{ content: 'node2' }] },
    { id: 'node3', offsetX: 490, offsetY: 290, width: 100, height: 100, annotations: [{ content: 'node3' }] }
];
let connectors = [{
    id: 'connector1', sourceID: "node1", targetID: "node2",
    constraints: ConnectorConstraints.Default | ConnectorConstraints.AllowDrop
}];

const width = "100%";
const height = "350px";
const enableConnectorSplit = true;
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
