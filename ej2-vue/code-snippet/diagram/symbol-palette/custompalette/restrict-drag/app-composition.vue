<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" width="100%" height="100%" :symbolWidth="80" :symbolHeight="80"
            :palettes="palettes" :allowDrag="allowDrag">
        </ejs-symbolpalette>
        <ejs-diagram id="diagram" width="1000px" height="500px">
        </ejs-diagram>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette, DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

//Restricts symbol dragging from the palette
const allowDrag = ref(false);
const palettes = ref([
    {
        id: "basic",
        symbols: getBasicShapes(),
        title: "Basic Shapes",
    },
]);

// Function to return basic shapes
function getBasicShapes() {
    return [
        {
            id: "rectangle",
            shape: {
                type: "Basic",
                shape: "Rectangle",
            },
        },
        {
            id: "plus",
            shape: {
                type: "Basic",
                shape: "Plus",
            },
        },
        {
            id: "triangle",
            shape: {
                type: "Basic",
                shape: "RightTriangle",
            },
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