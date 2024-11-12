<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :palettes="palettes" :symbolHeight="50" :symbolWidth="70">
        </ejs-symbolpalette>

        <ejs-diagram ref="diagram" id="diagram" width="1000" height="500px" @dragEnter="dragEnter">
        </ejs-diagram>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette, DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

// Define the palettes and symbols for the symbol palette
const palettes = ref([
    {
        id: "basic",
        symbols: getBasicShapes(),
        title: "Basic Shapes",
    },
]);

// Define the basic shapes used in the palette
function getBasicShapes() {
    return [
        { id: "rectangle", shape: { type: "Basic", shape: "Rectangle" } },
        { id: "plus", shape: { type: "Basic", shape: "Plus" } },
        { id: "triangle", shape: { type: "Basic", shape: "RightTriangle" } },
    ];
}

// Access the diagram component using a ref
const diagram = ref(null);

// Define the dragEnter handler
function dragEnter(args) {
    console.log(args.element.id);
    // Change the fill color of the dragged element
    args.element.style.fill = "yellow";
    // Ensure updates are applied by triggering data binding
    diagram.value.dataBind();
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>