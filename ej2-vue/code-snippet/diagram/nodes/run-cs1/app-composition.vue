<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Text(label) added to the node
}

const width = "100%";
const height = "350px";

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    // Adds to the Diagram
    diagramInstance.add(nodes)
});

</script>
<style>
@import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
