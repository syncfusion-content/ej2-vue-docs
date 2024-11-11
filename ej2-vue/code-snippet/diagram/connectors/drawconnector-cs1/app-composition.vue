<template>
<div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :drawingObject='drawingObject' :tool='tool'></ejs-diagram>
</div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram,DiagramTools} from '@syncfusion/ej2-vue-diagrams';

const width = "100%";
const height = "350px";
const tool = DiagramTools.ContinuousDraw;
const drawingObject = {
        type: 'Orthogonal',
    };
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
