<template>
    <div id="app">
        <button v-on:click="getDiagramContent">Export</button>
        <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :nodes="nodes"></ejs-diagram>
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
        offsetX: 200,
        offsetY: 100,
        style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' },
        annotations: [{ content: 'Node 1' }],
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
        };
    },
    methods: {
        // Function to handle the export button click
        getDiagramContent() {
            /**
             * parameter (Optional) -  defines the collection of style files to be considered while exporting.
             */
            const content = diagramInstance.getDiagramContent();
            console.log(content);
        }
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