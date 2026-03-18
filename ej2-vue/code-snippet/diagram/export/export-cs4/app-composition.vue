<template>
    <div id="app">

        <button v-on:click="exportItems">Export</button>

        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes"
            :snapSettings="snapSettings" :pageSettings="pageSettings"></ejs-diagram>

    </div>
</template>

<script setup>
import { provide, ref, onMounted } from "vue";
import { DiagramComponent as EjsDiagram, SnapConstraints, PrintAndExport } from '@syncfusion/ej2-vue-diagrams';

let diagramInstance;
let diagramObj = ref(null);

//Initialize nodes
let nodes = [
    {
        id: 'node1',
        width: 100,
        height: 50,
        offsetX: 100,
        offsetY: 100,
        style: { strokeColor: '#868686', fill: '#d5f5d5' },
        annotations: [{ content: 'Node 1' }],
    },
    {
        id: 'node2',
        width: 100,
        height: 75,
        offsetX: 500,
        offsetY: 100,
        shape: { type: 'Basic', shape: 'Diamond' },
        style: { strokeColor: '#8f908f', fill: '#e2f3fa' },
        annotations: [{ content: 'Node 2' }],
    },
];

const width = "1000px";
const height = "590px";
const snapSettings = { constraints: SnapConstraints.None };
const pageSettings = {
    width: 400,
    height: 300,
    showPageBreaks: true,
    multiplePage: true,
};
onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
})

// Function to handle the export button click
const exportItems = () => {
    const exportOptions = {};
    //Sets the multiple page as true for exporting image.
    exportOptions.multiplePage = true;
    exportOptions.region = 'PageSettings';
    diagramInstance.exportDiagram(exportOptions);
};

provide('diagram', [PrintAndExport]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>