<template>
    <div id="app">
        <label>Enable animation</label>
        <input style="margin-left: 5px" id="enableAnimation" type="checkbox" v-model="enableAnimation" />
        <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes"
            :enableAnimation="enableAnimation" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';


// Enables animation
const enableAnimation = ref(true);
const symbolPalette = ref(null);

// Define palettes with a function for basic shapes
const palettes = ref([
    {
        id: 'basic',
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic',
    },
]);

// Define helper function to get basic shapes
function getBasicShapes() {
    return [
        {
            id: 'rectangle',
            shape: { type: 'Basic', shape: 'Rectangle' },
        },
        {
            id: 'plus',
            shape: { type: 'Basic', shape: 'Plus' },
        },
        {
            id: 'triangle',
            shape: { type: 'Basic', shape: 'RightTriangle' },
        },
    ];
}

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-base/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/fabric.css";
</style>