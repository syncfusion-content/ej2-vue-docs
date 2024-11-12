import Vue from 'vue';
import { SymbolPalettePlugin, NodeConstraints } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
new Vue({
    el: '#app',
    template: `
  <div id='app'>
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes"
      :getSymbolInfo="getSymbolInfo">
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
                    iconCss: "e-ddb-icons e-basic",
                },
            ],
        };
    },
    methods: {
        // Initialize the basic shapes for the symbol palette
        getBasicShapes() {
            return [
                {
                    id: "rectangle",
                    shape: {
                        type: "Basic",
                        shape: "Rectangle",
                    },
                    // Defines the tooltip for the shape
                    tooltip: { content: "Rectangle Basic shape", relativeMode: "Object" },
                    constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
                },
                {
                    id: "plus",
                    shape: {
                        type: "Basic",
                        shape: "Plus",
                    },
                    // Defines the tooltip for the shape
                    tooltip: { content: "Plus Basic shape", relativeMode: "Object" },
                    constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
                },
                {
                    id: "triangle",
                    shape: {
                        type: "Basic",
                        shape: "RightTriangle",
                    },
                    // Defines the tooltip for the shape
                    tooltip: { content: "RightTriangle Basic shape", relativeMode: "Object" },
                    constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
                },
            ];
        },
        // Sets the description of a symbol
        getSymbolInfo(symbol) {
            return {
                width: 50,
                height: 50,
                description: {
                    // Defines the description text for the symbol
                    text: symbol.id,
                },
            };
        },
    },
});
