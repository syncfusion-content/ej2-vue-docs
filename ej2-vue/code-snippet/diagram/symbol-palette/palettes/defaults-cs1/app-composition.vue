<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" width="100%" height="100%" :palettes="palettes"
            :getNodeDefaults="getNodeDefaults" :getConnectorDefaults="getConnectorDefaults" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';

// Define reactive variables
const palettes = ref([
    {
        id: "flow",
        symbols: getFlowShapes(),
        title: "Flow Shapes",
        iconCss: "e-ddb-icons e-flow",
    },
    {
        id: "connectors",
        symbols: getConnectors(),
        title: "Connectors",
        iconCss: "e-ddb-icons e-connector",
    },
]);

// Functions to get shapes
function getFlowShapes() {
    return [
        { id: "process", shape: { type: "Flow", shape: "Process" } },
        { id: "document", shape: { type: "Flow", shape: "Document" } },
        { id: "predefinedprocess", shape: { type: "Flow", shape: "PreDefinedProcess" } },
    ];
}

function getConnectors() {
    return [
        {
            id: "Link1",
            type: "Orthogonal",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1, strokeColor: "#757575" },
            targetDecorator: { shape: "Arrow", style: { strokeColor: "#757575", fill: "#757575" } }
        },
        {
            id: "link3",
            type: "Orthogonal",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: "None" },
            style: { strokeWidth: 1, strokeColor: "#757575" }
        },
        {
            id: "Link21",
            type: "Straight",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1, strokeColor: "#757575" },
            targetDecorator: { shape: "Arrow", style: { strokeColor: "#757575", fill: "#757575" } }
        },
        {
            id: "link23",
            type: "Straight",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: "None" },
            style: { strokeWidth: 1, strokeColor: "#757575" }
        },
        {
            id: "link33",
            type: "Bezier",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: "None" },
            style: { strokeWidth: 1, strokeColor: "#757575" }
        }
    ];
}

// Functions to set default properties for nodes and 
function getNodeDefaults(node) {
    node.style.fill = "yellow";
    return node;
}
// Functions to set default properties connectors
function getConnectorDefaults(connector) {
    connector.targetDecorator.shape = "DoubleArrow";
    return connector;
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>