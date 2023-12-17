
    import Vue from 'vue';
    import {  DiagramPlugin,
        Diagram,
        NodeModel,
        UndoRedo,
        ConnectorModel,
        Node,
        Connector,
        SymbolPalette,SymbolPalettePlugin,
        SymbolInfo,NodeConstraints,
        ShapeModel,ExpandMode} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    Vue.use(SymbolPalettePlugin);
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
        }, style: { strokeWidth: 2 },
        tooltip:{
            content: 'Customized Tooltip',
        },
        //enable customized tooltip to display on the symbol
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip
    },
    {
        id: 'Hexagon',
        shape: {
            type: 'Basic',
            shape: 'Hexagon'
        }, style: { strokeWidth: 2 }
    }
];
    let swimlaneShapes = [        {
            id: 'swimlaneShapes', expanded: true,
            title: 'Swimlane Shapes',
            symbols: [
                {
                    id: 'stackCanvas1',
                    shape: {
                        type: 'SwimLane',lanes: [
                            {
                                id: 'lane1',
                                style: { fill: '#f5f5f5'},height: 60, width: 150,
                                header:{ width: 50, height: 50, style: {fill:'#C7D4DF'} },
                            }
                        ],
                        orientation: 'Horizontal', isLane: true
                    },
                    height: 60,
                    width: 140,
                    style: { fill: '#f5f5f5'},
                    offsetX: 70,
                    offsetY: 30,
                }
            ]
        },
]
    let palette;
    let size;
    let expand;
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :width='palettewidth' :height='paletteheight'
        :symbolHeight='symbolHeight' :symbolWidth='symbolWidth' :getSymbolInfo='getSymbolInfo'
        ></ejs-symbolpalette>
    </div>
`,

        name: 'app',
        data() {
            return {
                //Defines how many palettes can be at expanded mode at a time
                expandMode: "Multiple",
                //Defines the palette collection
                palettes: [{
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
                }, ],
                palettewidth: "100%",
                paletteheight: "700px",
                symbolHeight: 80,
                symbolWidth: 80,
                getSymbolInfo: (symbol) => {
                    //Sets the description for symbols
                    return { width: 75, height: 40, description: { text: symbol.shape['shape'], color : 'red', bold: true, fontSize: 15, fontFamily : 'Arial', italic : true, textDecoration : 'Underline', margin : {top : 30, left : 0, right : 0, bottom :30}} };
                }
            };
        }
    
});