<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, AnnotationConstraints } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: 'node1',
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // Sets the annotation for the node
    annotations: [{
        content: 'Annotation Text',
        //Sets the constraints as Read only
        constraints: AnnotationConstraints.ReadOnly
    }]
}];

const width = "750px";
const height = "600px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
