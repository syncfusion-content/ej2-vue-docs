<template>
    <div id="app">

        <button v-on:click="loadMermaidFlowchart">Load</button>

        <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :layout="layout"
            :getNodeDefaults="getNodeDefaults" :getConnectorDefaults="getConnectorDefaults"></ejs-diagram>

    </div>
</template>

<script setup>
import { provide, ref, onMounted } from "vue";
import { DiagramComponent as EjsDiagram, FlowchartLayout } from '@syncfusion/ej2-vue-diagrams';

let diagramInstance;
let diagramObj = ref(null);

const width = "1000px";
const height = "590px";

//Sets layout type
const layout = { type: 'Flowchart' }

//Sets the default properties for nodes and connectors
const getNodeDefaults = (node) => {
    node.width = 120;
    node.height = 50;
    if ((node.shape).shape === 'Decision') {
        node.height = 80;
    }
    (node.annotations[0].style).bold = true;
    return node;
}

const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
    connector.style.strokeColor = '#6CA0DC';
    connector.targetDecorator.style = { fill: '#6CA0DC', strokeColor: '#6CA0DC' };
    return connector;
}

onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
})

const loadMermaidFlowchart = () => {
    const mermaidFlowchartData = `flowchart TD
                  A[Start] --> B(Process)
                  B -.- C{Decision}
                  C --Yes--> D[Plan 1]
                  C ==>|No| E[Plan 2]
                  style A fill:#90EE90,stroke:#333,stroke-width:2px;
                  style B fill:#4682B4,stroke:#333,stroke-width:2px;
                  style C fill:#FFD700,stroke:#333,stroke-width:2px;
                  style D fill:#FF6347,stroke:#333,stroke-width:2px;
                  style E fill:#FF6347,stroke:#333,stroke-width:2px;`;

    // load the mermaid mindmap data to diagram
    //parameter: mermaidMindmapData - mermaid format string data for mindmap
    diagramInstance.loadDiagramFromMermaid(mermaidFlowchartData);
}

provide('diagram', [FlowchartLayout]);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>