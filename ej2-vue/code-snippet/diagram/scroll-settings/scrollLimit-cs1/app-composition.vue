<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :scrollSettings='scrollSettings'
        :tool='tool' :scrollChange="scrollChange"></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, DiagramTools } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    annotations: [{
        id: 'label1',
        content: 'Start'
    }],
}];

const width = "750px";
const height = "500px";
const tool = DiagramTools.ZoomPan;
const scrollChange = (args) => {
    //Triggers while interacting with diagram and performing undo-redo
    console.log(args.panState);
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
