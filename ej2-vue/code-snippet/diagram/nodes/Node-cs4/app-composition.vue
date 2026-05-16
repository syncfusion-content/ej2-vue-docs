<template>
  <div id="app">
    <div style="width: 100%">
      <div id="palette-space" style="width: 25%; float: left">
        <ejs-symbolpalette
          id="symbolpalette"
          :expandMode="expandMode"
          :palettes="palettes"
          :symbolMargin="symbolMargin"
          :width="palettewidth"
          :height="paletteheight"
          :symbolHeight="symbolHeight"
          :symbolWidth="symbolWidth"
        >
        </ejs-symbolpalette>
      </div>
      <div id="diagram-space" style="width: 75%; float: right">
        <ejs-diagram
          id="diagram"
          ref="diagram"
          :width="width"
          :height="height"
        ></ejs-diagram>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
import { SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const basicShapes = [
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

const width = "100%";
const height = "700px";
const palettes = [
        {
          id: 'basic',
          expanded: true,
          symbols: basicShapes,
          title: 'Basic Shapes',
          iconCss: 'e-ddb-icons e-basic',
        },
      ];
const symbolMargin = {
        left: 15,
        right: 15,
        top: 15,
        bottom: 15,
      };
const palettewidth= "100%";
const paletteheight= "700px";
const symbolHeight= 60;
const symbolWidth= 60;

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
