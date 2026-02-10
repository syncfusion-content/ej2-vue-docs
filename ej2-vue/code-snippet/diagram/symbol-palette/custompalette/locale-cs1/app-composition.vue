<template>
    <div id="app">
        <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes" :symbolWidth="80"
            :symbolHeight="80" :enableSearch="true" :enableAnimation="false" :locale="locale">
        </ejs-symbolpalette>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';
import { L10n, setCulture } from '@syncfusion/ej2-base';

// Set culture to German
setCulture("de");

// Load locale text for the SearchShapes
L10n.load({
    "de-DE": {
        SymbolPalette: {
            SearchShapes: "Formen suchen",
        },
    },
});

// Reactive variables
const palettes = ref([
    {
        id: "basic",
        symbols: getBasicShapes(),
        title: "Basic Shapes",
    },
]);
const locale = ref('de-DE'); // Set default locale

// Function to get basic shapes
function getBasicShapes() {
    return [
        {
            id: "Rectangle",
            shape: { type: "Basic", shape: "Rectangle" },
        },
        {
            id: "Ellipse",
            shape: { type: "Basic", shape: "Ellipse" },
        },
        {
            id: "Hexagon",
            shape: { type: "Basic", shape: "Hexagon" },
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