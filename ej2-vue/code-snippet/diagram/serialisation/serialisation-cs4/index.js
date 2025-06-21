
import Vue from 'vue';
import { DiagramPlugin, Diagram, MindMap } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(MindMap);
Vue.use(DiagramPlugin);

let diagramInstance;

new Vue({
    el: '#app',
    template: `
<div id="app">  
    <button v-on:click="loadMermaidSeqDiagram">Load Mermaid</button>
    <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height"></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "600px",
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
            }
        };
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
});
