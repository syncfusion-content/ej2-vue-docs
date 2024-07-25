<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = [
    { id: 'node16', offsetX: 35, offsetY: 260 },
    { id: 'node17', offsetX: 140, offsetY: 260 },
    { id: 'node18', offsetX: 240, offsetY: 260 }
];

const width = "100%";
const height = "350px";

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    //Add collection of nodes
    diagramInstance.addElements(nodes)
});

</script>
<style>
@import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
