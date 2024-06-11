<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
    id: 'connector3',
    type: 'Bezier',
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
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

const width = "100%"
const height = "350px"
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
