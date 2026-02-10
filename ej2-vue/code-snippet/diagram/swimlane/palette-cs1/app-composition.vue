<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes'
            :getSymbolInfo='getSymbolInfo' :symbolMargin='symbolMargin' :width='palettewidth'
            :getNodeDefaults='palettegetNodeDefaults' :symbolPreview='symbolPreview' :height='paletteheight'
            :symbolHeight='symbolHeight' :symbolWidth='symbolWidth'>
        </ejs-symbolpalette>
    </div>
</template>
<script setup>

import { SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';

const swimlaneShapes = [
    {
        id: 'stackCanvas1',
        shape: {
            type: 'SwimLane', lanes: [
                {
                    id: 'lane1',
                    style: { strokeColor: 'black' }, height: 60, width: 150,
                    header: { width: 50, height: 50, style: { strokeColor: 'black', fontSize: 11 } },
                }
            ],
            orientation: 'Horizontal', isLane: true
        },
        height: 60,
        width: 140,
        offsetX: 70,
        offsetY: 30,
    }, {
        id: 'stackCanvas2',
        shape: {
            type: 'SwimLane',
            lanes: [
                {
                    id: 'lane1',
                    style: { strokeColor: 'black' }, height: 150, width: 60,
                    header: { width: 50, height: 50, style: { strokeColor: 'black', fontSize: 11 } },
                }
            ],
            orientation: 'Vertical', isLane: true
        },
        height: 140,
        width: 60,
        // style: { fill: '#f5f5f5' },
        offsetX: 70,
        offsetY: 30,
    }, {
        id: 'verticalPhase',
        shape: {
            type: 'SwimLane',
            phases: [{ style: { strokeWidth: 1, strokeDashArray: '3,3', strokeColor: '#A9A9A9' }, }],
            annotations: [{ text: '' }],
            orientation: 'Vertical', isPhase: true
        },
        height: 60,
        width: 140
    }, {
        id: 'horizontalPhase',
        shape: {
            type: 'SwimLane',
            phases: [{ style: { strokeWidth: 1, strokeDashArray: '3,3', strokeColor: '#A9A9A9' }, }],
            annotations: [{ text: '' }],
            orientation: 'Horizontal', isPhase: true
        },
        height: 60,
        width: 140
    }
];

//Defines how many palettes can be at expanded mode at a time
const expandMode = "Multiple";
//Defines the palette collection
const palettes = [{
    id: 'swimlane',
    expanded: true,
    symbols: swimlaneShapes,
    title: 'Swimlane Shapes',
    iconCss: 'e-ddb-icons e-basic'
}]
const symbolMargin = {
    left: 15,
    right: 15,
    top: 15,
    bottom: 15
}
const palettegetNodeDefaults = (node) => {
    node.width = 100;
    node.height = 100;
    node.style.strokeColor = '#3A3A3A';
}
const getSymbolInfo = (symbol) => {
    return {
        fit: true
    };
}

const symbolPreview = {
    height: 100,
    width: 100,
    offset: {
        x: 0.5,
        y: 0.5
    }
}
const palettewidth = "100%";
const paletteheight = "700px";
const symbolHeight = 60;
const symbolWidth = 60;
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
