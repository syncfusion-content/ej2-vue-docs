<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
            :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
            :layout='layout'></ejs-diagram>
    </div>
</template>
<script>

import { DiagramComponent, FlowchartLayout, DataBinding } from '@syncfusion/ej2-vue-diagrams';

//Initialize nodes
let nodes = [
    { id: '1', shape: { type: 'Flow', shape: 'Terminator' }, annotations: [{ content: 'Start' }], style: { fill: '#6CA0DC' } },
    { id: '2', shape: { type: 'Flow', shape: 'Decision' }, annotations: [{ content: 'Decision?' }], style: { fill: '#6CA0DC' } },
    { id: '3', shape: { type: 'Flow', shape: 'Process' }, annotations: [{ content: 'Process1' }], style: { fill: '#6CA0DC' } },
    { id: '4', shape: { type: 'Flow', shape: 'Process' }, annotations: [{ content: 'Process2' }], style: { fill: '#6CA0DC' } },
    { id: '5', shape: { type: 'Flow', shape: 'Terminator' }, annotations: [{ content: 'End' }], style: { fill: '#6CA0DC' } }
];

//Initialize connectors
let connectors = [
    { id: 'connector1', sourceID: '1', targetID: '2' },
    { id: 'connector2', sourceID: '2', targetID: '3', annotations: [{ content: 'Reject' }] },
    { id: 'connector3', sourceID: '2', targetID: '4', annotations: [{ content: 'Accept' }] },
    { id: 'connector4', sourceID: '4', targetID: '5', },
];

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "1000px",
            height: "590px",
            nodes: nodes,
            connectors: connectors,

            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'Flowchart',

                //Customizes the flowchart layout
                flowchartLayoutSettings: {
                    //Sets the yes branch values
                    yesBranchValues: ["Yes", "Accept"],
                    //Sets the no branch values
                    noBranchValues: ["No", "Reject"]
                }
            },

            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.width = 120; node.height = 50;
                if (node.shape.shape === 'Decision') {
                    node.height = 80;
                }
                return node;
            },

            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                return connector;
            }
        }
    },
    provide: {
        diagram: [FlowchartLayout, DataBinding]
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>