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
import { DiagramComponent as EjsDiagram, SymbolPaletteComponent as EjsSymbolpalette ,  BpmnDiagrams ,
  UndoRedo,SymbolPaletteComponent,  DiagramContextMenu, } from '@syncfusion/ej2-vue-diagrams';
import { provide } from "vue";
const bpmnShapes = [
{
  id: 'Start',
  width: 35,
  height: 35,
  shape: {
    type: 'Bpmn',
    shape: 'Event',
    event: { event: 'Start' },
  },
},
{
  id: 'Gateway',
  width: 35,
  height: 35,
  offsetX: 100,
  offsetY: 100,
  shape: {
    type: 'Bpmn',
    shape: 'Gateway',
    gateway: { type: 'Exclusive' },
  },
},
{
  id: 'DataObject',
  width: 35,
  height: 35,
  offsetX: 500,
  offsetY: 100,
  shape: {
    type: 'Bpmn',
    shape: 'DataObject',
    dataObject: { collection: false, type: 'None' },
  },
},
{
  id: 'textAnnotation',
  width: 35,
  height: 35,
  shape: {
    type: 'Bpmn',
    shape: 'TextAnnotation',
  },
  annotations: [{ content: 'textAnnotation' }],
} 
];

const width = '100%';
const height = '700px';
const palettes = [
    {
        id: 'uml',
        expanded: true,
        symbols: bpmnShapes,
        title: 'BPMN Shapes',
    },
]
const palettewidth = '100%';
const paletteheight = '200px';
const symbolHeight = 100;
const symbolWidth = 100;

const palettegetNodeDefaults = (symbol) => {
    symbol.width = 100;
    symbol.height = 100;
}
const symbolMargin = { left: 15, right: 15, top: 15, bottom: 15 };
const getSymbolInfo = (symbol) => {
    return { fit: true, description: { text: symbol.id } };
}
provide('diagram', [BpmnDiagrams, UndoRedo, DiagramContextMenu]);
provide('SymbolPalette',[BpmnDiagrams]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
