<template>
    <div id="app">
        <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes"
            :symbolDragSize="symbolDragSize" />
        <ejs-diagram id="diagram" width="1000px" height="500px"></ejs-diagram>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette, DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

// Defines the size of the shape while dragging it from the palette to the diagram canvas
const symbolDragSize = ref({ height: 30, width: 40 });
const palettes = ref([
    {
        id: 'basic',
        expanded: true,
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
    },
]);

// Function to initialize basic shapes for the symbol palette
function getBasicShapes() {
    return [
        {
            id: 'rectangle',
            shape: {
                type: 'Basic',
                shape: 'Rectangle',
            },
        },
        {
            id: 'plus',
            shape: {
                type: 'Basic',
                shape: 'Plus',
            },
        },
        {
            id: 'triangle',
            shape: {
                type: 'Basic',
                shape: 'RightTriangle',
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