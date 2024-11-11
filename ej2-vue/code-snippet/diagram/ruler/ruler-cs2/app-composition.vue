<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const width = "100%";
const height = "600px";
const rulerSettings = {
    showRulers: true, 
    horizontalRuler: { interval: 8, segmentWidth: 100, thickness: 35, tickAlignment: "RightOrBottom" }, 
    verticalRuler: { interval: 10, segmentWidth: 200, thickness: 35, tickAlignment: "LeftOrTop" }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
