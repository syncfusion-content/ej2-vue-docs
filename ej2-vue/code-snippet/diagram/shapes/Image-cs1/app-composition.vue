<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // sets the type of the shape as image
    shape: {
        type: 'Image',
        source: 'https://ej2.syncfusion.com/demos/src/diagram/employees/image16.png'
    },
    //Customizes the appearances such as text, font, fill, and stroke.
    style: {
        fill: 'none'
    }
}];

const width = "750px";
const height = "500px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
