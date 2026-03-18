<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' 
         :pageSettings='pageSettings'></ejs-diagram>
    </div>
</template>
<script setup>

import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 200,
        offsetY: 200,
        annotations: [{ content: 'Node fits at the center of view port' }],
    }
]

const width = "750px";
const height = "800px";
const pageSettings = {
    background: {
        color: 'grey'
    },
    width: 500,
    height: 500,
    fitOptions: {
        // Fits the content to the center of the viewport
        canFit: true,
        // Allows zooming in to fit smaller content
        canZoomIn: true,
        // Specifies the region to fit to the center
        region: 'Content',
        // Specifies the mode of fitOptions
        mode: 'Page',
        // Defines the margin around the fitted content
        margin: { left: 50, right: 50, top: 50, bottom: 50 },
    },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
