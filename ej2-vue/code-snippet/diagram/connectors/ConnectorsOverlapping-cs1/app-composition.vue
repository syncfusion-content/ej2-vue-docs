<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, ConnectorConstraints, ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';

const connectors = [{
    id: "connector1",
    // Define the type of the segment
    type: 'Orthogonal',
    segments: [{
        type: 'Orthogonal'
    }],
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
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    },
    maxSegmentThumb: 3,
    constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb
}]

const width = "100%";
const height = "350px";

provide('diagram', [ConnectorEditing]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
