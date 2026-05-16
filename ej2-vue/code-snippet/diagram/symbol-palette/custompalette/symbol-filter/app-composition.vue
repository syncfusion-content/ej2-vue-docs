<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" width="100%" height="100%" :palettes="palettes" :symbolWidth="60"
            :symbolHeight="60" :enableSearch="enableSearch" :filterSymbols="filterSymbols">
        </ejs-symbolpalette>
        <ejs-diagram id="diagram" width="1000px" height="500px">
        </ejs-diagram>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette, DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

// Define reactive state
const enableSearch = ref(true);
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

// Define functions to get shapes
function getBasicShapes() {
    return [
        { id: "rectangle", shape: { type: "Basic", shape: "Rectangle" } },
        { id: "plus", shape: { type: "Basic", shape: "Plus" } },
        { id: "triangle", shape: { type: "Basic", shape: "RightTriangle" } },
    ];
}

function getFlowShapes() {
    return [
        { id: "process", shape: { type: "Flow", shape: "Process" } },
        { id: "terminator", shape: { type: "Flow", shape: "Terminator" } },
        { id: "decision", shape: { type: "Flow", shape: "Decision" } },
        { id: "document", shape: { type: "Flow", shape: "Document" } },
        { id: "data", shape: { type: "Flow", shape: "Data" } },
    ];
}

// filter the search results
function filterSymbols(symbols) {
    return symbols.filter(symbol => symbol.shape.type === 'Flow');
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>