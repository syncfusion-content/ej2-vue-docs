<template>
    <div id="app">
        <button @click="exportNodes">export</button>
        <label for="Region"> Region: </label>
        <select id="region" ref="regionSelect" v-on:change="exportItems">
            <option value="Content">Content</option>
            <option value="PageSettings">PageSettings</option>
            <option value="CustomBounds">Custom Bounds</option>
        </select>

        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes"
            :snapSettings="snapSettings"></ejs-diagram>

    </div>
</template>

<script setup>
import { provide, ref, onMounted } from "vue";
import { DiagramComponent as EjsDiagram, SnapConstraints, PrintAndExport, Rect } from '@syncfusion/ej2-vue-diagrams';

let diagramInstance;
let diagramObj = ref(null);
let regionSelect = ref(null);


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
        offsetX: 100,
        offsetY: 225,
        shape: { type: 'Basic', shape: 'Diamond' },
        style: { strokeColor: '#8f908f', fill: '#e2f3fa' },
        annotations: [{ content: 'Node 2' }],
    },
];

const width = "1000px";
const height = "590px";
const snapSettings = { constraints: SnapConstraints.None };

onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
})

// Function to handle the export button click
const exportNodes = () => {
    const diagramInstance = diagram.value.ej2Instances;
    const exportOptions = {};
    exportOptions.region = regionSelect.value.value;
    if (region === 'CustomBounds') {
        exportOptions.bounds = new Rect(0, 0, 300, 300);
    } else if (region === 'Content') {
        diagramInstance.pageSettings = {};
    } else {
        diagramInstance.pageSettings = { width: 500, height: 500 };
    }
    diagramInstance.exportDiagram(exportOptions);
};

provide('diagram', [PrintAndExport]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>