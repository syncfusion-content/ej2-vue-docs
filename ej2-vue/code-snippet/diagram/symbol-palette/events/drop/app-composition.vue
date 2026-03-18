<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :palettes="palettes" :symbolHeight="50" :symbolWidth="70">
        </ejs-symbolpalette>

        <ejs-diagram ref="diagram" id="diagram" width="1000" height="500px" @drop="drop">
        </ejs-diagram>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette, DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

// Define palettes and shapes
const palettes = ref([
    {
        id: "basic",
        symbols: getBasicShapes(),
        title: "Basic Shapes",
    },
]);

// Basic shapes for symbol palette
function getBasicShapes() {
    return [
        { id: "rectangle", shape: { type: "Basic", shape: "Rectangle" } },
        { id: "plus", shape: { type: "Basic", shape: "Plus" } },
        { id: "triangle", shape: { type: "Basic", shape: "RightTriangle" } },
    ];
}

// Access diagram component for binding updates
const diagram = ref(null);

// Handle drop event and customize dropped element style
function drop(args) {
    // Customize the dropped element style
    args.element.style.fill = "yellow";
    diagram.value.dataBind();
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>