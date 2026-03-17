<template>
    <div id="app">
        <ejs-diagram id="diagram" :width="width" :height="height" :nodes="nodes" :connectors="connectors"
            :getNodeDefaults="getNodeDefaults" :getConnectorDefaults="getConnectorDefaults"
            :layout="layout"></ejs-diagram>
    </div>
</template>

<script setup>

import { provide } from "vue";
import { DiagramComponent as EjsDiagram, ComplexHierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';

const nodes = [
    { id: 'node1' },
    { id: 'node2' },
    { id: 'node3' },
    { id: 'node4' },
    { id: 'node5' },
    { id: 'node6' },
    { id: 'node7' },
];

const connectors = [
    { id: 'node1-node4', sourceID: 'node1', targetID: 'node4' },
    { id: 'node2-node4', sourceID: 'node2', targetID: 'node4' },
    { id: 'node3-node4', sourceID: 'node3', targetID: 'node4' },
    { id: 'node4-node5', sourceID: 'node4', targetID: 'node5' },
    { id: 'node4-node6', sourceID: 'node4', targetID: 'node6' },
    { id: 'node5-node6', sourceID: 'node6', targetID: 'node7' },
];

const width = '100%';
const height = '590px';
const layout = {
    //Sets layout type
    type: 'ComplexHierarchicalTree',
    orientation: 'TopToBottom',
    horizontalAlignment: 'Center',
    verticalAlignment: 'Top',
};

//Sets the default properties for nodes and connectors
const getNodeDefaults = (node) => {
    node.width = 70;
    node.height = 70;
    node.annotations = [{ content: node.id }];
    return node;
};
const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
    return connector;
};
provide('diagram', [ComplexHierarchicalTree, DataBinding]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>