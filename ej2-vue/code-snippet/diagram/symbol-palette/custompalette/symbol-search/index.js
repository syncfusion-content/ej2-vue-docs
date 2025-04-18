import Vue from 'vue';
import { SymbolPalettePlugin, DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
Vue.use(DiagramPlugin);

new Vue({
    el: '#app',
    template: `
  <div id="app">
    <ejs-symbolpalette id="symbolpalette" width="100%" height="100%"
      :palettes="palettes" :symbolWidth="60" :symbolHeight="60" :enableSearch="enableSearch">
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
                    symbols: this.getFlowShapes(),
                    title: "Basic Shapes",
                },
            ],
        };
    },
    methods: {
        getFlowShapes() {
            return [
                { id: "terminator", shape: { type: "Flow", shape: "Terminator" } },
                { id: "process", shape: { type: "Flow", shape: "Process" } },
                { id: "decision", shape: { type: "Flow", shape: "Decision" } },
                { id: "document", shape: { type: "Flow", shape: "Document" } },
                { id: "preDefinedProcess", shape: { type: "Flow", shape: "PreDefinedProcess" } },
                { id: "paperTap", shape: { type: "Flow", shape: "PaperTap" } },
                { id: "directData", shape: { type: "Flow", shape: "DirectData" } },
                { id: "sequentialData", shape: { type: "Flow", shape: "SequentialData" } },
                { id: "sort", shape: { type: "Flow", shape: "Sort" } },
            ];
        },
    },
});
