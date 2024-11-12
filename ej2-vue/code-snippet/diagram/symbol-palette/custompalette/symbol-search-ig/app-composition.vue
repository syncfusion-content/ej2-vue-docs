<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" width="100%" height="100%" :palettes="palettes" :symbolWidth="60"
            :symbolHeight="60" :enableSearch="enableSearch" :ignoreSymbolsOnSearch="ignoreSymbolsOnSearch">
        </ejs-symbolpalette>
        <ejs-diagram id="diagram" width="1000px" height="500px">
        </ejs-diagram>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette, DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

const enableSearch = ref(true);
// Defines collection of symbols to be ignored on search
const ignoreSymbolsOnSearch = ref(['plus']);
const palettes = ref([
    {
        id: "basic",
        symbols: getBasicShapes(),
        title: "Basic Shapes",
    },
]);

// Function to provide basic shapes
function getBasicShapes() {
    return [
        {
            id: "rectangle",
            shape: { type: "Basic", shape: "Rectangle" },
        },
        {
            id: "plus",
            shape: { type: "Basic", shape: "Plus" },
        },
        {
            id: "triangle",
            shape: { type: "Basic", shape: "RightTriangle" },
        },
    ];
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>