
    import Vue from 'vue';
    import {  DiagramPlugin,
  Diagram,
  NodeModel,
  UndoRedo,
  ConnectorModel,
  Node,
  Connector,
  SymbolPalette,SymbolPalettePlugin,
  SymbolInfo,
  ShapeModel} from '@syncfusion/ej2-vue-diagrams';
  import { ExpandMode } from "@syncfusion/ej2-vue-navigations";
  Vue.use(DiagramPlugin);
  Vue.use(SymbolPalettePlugin);
 let swimlaneShapes : NodeModel[]= [
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
let palette: any;
let size: any;
let expand: any;

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes'
        :getSymbolInfo='getSymbolInfo' :symbolMargin='symbolMargin' :width='palettewidth' :getNodeDefaults='palettegetNodeDefaults' :symbolPreview='symbolPreview' :height='paletteheight'   :symbolHeight='symbolHeight'
                               :symbolWidth='symbolWidth'></ejs-symbolpalette>
    </div>
`,

    name: 'app'
    data() {
        return {
            //Defines how many palettes can be at expanded mode at a time
            expandMode: "Multiple",
            //Defines the palette collection
            palettes: [{
                id: 'swimlane',
                expanded: true,
                symbols: swimlaneShapes,
                title: 'Swimlane Shapes',
                iconCss: 'e-ddb-icons e-basic'
            }],
            symbolMargin: {
                left: 15,
                right: 15,
                top: 15,
                bottom: 15
            },
            palettegetNodeDefaults: (node: NodeModel): void => {
                node.width = 100;
                node.height = 100;
                node.style.strokeColor = '#3A3A3A';
            },
            getSymbolInfo: (symbol: NodeModel): SymbolInfo => {
                return {
                    fit: true
                };
            },
            symbolPreview: {
                height: 100,
                width: 100,
                offset: {
                    x: 0.5,
                    y: 0.5
                }
            },
            palettewidth: "100%",
            paletteheight: "700px",
            symbolHeight: 60,
            symbolWidth: 60,
        };
    }

});