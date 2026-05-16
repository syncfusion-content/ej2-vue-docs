<template>
    <div style="width: 100%">
        <div id="palette-space" class="sb-mobile-palette">
            <ejs-symbolpalette id="symbolpalette" :palettes="palettes" :width="palettewidth" :height="paletteheight"
                :getNodeDefaults="palettegetNodeDefaults" :getSymbolInfo="getSymbolInfo" :symbolMargin="symbolMargin"
                :symbolHeight="symbolHeight" :symbolWidth="symbolWidth">
            </ejs-symbolpalette>
        </div>
        <div id="diagram-space" class="sb-mobile-diagram">
            <ejs-diagram style="display: block" ref="diagramObject" id="diagram" :width="width" :height="height">
            </ejs-diagram>
        </div>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';

const umlShapes = [
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
                    {
                        name: 'accepted',
                        type: 'Date',
                        style: {
                            color: 'red',
                            fontFamily: 'Arial',
                            textDecoration: 'Underline',
                            italic: true,
                        },
                        isSeparator: true,
                    },
                ],
                methods: [
                    {
                        name: 'getHistory',
                        style: {},
                        parameters: [{ name: 'Date', style: {} }],
                        type: 'History',
                    },
                ],
                name: 'Patient',
            },
            classifier: 'Class',
        },
    },
    {
        id: 'Interface',
        style: {
            fill: '#26A0DA',
        },
        borderColor: 'white',
        shape: {
            type: 'UmlClassifier',
            interfaceShape: {
                name: 'Bank Account',
            },
            classifier: 'Interface',
        },
    },
    {
        id: 'Enumeration',
        style: {
            fill: '#26A0DA',
        },
        borderColor: 'white',
        shape: {
            type: 'UmlClassifier',
            enumerationShape: {
                name: 'AccountType',
                members: [
                    {
                        name: 'Checking Account',
                        style: {},
                    },
                ],
            },
            classifier: 'Enumeration',
        },
    },
];

const width = '100%';
const height = '700px';
const palettes = [
    {
        id: 'uml',
        expanded: true,
        symbols: umlShapes,
        title: 'UML Shapes',
    },
]
const palettewidth = '100%';
const paletteheight = '700px';
const symbolHeight = 80;
const symbolWidth = 80;

const palettegetNodeDefaults = (symbol) => {
    symbol.width = 100;
    symbol.height = 100;
}
const symbolMargin = { left: 15, right: 15, top: 15, bottom: 15 };
const getSymbolInfo = (symbol) => {
    return { fit: true, description: { text: symbol.id } };
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
