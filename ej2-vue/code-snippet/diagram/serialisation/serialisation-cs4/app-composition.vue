<template>
    <div id="app">
        <button v-on:click="loadMermaidSeqDiagram">Load Mermaid</button>
        <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height"></ejs-diagram>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

let diagramInstance;
let diagramObj = ref(null);

const width = "1000px";
const height = "600px";
onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
})

const loadMermaidSeqDiagram = () => {
    const mermaidData = `
 sequenceDiagram
    participant User
    participant Controller
    participant Service
    participant Database

    User->>Controller: sendRequest()
    activate Controller

    Controller->>Service: processRequest()
    activate Service

    Service->>Database: queryData()
    activate Database
    Database-->>Service: returnData()
    deactivate Database

    Service-->>Controller: returnResponse()
    deactivate Service

    Controller-->>User: sendResponse()
    deactivate Controller`;

    // load the mermaid sequence diagram data to diagram
    //parameter: mermaidData - mermaid format string data for UML Sequence Diagram
    diagramInstance.loadDiagramFromMermaid(mermaidData);
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>