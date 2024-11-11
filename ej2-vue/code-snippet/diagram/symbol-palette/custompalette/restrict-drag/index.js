import Vue from 'vue';
import { SymbolPalettePlugin, DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
import { L10n, setCulture } from "@syncfusion/ej2-base";

Vue.use(SymbolPalettePlugin);
Vue.use(DiagramPlugin);

// Set culture to German
setCulture("de");

// Load locale text for the SearchShapes
L10n.load({
    "de-DE": {
        SymbolPalette: {
            SearchShapes: "Formen suchen",
        },
    },
});
new Vue({
    el: '#app',
    template: `
  <div id="app">
    <ejs-symbolpalette id="symbolpalette" width="100%" height="100%"
      :symbolWidth="80" :symbolHeight="80" :palettes="palettes" :allowDrag="allowDrag">
    </ejs-symbolpalette>
    <ejs-diagram id="diagram" width="1000px" height="500px">
    </ejs-diagram>
  </div>
  `,
    data() {
        return {
            allowDrag: false,
            palettes: [
                {
                    id: "basic",
                    symbols: this.getBasicShapes(),
                    title: "Basic Shapes",
                },
            ],
        };
    },
    methods: {
        getBasicShapes() {
            return [
                {
                    id: "rectangle",
                    shape: {
                        type: "Basic",
                        shape: "Rectangle",
                    },
                },
                {
                    id: "plus",
                    shape: {
                        type: "Basic",
                        shape: "Plus",
                    },
                },
                {
                    id: "triangle",
                    shape: {
                        type: "Basic",
                        shape: "RightTriangle",
                    },
                },
            ];
        },
    },
});
