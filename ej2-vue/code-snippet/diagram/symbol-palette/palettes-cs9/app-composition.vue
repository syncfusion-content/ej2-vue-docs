<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :palettes='palettes' :width='palettewidth' :height='paletteheight'
            :symbolMargin='symbolMargin' :getNodeDefaults='palettegetNodeDefaults' :symbolHeight='symbolHeight'
            :symbolWidth='symbolWidth' :getSymbolInfo='getSymbolInfo'>
        </ejs-symbolpalette>
    </div>
</template>
<script setup>

import { SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';

let umlShapes = [
    {
        id: 'class',
        style: {
            fill: '#26A0DA',
        },
        borderColor: 'white',
        shape: {
            type: 'UmlClassifier',
            classShape: {
                attributes: [
                    { name: 'accepted', type: 'Date', style: { color: "red", fontFamily: "Arial", textDecoration: 'Underline', italic: true }, isSeparator: true },
                ],
                methods: [{ name: 'getHistory', style: {}, parameters: [{ name: 'Date', style: {} }], type: 'History' }],
                name: 'Patient'
            },
            classifier: 'Class'
        },
    },
    {
        id: 'Interface',
        style: {
            fill: '#26A0DA',
        }, borderColor: 'white',
        shape: {
            type: 'UmlClassifier',
            interfaceShape: {
                name: "Bank Account",
            },
            classifier: 'Interface'
        },
    },
    {
        id: 'Enumeration',
        style: {
            fill: '#26A0DA',
        }, borderColor: 'white',
        shape: {
            type: 'UmlClassifier',
            enumerationShape: {
                name: 'AccountType',
                members: [
                    {
                        name: 'Checking Account', style: {}
                    },
                ]
            },
            classifier: 'Enumeration'
        },
    },
];

//Defines the palette collection
const palettes = [{
    id: 'uml',
    expanded: true,
    symbols: umlShapes,
    title: 'UML Shapes',
}];
const palettewidth = "100%";
const paletteheight = "700px";
const symbolHeight = 80;
const symbolWidth = 80;
const symbolMargin = { left: 12, right: 12, top: 12, bottom: 12 }
const palettegetNodeDefaults = (symbol) => {
    symbol.width = 100;
    symbol.height = 100;
}
const getSymbolInfo = (symbol) => {
    //Sets the description for symbols
    return { fit: true, description: { text: symbol.id, } };
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
