<template>
    <div id="app">

        <button v-on:click="loadMermaidMindmap">Load</button>

        <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :layout="layout"
            :getNodeDefaults="getNodeDefaults" :getConnectorDefaults="getConnectorDefaults"></ejs-diagram>

    </div>
</template>

<script>
import { DiagramComponent, MindMap } from '@syncfusion/ej2-vue-diagrams';

var diagramInstance;
var nodes = [];

export default {
    name: 'App',
    components: {
        'ejs-diagram': DiagramComponent,
    },
    data() {
        return {
            width: '100%',
            height: '650px',
            //Sets layout type
            layout: {
                type: 'MindMap',
                verticalSpacing: 50,
                horizontalSpacing: 50,
                orientation: 'Horizontal',
            },

            //Sets the default properties for nodes and connectors
            getNodeDefaults(node) {
                node.width = 120;
                node.height = 50;
                node.annotations[0].style.bold = true;
                return node;
            },

            getConnectorDefaults(connector) {
                connector.type = 'Orthogonal';
                connector.style.strokeColor = '#6CA0DC';
                connector.targetDecorator.shape = 'None';
                return connector;
            },

        };
    },
    methods: {
        loadMermaidMindmap() {
            const mermaidMindmapData = `mindmap
                                    root((mindmap))
                                      Origins
                                        Popularisation
                                      Research
                                        On effectivness and features
                                        On Automatic creation
                                      Tools
                                        Pen and paper
                                        Mermaid `;

            // load the mermaid mindmap data to diagram
            //parameter: mermaidMindmapData - mermaid format string data for mindmap
            diagramInstance.loadDiagramFromMermaid(mermaidMindmapData);
        },
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    },
    provide: { diagram: [MindMap] },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>