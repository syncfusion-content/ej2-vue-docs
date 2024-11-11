<template>
    <div>
        <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes" :getSymbolInfo="getSymbolInfo" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';

// Define reactive palettes array
const palettes = ref([
    {
        id: 'basic',
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
    },
]);

// Function to initialize basic shapes
function getBasicShapes() {
    return [
        {
            id: 'Rectangle-symbol',
            shape: { type: 'Basic', shape: 'Rectangle' },
        },
        {
            id: 'Ellipse-symbol',
            shape: { type: 'Basic', shape: 'Ellipse' },
        },
        {
            id: 'Hexagon-symbol',
            shape: { type: 'Basic', shape: 'Hexagon' },
        },
    ];
}

// Function to define symbol description information
function getSymbolInfo(symbol) {
    return {
        width: 50,
        height: 50,
        description: {
            //Defines the description text for the symbol
            text: symbol.id,
            //Defines the text wrapping based on symbol id
            wrap: symbol.id === 'Rectangle-symbol' || symbol.id === 'Ellipse-symbol' ? 'NoWrap' : 'WrapWithOverflow',
            //Defines the text overflow based on symbol id
            overflow: symbol.id === 'Rectangle-symbol' ? 'Ellipsis' : 'Clip',
        },
    };
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>