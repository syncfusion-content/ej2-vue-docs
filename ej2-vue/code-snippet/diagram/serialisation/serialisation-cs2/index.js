
import Vue from 'vue';
import { DiagramPlugin, Diagram, FlowchartLayout } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(FlowchartLayout);
Vue.use(DiagramPlugin);

let diagramInstance;

new Vue({
    el: '#app',
    template: `
<div id="app">
        
    <button v-on:click="loadMermaidFlowchart">Load</button>

    <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :layout="layout"
        :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'></ejs-diagram>

</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",

            //Sets layout type
            layout: { type: 'Flowchart' },

            //Sets the default properties for nodes and connectors
            getNodeDefaults(node) {
                node.width = 120;
                node.height = 50;
                if ((node.shape).shape === 'Decision') {
                    node.height = 80;
                }
                (node.annotations[0].style).bold = true;
                return node;
            },

            getConnectorDefaults(connector) {
                connector.type = 'Orthogonal';
                connector.style.strokeColor = '#6CA0DC';
                connector.targetDecorator.style = { fill: '#6CA0DC', strokeColor: '#6CA0DC' };
                return connector;
            },

            loadMermaidFlowchart() {
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

                // load the mermaid flowchart data to diagram
                //parameter: mermaidFlowchartData - mermaid format string data for flowchart
                diagramInstance.loadDiagramFromMermaid(mermaidFlowchartData);
            }

        };
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
});
