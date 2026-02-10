<template>
    <div id="app">
        <button v-on:click="printDiagram">Print</button>
        <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :nodes="nodes"
            :snapSettings="snapSettings"></ejs-diagram>
    </div>
</template>

<script>
import { DiagramComponent, PrintAndExport, SnapConstraints } from '@syncfusion/ej2-vue-diagrams';

var diagramInstance;
var nodes = [
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
    {
        id: 'node3',
        width: 135,
        height: 50,
        offsetX: 400,
        offsetY: 425,
        style: { strokeColor: '#a8a8a8', fill: '#faebee' },
        annotations: [{ content: 'Node 3' }],
    },
    {
        id: 'node4',
        width: 125,
        height: 50,
        offsetX: 400,
        offsetY: 525,
        shape: { type: 'Basic', shape: 'Ellipse' },
        style: { strokeColor: '#a8a8a8', fill: '#fef0db' },
        annotations: [{ content: 'Node 4' }],
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
            snapSettings: { constraints: SnapConstraints.None },
        };
    },
    methods: {
        // Function to handle the print button click
        printDiagram() {
            const printOptions = {};
            printOptions.pageHeight = 700;
            printOptions.pageWidth = 1000;
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
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>