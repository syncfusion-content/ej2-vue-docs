<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'
            :scrollSettings='scrollSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: 'Start',
    width: 100, height: 100,
    offsetX: 350, offsetY: 350,
    shape: {
        type: 'Flow',
        shape: 'Terminator'
    }
}];

const width = "100%";
const height = "350px";
// set the autoScrollBorder
const scrollSettings = {
    canAutoScroll: true,
    scrollLimit: 'Infinity',
    //Sets the scroll limit
    padding: { right: 50, bottom: 50 }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
