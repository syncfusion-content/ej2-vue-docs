<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :palettes="palettes" :symbolHeight="50" :symbolWidth="70">
        </ejs-symbolpalette>
        <ejs-diagram ref="diagram" id="diagram" width="1000" height="500px" :getNodeDefaults="getNodeDefaults"
            @dragOver="dragOver">
        </ejs-diagram>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette, DiagramComponent as EjsDiagram, NodeConstraints } from "@syncfusion/ej2-vue-diagrams";

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

// Set default node properties
function getNodeDefaults(node) {
    node.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
}

// Handle dragOver event
function dragOver(args) {
    if (args.target) {
        // Target shape id
        console.log("Target shape ID:", args.target.id);
    }
    // Dragged symbol
    console.log("Dragged symbol ID:", args.element.id);
    // Customize as needed
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>