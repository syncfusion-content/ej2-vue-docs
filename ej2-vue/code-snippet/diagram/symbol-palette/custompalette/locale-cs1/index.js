import Vue from 'vue';
import { SymbolPalettePlugin } from '@syncfusion/ej2-vue-diagrams';
import { L10n, setCulture } from "@syncfusion/ej2-base";

Vue.use(SymbolPalettePlugin);

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
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes"
      :symbolWidth="80" :symbolHeight="80" :enableSearch="true" :enableAnimation="false"
      :locale="locale">
    </ejs-symbolpalette>
  </div>
  `,
    data() {
        return {
            palettes: [],
            locale: "de-DE", // Set default locale
        };
    },
    mounted() {
        this.palettes = [
            {
                id: "basic",
                symbols: this.getBasicShapes(),
                title: "Basic Shapes",
            },
        ];
    },
    methods: {
        getBasicShapes() {
            return [
                {
                    id: "Rectangle",
                    shape: {
                        type: "Basic",
                        shape: "Rectangle",
                    },
                },
                {
                    id: "Ellipse",
                    shape: {
                        type: "Basic",
                        shape: "Ellipse",
                    },
                },
                {
                    id: "Hexagon",
                    shape: {
                        type: "Basic",
                        shape: "Hexagon",
                    },
                },
            ];
        },
    },
});
