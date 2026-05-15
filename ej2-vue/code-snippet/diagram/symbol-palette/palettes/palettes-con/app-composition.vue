<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" width="100%" height="100%" :expandMode="expandMode" :palettes="palettes"
            :symbolHeight="80" :symbolWidth="80">
        </ejs-symbolpalette>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette } from "@syncfusion/ej2-vue-diagrams";

// Set expand mode to allow only one expanded palette at a time
const expandMode = ref('Single');

// Define palettes with connectors
const palettes = ref([
    {
        id: "connectors",
        expanded: true,
        symbols: getConnectors(),
        title: "Connectors",
        iconCss: "e-ddb-icons e-connector",
    },
]);

// Define connectors for the symbol palette
function getConnectors() {
    return [
        {
            id: "Straight",
            type: "Straight",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: "Arrow",
                style: { strokeColor: "#757575", fill: "#757575" },
            },
            style: { strokeWidth: 1, strokeColor: "#757575" },
        },
        {
            id: "Orthogonal",
            type: "Orthogonal",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: "Arrow",
                style: { strokeColor: "#757575", fill: "#757575" },
            },
            style: { strokeWidth: 1, strokeColor: "#757575" },
        },
        {
            id: "Bezier",
            type: "Bezier",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: "Arrow",
                style: { strokeColor: "#757575", fill: "#757575" },
            },
            style: { strokeWidth: 1, strokeColor: "#757575" },
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