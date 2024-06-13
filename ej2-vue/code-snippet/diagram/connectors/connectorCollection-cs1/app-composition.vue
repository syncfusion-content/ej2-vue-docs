<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const connector = [
    { id: 'connector1', sourcePoint: { x: 100, y: 100 }, targetPoint: { x: 150, y: 150 } },
    {id: 'connector2', type: 'Orthogonal', sourcePoint: { x: 170, y: 170 }, targetPoint: { x: 200, y: 200 }},
    { id: 'connector3', type: 'Bezier', sourcePoint: { x: 320, y: 320 }, targetPoint: { x: 400, y: 400 } }
];

const width = "100%";
const height = "350px";

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    // Adds connector collection to the diagram
    diagramInstance.addElements(connector)
})
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
