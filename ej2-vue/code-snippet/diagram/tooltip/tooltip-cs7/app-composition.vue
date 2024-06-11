<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, PortVisibility, PortConstraints } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: "node1",
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // Initialize port collection
    ports: [{
        // Sets the position for the port
        offset: {
            x: 0.5,
            y: 0.5
        },
        visibility: PortVisibility.Visible,
        shape: 'Circle',
        tooltip: { content: 'Port Tootip', relativeMode: 'Object', position: 'TopRight' },
        constraints: PortConstraints.Default | PortConstraints.ToolTip
    }]
}]

const width = "100%";
const height = "350px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
