import Vue from 'vue';
import { DiagramPlugin, SymbolPalettePlugin, randomId } from '@syncfusion/ej2-vue-diagrams';

let symbolPaletteInstance;
Vue.use(DiagramPlugin);
Vue.use(SymbolPalettePlugin);

new Vue({
    el: '#app',
    template: `
  <div id='app'>
    <button id="addBasicShape" @click="addBasicShape">Add BasicShape</button>
    <button id="addFlowShape" @click="addFlowShape">Add FlowShape</button>
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" width="100%" height="100%" :expandMode="expandMode"
      :palettes="palettes" :symbolHeight="symbolHeight" :symbolWidth="symbolWidth">
    </ejs-symbolpalette>
  </div>
`,
    data() {
        return {
            expandMode: 'Multiple',
            symbolWidth: 50,
            symbolHeight: 50,
            palettes: [
                {
                    id: "basic",
                    expanded: true,
                    symbols: this.getBasicShapes(),
                    title: "Basic Shapes",
                },
                {
                    id: "flow",
                    expanded: true,
                    symbols: this.getFlowShapes(),
                    title: "Flow Shapes",
                }
            ],
        };
    },
    methods: {
        getBasicShapes() {
            return [
                {
                    id: "Rectangle",
                    shape: { type: "Basic", shape: "Rectangle" },
                    style: { strokeWidth: 2 },
                },
                {
                    id: "Ellipse",
                    shape: { type: "Basic", shape: "Ellipse" },
                    style: { strokeWidth: 2 },
                }
            ];
        },
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
                }
            ];
        },
        addBasicShape() {
            const node = {
                id: "Plus" + randomId(),
                shape: { type: "Basic", shape: "Plus" },
                style: { strokeWidth: 2 },
            };
            symbolPaletteInstance.addPaletteItem("basic", node);
        },
        addFlowShape() {
            const node = {
                id: "Decision" + randomId(),
                shape: { type: "Flow", shape: "Decision" },
                style: { strokeWidth: 2 },
            };
            symbolPaletteInstance.addPaletteItem("flow", node);
        }
    },
    mounted() {
        symbolPaletteInstance = this.$refs.symbolPalette.ej2Instances;
    }
});
