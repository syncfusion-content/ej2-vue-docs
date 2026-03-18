<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    //Sets the annotation for the node
    annotations: [
    {
        content: 'Annotation Text WrapWithOverflow',
        // Sets the style for the text wrapping
        style: {
            textWrapping: 'WrapWithOverflow',
        },
    },
    ],
},
{
    id: 'node2',
    // Position of the node
    offsetX: 300,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    //Sets the annotation for the node
    annotations: [
    {
        content: 'Annotation Text Wrap',
        // Sets the style for the text wrapping
        style: {
            textWrapping: 'Wrap',
        },
    },
    ],
},
{
    id: 'node3',
    // Position of the node
    offsetX: 500,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    //Sets the annotation for the node
    annotations: [
    {
        content: 'Annotation Text NoWrap',
        // Sets the style for the text wrapping
        style: {
            textWrapping: 'NoWrap',
        },
    },
    ],
}];


const width = "750px";
const height = "350px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
