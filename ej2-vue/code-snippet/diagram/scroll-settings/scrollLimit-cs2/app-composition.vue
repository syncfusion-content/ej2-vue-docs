<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :rulerSettings='rulerSettings'
            :scrollSettings='scrollSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: 'Start',
    width: 100, height: 100,
    offsetX: 250, offsetY: 250,
}];

const width = "750px";
const height = "500px";
const rulerSettings = { showRulers: true };
// set the autoScrollBorder
const scrollSettings = {
    canAutoScroll: true,
    scrollLimit: 'Infinity',
    //Sets the scroll limit
    padding: { left: 100, top: 100 }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
