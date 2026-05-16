<template>
    <div id="app">
        <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" width="100%" height="700px" :symbolHeight="80"
            :symbolWidth="80" :expandMode="expandMode" :palettes="palettes" :symbolMargin="symbolMargin" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';

const expandMode = ref('Multiple');
//Sets the space to be left around a symbol
const symbolMargin = ref({
    left: 15,
    right: 15,
    top: 15,
    bottom: 15,
});

const palettes = ref([
    {
        id: 'basic',
        expanded: true,
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic',
    },
]);

// Function to initialize basic shapes for the symbol palette
function getBasicShapes() {
    return [
        {
            id: 'Rectangle',
            shape: {
                type: 'Basic',
                shape: 'Rectangle',
            },
        },
        {
            id: 'Ellipse',
            shape: {
                type: 'Basic',
                shape: 'Ellipse',
            },
        },
        {
            id: 'Hexagon',
            shape: {
                type: 'Basic',
                shape: 'Hexagon',
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