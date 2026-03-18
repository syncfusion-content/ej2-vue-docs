<template>
<div style="width: 100%">
    <div id="palette-space" class="sb-mobile-palette">
        <ejs-symbolpalette id="symbolpalette" :palettes="palettes" :width="palettewidth" :height="paletteheight"
            :getNodeDefaults="palettegetNodeDefaults" :getSymbolInfo="getSymbolInfo" :symbolMargin="symbolMargin"
            :symbolHeight="symbolHeight" :symbolWidth="symbolWidth"></ejs-symbolpalette>
    </div>
    <div id="diagram-space" class="sb-mobile-diagram">
        <ejs-diagram style="display: block" ref="diagramObject" id="diagram" :width="width"
            :height="height"></ejs-diagram>
    </div>
</div>
</template>
<script>

import { DiagramComponent,  BpmnDiagrams,
  UndoRedo,SymbolPaletteComponent,  DiagramContextMenu,
} from '@syncfusion/ej2-vue-diagrams';

let bpmnShapes = [
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

export default {
name: "App",
components: {
    "ejs-symbolpalette": SymbolPaletteComponent,
    "ejs-diagram": DiagramComponent
},
data() {
    return {
        width: '100%',
        height: '700px',
        palettes: [
            {
                id: 'uml',
                expanded: true,
                symbols: bpmnShapes,
                title: 'Bpmn Shapes',
            },
        ],
        palettewidth: '100%',
        paletteheight: '200px', 
        symbolHeight: 100,
        symbolWidth: 100,
        palettegetNodeDefaults: (symbol) => {
            symbol.width = 100;
            symbol.height = 100;
        },
        symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
        getSymbolInfo: (symbol) => {
            return { fit: true, description: { text: symbol.id } };
        },
    };
},
provide: {
  diagram: [BpmnDiagrams, UndoRedo, DiagramContextMenu],
  SymbolPalette:[BpmnDiagrams]

},
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
