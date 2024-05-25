<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes'
            :getSymbolInfo='getSymbolInfo' :width='palettewidth' :height='paletteheight' :symbolHeight='symbolHeight'
            :symbolWidth='symbolWidth'>
        </ejs-symbolpalette>
    </div>
</template>
<script setup>
import { SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';

let basicShapes = [{
    id: 'Rectangle',
    shape: {
        type: 'Basic',
        shape: 'Rectangle'
    }
},
{
    id: 'Ellipse',
    shape: {
        type: 'Basic',
        shape: 'Ellipse'
    }
},
{
    id: 'Hexagon',
    shape: {
        type: 'Basic',
        shape: 'Hexagon'
    }
}
];


//Defines how many palettes can be at expanded mode at a time
const expandMode = "Multiple";
//Defines the palette collection
const palettes = [{
    id: 'basic',
    expanded: true,
    symbols: basicShapes,
    title: 'Basic Shapes',
    iconCss: 'e-ddb-icons e-basic'
},]
const getSymbolInfo = (symbol) => {
    // Enables to fit the content into the specified palette item size
    return {
        fit: true
    };
    // When it is set as false, the element is rendered with actual node size
}
const palettewidth = "100%";
const paletteheight = "700px";
const symbolHeight = 60;
const symbolWidth = 60;

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
