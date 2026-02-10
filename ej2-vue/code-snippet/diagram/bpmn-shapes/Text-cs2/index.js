
import Vue from 'vue';
import {  DiagramPlugin,
    Diagram,
    SymbolPalette,SymbolPalettePlugin,BpmnDiagrams,UndoRedo,DiagramContextMenu,} from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
Vue.use(SymbolPalettePlugin);
Diagram.Inject(BpmnDiagrams,UndoRedo,DiagramContextMenu);
SymbolPalette.Inject(BpmnDiagrams);

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
new Vue({
el: '#app',
template: `
<div style="width: 100%">
    <div id="palette-space" class="sb-mobile-palette">
    <ejs-symbolpalette
        id="symbolpalette"
        :palettes="palettes"
        :width="palettewidth"
        :height="paletteheight"
        :getNodeDefaults="palettegetNodeDefaults"
        :getSymbolInfo="getSymbolInfo"
        :symbolMargin="symbolMargin"
        :symbolHeight="symbolHeight"
        :symbolWidth="symbolWidth"
    ></ejs-symbolpalette>
    </div>
    <div id="diagram-space" class="sb-mobile-diagram">
    <ejs-diagram
        style="display: block"
        ref="diagramObject"
        id="diagram"
        :width="width"
        :height="height"
    ></ejs-diagram>
    </div>
</div>
`,

    name: 'app',
    data() {
        return {
            width: '100%',
            height: '500px',
            palettes: [
                {
                    id: 'uml',
                    expanded: true,
                    symbols: bpmnShapes,
                    title: 'BPMN Shapes',
                },
            ],
            palettewidth: '100%',
            paletteheight: '500px',
            symbolHeight: 100,
            symbolWidth: 100,
            symbolMargin: {
                left: 12,
                right: 12,
                top: 12,
                bottom: 12,
            },
            palettegetNodeDefaults: (symbol) => {
                symbol.width = 100;
                symbol.height = 100;
            },
            symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
            getSymbolInfo: (symbol) => {
                return { fit: true, description: { text: symbol.id } };
            },
        };
    }

});