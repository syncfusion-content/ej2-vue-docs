<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
            :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
            :layout='layout'></ejs-diagram>
    </div>
</template>

<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, FlowchartLayout, DataBinding } from '@syncfusion/ej2-vue-diagrams';

//Initialize nodes
let nodes = [
    { id: '1', shape: { type: 'Flow', shape: 'Terminator' }, annotations: [{ content: 'Start' }], style: { fill: '#6CA0DC' } },
    { id: '2', shape: { type: 'Flow', shape: 'Data' }, annotations: [{ content: 'Input' }], style: { fill: '#6CA0DC' } },
    { id: '3', shape: { type: 'Flow', shape: 'Decision' }, annotations: [{ content: 'Decision?' }], style: { fill: '#6CA0DC' } },
    { id: '4', shape: { type: 'Flow', shape: 'Process' }, annotations: [{ content: 'Process1' }], style: { fill: '#6CA0DC' } },
    { id: '5', shape: { type: 'Flow', shape: 'Process' }, annotations: [{ content: 'Process2' }], style: { fill: '#6CA0DC' } },
    { id: '6', shape: { type: 'Flow', shape: 'Data' }, annotations: [{ content: 'Output' }], style: { fill: '#6CA0DC' } },
    { id: '7', shape: { type: 'Flow', shape: 'Data' }, annotations: [{ content: 'Output' }], style: { fill: '#6CA0DC' } },
    { id: '8', shape: { type: 'Flow', shape: 'Terminator' }, annotations: [{ content: 'End' }], style: { fill: '#6CA0DC' } }
];

//Initialize connectors
let connectors = [
    { id: 'connector1', sourceID: '1', targetID: '2' },
    { id: 'connector2', sourceID: '2', targetID: '3' },
    { id: 'connector3', sourceID: '3', targetID: '4', annotations: [{ content: 'No' }] },
    { id: 'connector4', sourceID: '3', targetID: '5', annotations: [{ content: 'Yes' }] },
    { id: 'connector5', sourceID: '5', targetID: '6' },
    { id: 'connector6', sourceID: '4', targetID: '7' },
    { id: 'connector7', sourceID: '6', targetID: '8' },
    { id: 'connector8', sourceID: '7', targetID: '8' }
];

const width = "1000px";
const height = "590px";

//Uses layout to auto-arrange nodes on the Diagram page
const layout = {
    //Sets layout type
    type: 'Flowchart',
}

//Sets the default properties for nodes and connectors
const getNodeDefaults = (node) => {
    node.width = 120; node.height = 50;
    if (node.shape.shape === 'Decision') {
        node.height = 80;
    }
    return node;
}
const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
    return connector;
}

provide('diagram', [DataBinding, FlowchartLayout]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>