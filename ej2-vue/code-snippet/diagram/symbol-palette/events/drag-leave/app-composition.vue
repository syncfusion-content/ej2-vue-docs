<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :palettes="palettes" :symbolHeight="50" :symbolWidth="70">
        </ejs-symbolpalette>

        <ejs-diagram ref="diagram" id="diagram" width="1000" height="500px" @dragLeave="dragLeave">
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

// Define the dragLeave handler
function dragLeave(args) {
    console.log(args.element.id);
    // Additional customizations for drag leave event can be added here
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>