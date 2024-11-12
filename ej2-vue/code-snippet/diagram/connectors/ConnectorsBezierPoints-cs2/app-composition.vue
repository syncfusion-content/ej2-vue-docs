<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram ,ConnectorEditing} from '@syncfusion/ej2-vue-diagrams';
import { provide } from "vue";
let connectors = [{
    id: 'connector3',
    type: 'Bezier',
    segments: [{
        type: 'Bezier',
        // First control point: an absolute position from the page origin
        point1: {
            x: 100,
            y: 100
        },
        // Second control point: an absolute position from the page origin
        point2: {
            x: 200,
            y: 200
        }
    }],
    sourcePoint: {
        x: 100,
        y: 200
    },
    targetPoint: {
        x: 200,
        y: 100
    },
},]
provide('diagram', [ConnectorEditing]);
const width = "100%"
const height = "350px"
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
