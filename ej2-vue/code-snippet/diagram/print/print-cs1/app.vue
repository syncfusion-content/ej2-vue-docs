<template>
    <div id="app">
        <label for="region">Region: </label>
        <select id="region" ref="regionSelect">
            <option value="PageSettings">PageSettings</option>
            <option value="Content">Content</option>
        </select>
        <button v-on:click="printDiagram">Print</button>
        <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :nodes="nodes"
            :pageSettings="pageSettings"></ejs-diagram>
    </div>
</template>

<script>
import { DiagramComponent, PrintAndExport } from '@syncfusion/ej2-vue-diagrams';

var diagramInstance;
var nodes = [
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{ content: 'Node 1' }],
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 130,
        annotations: [{ content: 'Node 2' }],
    },
];

export default {
    name: 'App',
    components: {
        'ejs-diagram': DiagramComponent,
    },
    data() {
        return {
            width: '100%',
            height: '650px',
            nodes: nodes,
            pageSettings: { width: 200, height: 200 },
        };
    },
    methods: {
        // Function to handle the print button click
        printDiagram() {
            const selectedRegion = this.$refs.regionSelect.value;
            // Set the print options based on the selected region
            const printOptions = {
                region: selectedRegion,
            };
            diagramInstance.print(printOptions);
        },
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    },
    provide: { diagram: [PrintAndExport] },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>