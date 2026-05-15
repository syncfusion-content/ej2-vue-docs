<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :palettes="palettes" :symbolHeight="50" :symbolWidth="70"
            @paletteSelectionChange="paletteSelectionChange">
        </ejs-symbolpalette>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette } from "@syncfusion/ej2-vue-diagrams";

// Define palettes with shapes
const palettes = ref([
    {
        id: "basic",
        symbols: getBasicShapes(),
        title: "Basic Shapes",
    },
]);

// Define basic shapes for the symbol palette
function getBasicShapes() {
    return [
        { id: "rectangle", shape: { type: "Basic", shape: "Rectangle" } },
        { id: "plus", shape: { type: "Basic", shape: "Plus" } },
        { id: "triangle", shape: { type: "Basic", shape: "RightTriangle" } },
    ];
}

// Handle palette selection change event
function paletteSelectionChange(args) {
    // Log the selected symbol
    console.log(args.newValue);
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>