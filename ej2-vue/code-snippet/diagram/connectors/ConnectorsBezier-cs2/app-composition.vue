<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const connectors = [{
    id: 'connector1',
    type: 'Bezier',
    segments: [{
        // Defines the type of the segment
        type: 'Bezier',
    }],
    sourcePoint: {
        x: 50,
        y: 100
    },
    targetPoint: {
        x: 150,
        y: 200
    },
},]

const width = "100%";
const height = "350px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
