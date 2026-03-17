<template>
    <div id="app">
        <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes"
            :getSymbolInfo="getSymbolInfo"></ejs-symbolpalette>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette, NodeConstraints } from '@syncfusion/ej2-vue-diagrams';

// Register component

// Define palettes
const palettes = ref([
    {
        id: 'basic',
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic',
    },
]);

// Function to initialize the basic shapes for the symbol palette
function getBasicShapes() {
    return [
        {
            id: 'rectangle',
            shape: { type: 'Basic', shape: 'Rectangle' },
            tooltip: { content: 'Rectangle Basic shape', relativeMode: 'Object' },
            constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        },
        {
            id: 'plus',
            shape: { type: 'Basic', shape: 'Plus' },
            tooltip: { content: 'Plus Basic shape', relativeMode: 'Object' },
            constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        },
        {
            id: 'triangle',
            shape: { type: 'Basic', shape: 'RightTriangle' },
            tooltip: { content: 'RightTriangle Basic shape', relativeMode: 'Object' },
            constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        },
    ];
}

// Function to set symbol information including width, height, and description
function getSymbolInfo(symbol) {
    return {
        width: 50,
        height: 50,
        description: { text: symbol.id },
    };
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>