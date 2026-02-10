<template>
    <div id="app">
        <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" width="100%" height="100%" :expandMode="expandMode"
            :enableSearch="true" :palettes="palettes" :symbolHeight="80" :symbolWidth="80"
            :symbolPreview="symbolPreview" @paletteExpanding="paletteExpanding" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';

// Define reactive variables
const expandMode = ref('Multiple');
const palettes = ref([
    {
        id: 'flow',
        expanded: true,
        symbols: getFlowShapes(),
        title: 'Flow Shapes',
        iconCss: 'e-ddb-icons e-flow',
    },
    {
        id: 'basic',
        expanded: true,
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic',
    },
]);
const symbolPreview = ref([
    {
        height: 100,
        width: 100,
    },
]);

// Function to handle palette expanding event
function paletteExpanding(args) {
    if (args.palette.id === 'basic') {
        // Basic shapes panel does not collapse
        args.cancel = true;
    } else {
        // Flow shapes panel collapses and expands
        args.cancel = false;
    }
}

// Function to get basic shapes
function getBasicShapes() {
    return [
        {
            id: 'Rectangle',
            shape: { type: 'Basic', shape: 'Rectangle' },
        },
        {
            id: 'Ellipse',
            shape: { type: 'Basic', shape: 'Ellipse' },
        },
        {
            id: 'Hexagon',
            shape: { type: 'Basic', shape: 'Hexagon' },
        },
    ];
}

// Function to get flow shapes
function getFlowShapes() {
    return [
        {
            id: 'process',
            shape: { type: 'Flow', shape: 'Process' },
        },
        {
            id: 'document',
            shape: { type: 'Flow', shape: 'Document' },
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