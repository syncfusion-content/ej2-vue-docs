import Vue from 'vue';
import { SymbolPalettePlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);

new Vue({
    el: '#app',
    template: `
  <div id="app">
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" width="100%" height="100%" :expandMode="expandMode"
      :enableSearch="true" :palettes="palettes" :symbolHeight="80" :symbolWidth="80" :symbolPreview="symbolPreview"
      @paletteExpanding="paletteExpanding">
    </ejs-symbolpalette>
  </div>
  `,
    data() {
        return {
            expandMode: "Multiple", // Allows multiple palettes to be expanded
            palettes: [{
                id: "flow",
                expanded: true,
                symbols: this.getFlowShapes(),
                title: "Flow Shapes",
                iconCss: "e-ddb-icons e-flow",
            },
            {
                id: "basic",
                expanded: true,
                symbols: this.getBasicShapes(),
                title: "Basic Shapes",
                iconCss: "e-ddb-icons e-basic",
            }],
            symbolPreview: [
                {
                    height: 100,
                    width: 100,
                },
            ],
        };
    },
    methods: {
        paletteExpanding(args) {
            if (args.palette.id === "basic") {
                // Basic shapes panel does not collapse
                args.cancel = true;
            } else {
                // Flow shapes panel collapses and expands
                args.cancel = false;
            }
        },
        getBasicShapes() {
            return [
                {
                    id: "Rectangle",
                    shape: { type: "Basic", shape: "Rectangle" },
                },
                {
                    id: "Ellipse",
                    shape: { type: "Basic", shape: "Ellipse" },
                },
                {
                    id: "Hexagon",
                    shape: { type: "Basic", shape: "Hexagon" },
                },
            ];
        },
        getFlowShapes() {
            return [
                {
                    id: "process",
                    shape: { type: "Flow", shape: "Process" },
                },
                {
                    id: "document",
                    shape: { type: "Flow", shape: "Document" },
                },
            ];
        },
    },
});
