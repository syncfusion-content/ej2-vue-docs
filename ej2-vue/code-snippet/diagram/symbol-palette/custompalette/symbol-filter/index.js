import Vue from 'vue';
import { SymbolPalettePlugin, DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
Vue.use(DiagramPlugin);

new Vue({
    el: '#app',
    template: `
  <div id="app">
    <ejs-symbolpalette id="symbolpalette" width="100%" height="100%"
      :palettes="palettes" :symbolWidth="60" :symbolHeight="60"
      :enableSearch="enableSearch" :filterSymbols="filterSymbols" >
    </ejs-symbolpalette>
    <ejs-diagram id="diagram" width="1000px" height="500px">
    </ejs-diagram>
  </div>
  `,
    data() {
        return {
            enableSearch: true,
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
        getFlowShapes() {
            return [
                {
                    id: "process",
                    shape: {
                        type: "Flow",
                        shape: "Process",
                    },
                },
                {
                    id: "terminator",
                    shape: {
                        type: "Flow",
                        shape: "Terminator",
                    },
                },
                {
                    id: "decision",
                    shape: {
                        type: "Flow",
                        shape: "Decision",
                    },
                },
                {
                    id: "document",
                    shape: {
                        type: "Flow",
                        shape: "Document",
                    },
                },
                {
                    id: "data",
                    shape: {
                        type: "Flow",
                        shape: "Data",
                    },
                },
            ];
        },
        filterSymbols(symbols) {
            return symbols.filter(symbol => symbol.shape.type === 'Flow');
        },
    },
});
