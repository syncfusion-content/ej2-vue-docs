<template>
    <div id="app">
    <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :width='palettewidth'
    :height='paletteheight' :symbolHeight='symbolHeight' :symbolWidth='symbolWidth'></ejs-symbolpalette>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';
//Initializes connector symbols for the symbol palette
const connectorSymbols = [{
  id: 'orthogonal',
  type: 'Orthogonal',
  sourcePoint: {
      x: 0,
      y: 0
  },
  targetPoint: {
      x: 40,
      y: 40
  },
},
{
  id: 'straight',
  type: 'Straight',
  sourcePoint: {
      x: 0,
      y: 0
  },
  targetPoint: {
      x: 40,
      y: 40
  },
},
{
  id: 'bezier',
  type: 'Bezier',
  sourcePoint: {
      x: 0,
      y: 0
  },
  targetPoint: {
      x: 40,
      y: 40
  },
  targetDecorator: {
      shape: 'None'
  }
}
];
const palettes = [{
    id: "connector",
    expanded: true,
    symbols: connectorSymbols,
    title: "Connector Symbols"
}]
const expandMode = "Multiple";
const width = "100%";
const height = "350px";
const palettewidth = "100%";
const paletteheight = "150px";
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
