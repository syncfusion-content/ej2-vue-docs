<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [{
        content: 'Node1'
    }],
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    expandIcon: {
        shape: 'ArrowDown',
        width: 10,
        height: 10
    },
    collapseIcon: {
        shape: 'ArrowUp',
        width: 10,
        height: 10
    }
},
{
    id: 'Init',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 140,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    annotations: [{
        content: 'Node2'
    }],
}
];

const connectors = [{
    // Unique name for the connector
    id: "connector1",
    // Source and Target node's name to which connector needs to be connected.
    sourceID: "Start",
    targetID: "Init",
    type: 'Orthogonal'
}];

const width = "100%"
const height = "350px"

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
