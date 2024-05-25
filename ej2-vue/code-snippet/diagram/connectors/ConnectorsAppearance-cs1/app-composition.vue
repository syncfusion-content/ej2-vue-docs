<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'
            :getConnectorDefaults='getConnectorDefaults'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const connectors = [{
    id: "connector1",
    targetDecorator: {
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        }
    },
    style: {
        // Stroke color
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        // Stroke width of the line
        strokeWidth: 2,
        // Line style
        strokeDashArray: '2,2'
    },
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    },
    segments: [{
        type: 'Orthogonal',
        direction: 'Right',
        length: 50
    }],
},
{
    id: "connector2",
    // Set the visibility of the connector to false
    visible: false,
    targetDecorator: {
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        }
    },
    style: {
        // Stroke color
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        // Stroke width of the line
        strokeWidth: 2,
        // Line style
        strokeDashArray: '2,2'
    },
    sourcePoint: {
        x: 300,
        y: 300
    },
    targetPoint: {
        x: 400,
        y: 400
    },
    segments: [{
        type: 'Orthogonal',
        direction: 'Right',
        length: 50
    }],
}
]

const width = "100%";
const height = "350px";
const getConnectorDefaults = (obj) => {
    obj.type = 'Orthogonal'
    return obj;
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
