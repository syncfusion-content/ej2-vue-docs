<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    shape: {
        type: 'SwimLane',
        orientation: 'Horizontal',
        // customize the swimlane header
        header: {
            annotation: { content: 'SALES PROCESS FLOW CHART' },
            height: 70, style: { fontSize: 11 }, style: { fill: 'pink' },
        },
        lanes: [
            {
                id: 'stackCanvas1',
                height: 100,
            },

        ],
        phases: [
            {
                id: 'phase1', offset: 170,
                header: { annotation: { content: 'Phase' } }
            },
        ],
        phaseSize: 20,
    },
    offsetX: 300, offsetY: 200,
    height: 200,
    width: 350
}];

const width = "100%";
const height = "350px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
