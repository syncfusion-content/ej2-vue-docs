<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :width='palettewidth'
            :height='paletteheight' :symbolHeight='symbolHeight' :symbolWidth='symbolWidth'
            :getSymbolInfo='getSymbolInfo'>
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
    }, style: { strokeWidth: 2 }
},
{
    id: 'Ellipse',
    shape: {
        type: 'Basic',
        shape: 'Ellipse'
    }, style: { strokeWidth: 2 }
},
{
    id: 'Hexagon',
    shape: {
        type: 'Basic',
        shape: 'Hexagon'
    }, style: { strokeWidth: 2 }
}
];

let swimlaneShapes = [{
    id: 'swimlaneShapes', expanded: true,
    title: 'Swimlane Shapes',
    symbols: [
        {
            id: 'stackCanvas1',
            shape: {
                type: 'SwimLane', lanes: [
                    {
                        id: 'lane1',
                        style: { fill: '#f5f5f5' }, height: 60, width: 150,
                        header: { width: 50, height: 50, style: { fill: '#C7D4DF' } },
                    }
                ],
                orientation: 'Horizontal', isLane: true
            },
            height: 60,
            width: 140,
            style: { fill: '#f5f5f5' },
            offsetX: 70,
            offsetY: 30,
        }
    ]
},
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
},
{
    id: 'swimlane',
    expanded: true,
    symbols: swimlaneShapes,
    title: 'Swimlane Shapes',
    iconCss: 'e-ddb-icons e-basic'
}]
const palettewidth = "100%";
const paletteheight = "700px";
const symbolHeight = 80;
const symbolWidth = 80;
const getSymbolInfo = (symbol) => {
    //Sets the description for symbols
    return { width: 75, height: 40, description: { text: symbol.shape['shape'] } };
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
