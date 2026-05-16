<template>
    <div id="app">
        <button id="addPalette" @click="addPalette">Add Palette</button>
        <ejs-symbolpalette ref="symbolPaletteRef" id="symbolpalette" :palettes="palettes"
            :enablePersistence="enablePersistence" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette, randomId } from '@syncfusion/ej2-vue-diagrams';

const symbolPaletteRef = ref(null);
// Reactive properties
const enablePersistence = ref(false);
const palettes = ref([
    {
        id: "flow",
        symbols: getFlowShapes(),
        title: "Flow Shapes",
    },
    {
        id: "connectors",
        symbols: getConnectors(),
        title: "Connectors",
    },
]);

// Methods to get flow shapes
function getFlowShapes() {
    return [
        {
            id: "process",
            shape: { type: "Flow", shape: "Process" },
        },
        {
            id: "document",
            shape: { type: "Flow", shape: "Document" },
        },
        {
            id: "predefinedprocess",
            shape: { type: "Flow", shape: "PreDefinedProcess" },
        },
    ];
}
// Methods to get connectors
function getConnectors() {
    return [
        {
            id: "Link1",
            type: "Orthogonal",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1, strokeColor: "#757575" },
            targetDecorator: {
                shape: "Arrow",
                style: { strokeColor: "#757575", fill: "#757575" },
            },
        },
        {
            id: "link3",
            type: "Orthogonal",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: "None" },
            style: { strokeWidth: 1, strokeColor: "#757575" },
        },
        {
            id: "Link21",
            type: "Straight",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1, strokeColor: "#757575" },
            targetDecorator: {
                shape: "Arrow",
                style: { strokeColor: "#757575", fill: "#757575" },
            },
        },
        {
            id: "link23",
            type: "Straight",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: "None" },
            style: { strokeWidth: 1, strokeColor: "#757575" },
        },
        {
            id: "link33",
            type: "Bezier",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: "None" },
            style: { strokeWidth: 1, strokeColor: "#757575" },
        },
    ];
}

// Function to add  new palettes
function addPalette() {
    let newPaletteShapes = [
        {
            id: "rectangle" + randomId(),
            shape: { type: "Basic", shape: "Rectangle" },
        },
        {
            id: "plus" + randomId(),
            shape: { type: "Basic", shape: "Plus" },
        },
    ];

    let newPalette = [
        {
            id: "basic" + randomId(),
            symbols: newPaletteShapes,
            title: "New Shapes",
        },
    ];
    // Add the new palettes to the symbol palette
    symbolPaletteRef.value.ej2Instances.addPalettes(newPalette);
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>