

<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :palettes='palettes' :width='palettewidth' :height='paletteheight' :symbolMargin='symbolMargin' :getNodeDefaults='palettegetNodeDefaults'
        :symbolHeight='symbolHeight' :symbolWidth='symbolWidth' :getSymbolInfo='getSymbolInfo'
        ></ejs-symbolpalette>
    </div>
</template>
<script>
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
                            { name: 'accepted', type: 'Date', style: { color: "red", fontFamily: "Arial", textDecoration: 'Underline',  italic: true },isSeparator: true },
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
   
    let palette;
    export default {
        name: 'app',
        data() {
            return {
                //Defines the palette collection
                palettes: [{
                    id: 'uml',
                    expanded: true,
                    symbols: umlShapes,
                    title: 'UML Shapes',
                },
                ],
                palettewidth: "100%",
                paletteheight: "700px",
                symbolHeight: 80,
                symbolWidth: 80,
                symbolMargin: { left: 12, right: 12, top: 12, bottom: 12 },
                palettegetNodeDefaults: (symbol) => {
                    symbol.width = 100;
                    symbol.height = 100;
                },
                getSymbolInfo: (symbol) => {
                    //Sets the description for symbols
                    return { fit: true,description: { text: symbol.id, } };
                }
            };
        }
    }
</script>
<style>
    @import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


