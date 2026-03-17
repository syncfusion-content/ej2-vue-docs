<template>
    <div id="app">
        <button id="removePalette" @click="removePalette">Remove Palette</button>
        <button id="removePalettes" @click="removePalettes">Remove Palettes</button>
        <ejs-symbolpalette ref="symbolPaletteRef" id="symbolpalette" :palettes="palettes"
            :enablePersistence="enablePersistence" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette } from "@syncfusion/ej2-vue-diagrams";

let symbolPaletteInstance;
// Reactive properties
const enablePersistence = ref(false);
const palettes = ref([
    {
        id: 'flow',
        symbols: getFlowShapes(),
        title: 'Flow Shapes',
    },
    {
        id: 'basic',
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
    },
    {
        id: 'connectors',
        symbols: getConnectors(),
        title: 'Connectors',
    },
]);

// Reference for Symbol Palette Component
const symbolPaletteRef = ref(null);

// Mount lifecycle to access instance methods
onMounted(() => {
    symbolPaletteInstance = symbolPaletteRef.value.ej2Instances;
});

// Helper functions to get shapes
function getBasicShapes() {
    return [
        { id: 'rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
        { id: 'plus', shape: { type: 'Basic', shape: 'Plus' } },
        { id: 'triangle', shape: { type: 'Basic', shape: 'RightTriangle' } },
    ];
}

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
            targetDecorator: { shape: "Arrow", style: { strokeColor: "#757575", fill: "#757575" } },
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
            targetDecorator: { shape: "Arrow", style: { strokeColor: "#757575", fill: "#757575" } },
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

// Methods to remove palettes
function removePalette() {
    const paletteToRemove = 'basic';
    symbolPaletteInstance.removePalette(paletteToRemove);
    symbolPaletteInstance.refresh();
}

function removePalettes() {
    const palettesToRemove = ['flow', 'connectors'];
    symbolPaletteInstance.removePalettes(palettesToRemove);
    symbolPaletteInstance.refresh();
}

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>