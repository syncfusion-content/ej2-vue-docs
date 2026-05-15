<template>
    <div id="app">
        <button v-on:click="loadMermaidSeqDiagram">Load Mermaid</button>
        <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height"></ejs-diagram>
    </div>
</template>

<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

var diagramInstance;

export default {
    name: 'App',
    components: {
        'ejs-diagram': DiagramComponent,
    },
    data() {
        return {
            width: '100%',
            height: '600px',
        };
    },
    methods: {
        loadMermaidSeqDiagram() {
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
        },
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>