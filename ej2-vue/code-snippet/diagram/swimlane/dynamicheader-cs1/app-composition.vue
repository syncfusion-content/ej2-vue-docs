<template>
    <div id="app">
        <button @click="updateHeaderStyle">updateHeaderStyle</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = [{
    shape: {
        type: 'SwimLane',
        orientation: 'Horizontal',
        // customize the swimlane header
        header: {
            annotation: { content: 'SALES PROCESS FLOW CHART', },
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

const updateHeaderStyle = () => {
    const diagramInstance = diagram.value.ej2Instances;
    diagramInstance.nodes[0].shape.header.style.fill = 'red';
    diagramInstance.dataBind(); 
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
