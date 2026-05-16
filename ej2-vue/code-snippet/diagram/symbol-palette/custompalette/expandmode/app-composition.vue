<template>
    <div id="app">
        <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" width="100%" height="700px" :expandMode="expandMode"
            :palettes="palettes" :symbolHeight="80" :symbolWidth="80" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';

// Define reactive variables
const expandMode = ref('Single');
const palettes = ref([
    {
        id: 'flow',
        expanded: true,
        symbols: getFlowShapes(),
        title: 'Flow Shapes',
        iconCss: 'e-ddb-icons e-flow',
    },
    {
        id: 'basic',
        expanded: true,
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic',
    },
    {
        id: 'connectors',
        expanded: true,
        symbols: getConnectors(),
        title: 'Connectors',
        iconCss: 'e-ddb-icons e-connector',
    },
]);

// Function to get basic shapes
function getBasicShapes() {
    return [
        {
            id: 'Rectangle',
            shape: { type: 'Basic', shape: 'Rectangle' },
            style: { strokeWidth: 2 },
        },
        {
            id: 'Ellipse',
            shape: { type: 'Basic', shape: 'RightTriangle' },
            style: { strokeWidth: 2 },
        },
        {
            id: 'Hexagon',
            shape: { type: 'Basic', shape: 'Hexagon' },
            style: { strokeWidth: 2 },
        },
    ];
}

// Function to get flow shapes
function getFlowShapes() {
    return [
        {
            id: 'Process',
            shape: { type: 'Flow', shape: 'Process' },
            style: { strokeWidth: 2 },
        },
        {
            id: 'Document',
            shape: { type: 'Flow', shape: 'Document' },
            style: { strokeWidth: 2 },
        },
    ];
}

// Function to get connectors
function getConnectors() {
    return [
        {
            id: 'Straight',
            type: 'Straight',
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: 'Arrow',
                style: { strokeColor: '#757575', fill: '#757575' },
            },
            style: { strokeWidth: 1, strokeColor: '#757575' },
        },
        {
            id: 'Orthogonal',
            type: 'Orthogonal',
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: 'Arrow',
                style: { strokeColor: '#757575', fill: '#757575' },
            },
            style: { strokeWidth: 1, strokeColor: '#757575' },
        },
        {
            id: 'Bezier',
            type: 'Bezier',
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: 'Arrow',
                style: { strokeColor: '#757575', fill: '#757575' },
            },
            style: { strokeWidth: 1, strokeColor: '#757575' },
        },
    ];
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>