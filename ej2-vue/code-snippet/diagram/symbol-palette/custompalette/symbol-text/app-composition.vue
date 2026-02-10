<template>
    <div id="app">
        <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes" :getSymbolInfo="getSymbolInfo"
            enableSearch="true"></ejs-symbolpalette>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette } from "@syncfusion/ej2-vue-diagrams";


// Define palettes using ref for reactivity
const palettes = ref([
    {
        id: "basic",
        symbols: getBasicShapes(),
        title: "Basic Shapes",
    },
    {
        id: "flow",
        symbols: getFlowShapes(),
        title: "Flow Shapes",
    },
]);

// Function to initialize the basic shapes for the symbol palette
function getBasicShapes() {
    return [
        {
            id: "Rectangle-symbol",
            shape: { type: "Basic", shape: "Rectangle" },
        },
        {
            id: "Ellipse-symbol",
            shape: { type: "Basic", shape: "Ellipse" },
        },
        {
            id: "Hexagon-symbol",
            shape: { type: "Basic", shape: "Hexagon" },
        },
    ];
}

// Function to initialize the flow shapes for the symbol palette
function getFlowShapes() {
    return [
        {
            id: "Process",
            shape: { type: "Flow", shape: "Process" },
            style: { strokeWidth: 2 },
        },
        {
            id: "Document",
            shape: { type: "Flow", shape: "Document" },
            style: { strokeWidth: 2 },
        },
    ];
}

// Function to customize symbol description appearance
function getSymbolInfo(symbol) {
    return {
        width: 100,
        height: 50,
        description: {
            text: symbol.id,
            margin: { top: 20, bottom: 10 },
            fill: "green",
            fontFamily: "Calibri",
            fontSize: 15,
            bold: true,
            italic: true,
            textDecoration: "Underline",
            color: "white",
        },
    };
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>