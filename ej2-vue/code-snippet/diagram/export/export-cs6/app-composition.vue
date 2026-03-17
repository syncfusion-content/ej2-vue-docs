<template>
    <div id="app">

        <button v-on:click="getDiagramContent">Export</button>

        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes"></ejs-diagram>

    </div>
</template>

<script setup>
import { provide, ref, onMounted } from "vue";
import { DiagramComponent as EjsDiagram, PrintAndExport } from '@syncfusion/ej2-vue-diagrams';

let diagramInstance;
let diagramObj = ref(null);

//Initialize nodes
let nodes = [
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 200,
        offsetY: 100,
        style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' },
        annotations: [{ content: 'Node 1' }],
    },
];

const width = "1000px";
const height = "590px";

onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
})

// Function to handle the export button click
const getDiagramContent = () => {
    /**
     * parameter (Optional) -  defines the collection of style files to be considered while exporting.
     */
    const content = diagramInstance.getDiagramContent();
    console.log(content);
};

provide('diagram', [PrintAndExport]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>