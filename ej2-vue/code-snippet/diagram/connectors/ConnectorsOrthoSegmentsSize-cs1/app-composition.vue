<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :segmentThumbSize='segmentThumbSize'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, ConnectorConstraints, ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';
const nodes = [{
    id: 'node1',
    offsetX: 200,
    offsetY: 200,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    
},
{
    id: 'node2',
    offsetX: 400,
    offsetY: 400,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
   
},
{
    id: 'node3',
    offsetX: 600,
    offsetY: 200,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    
},
{
    id: 'node4',
    offsetX: 800,
    offsetY: 400,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
   
}]
const connectors =[
    {
        id: 'connector1',
        type: 'Orthogonal',
        sourceID: 'node1',
        targetID: 'node2',
        segments: [
            {
                type: 'Orthogonal',
                direction: "Right",
                length: 70
            },
            {
                type: 'Orthogonal',
                direction: "Bottom",
                length: 50
            }
        ],
        constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    },
    {
        id: 'connector2',
        type: 'Orthogonal',
        sourceID: 'node3',
        targetID: 'node4',
        segments: [
            {
                type: 'Orthogonal',
                direction: "Right",
                length: 70
            },
            {
                type: 'Orthogonal',
                direction: "Bottom",
                length: 50
            }
        ],
        constraints:ConnectorConstraints.Default & ~(ConnectorConstraints.InheritSegmentThumbSize) | ConnectorConstraints.DragSegmentThumb,
        segmentThumbSize: 20
    },
];

const width = "100%";
const height = "550px";
const segmentThumbSize = 15;

provide('diagram', [ConnectorEditing]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
