import Vue from 'vue';
import { SymbolPalettePlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
new Vue({
    el: '#app',
    template: `
  <div id='app'>
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes" :getSymbolInfo="getSymbolInfo"
      enableSearch="true">
    </ejs-symbolpalette>
  </div>
  `,
    data() {
        return {
            palettes: [
                {
                    id: "basic",
                    symbols: this.getBasicShapes(),
                    title: "Basic Shapes",
                },
                {
                    id: "flow",
                    symbols: this.getFlowShapes(),
                    title: "Flow Shapes",
                },
            ],
        };
    },
    methods: {
        // Initialize the basic shapes for the symbol palette
        getBasicShapes() {
            return [
                {
                    id: "Rectangle-symbol",
                    shape: {
                        type: "Basic",
                        shape: "Rectangle",
                    },
                },
                {
                    id: "Ellipse-symbol",
                    shape: {
                        type: "Basic",
                        shape: "Ellipse",
                    },
                },
                {
                    id: "Hexagon-symbol",
                    shape: {
                        type: "Basic",
                        shape: "Hexagon",
                    },
                },
            ];
        },
        // Initialize the flow shapes for the symbol palette
        getFlowShapes() {
            return [
                {
                    id: "Process",
                    shape: { type: "Flow", shape: "Process" },
                    style: { strokeWidth: 2 },
                },
                {
                    id: "Document",
                    shape: { type: "Flow", shape: "Document" },
                    style: { strokeWidth: 2 },
                },
            ];
        },
        // Description appearance customization of a symbol
        getSymbolInfo(symbol) {
            return {
                width: 100,
                height: 50,
                description: {
                    // Defines the description text for the symbol
                    text: symbol.id,
                    // Defines the margin between the symbol and text
                    margin: { top: 20, bottom: 10 },
                    // Defines the background color of the text
                    fill: "green",
                    // Defines the font family of the text
                    fontFamily: "Calibri",
                    // Defines the font size of the text
                    fontSize: 15,
                    // Defines if the text is bold
                    bold: true,
                    // Defines if the text is italic
                    italic: true,
                    // Defines the text decoration
                    textDecoration: "Underline",
                    // Defines the color of the text
                    color: "white",
                },
            };
        },
    },
});
