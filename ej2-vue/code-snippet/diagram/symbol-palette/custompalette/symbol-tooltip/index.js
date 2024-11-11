import Vue from 'vue';
import { SymbolPalettePlugin, DiagramPlugin, NodeConstraints } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
Vue.use(DiagramPlugin);

new Vue({
    el: '#app',
    template: `
  <div id="app">
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes"
      :symbolWidth="80" :symbolHeight="80">
    </ejs-symbolpalette>
    <ejs-diagram id="diagram" width="1000px" height="500px" @dragEnter="dragEnter">
    </ejs-diagram>
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
        getBasicShapes() {
            return [
                {
                    id: "rectangle",
                    shape: {
                        type: "Basic",
                        shape: "Rectangle",
                    },
                    tooltip: { content: "Rectangle Basic shape", relativeMode: "Object" },
                    constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
                },
                {
                    id: "plus",
                    shape: {
                        type: "Basic",
                        shape: "Plus",
                    },
                    tooltip: { content: "Plus Basic shape", relativeMode: "Object" },
                    constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
                },
                {
                    id: "triangle",
                    shape: {
                        type: "Basic",
                        shape: "RightTriangle",
                    },
                    tooltip: { content: "RightTriangle Basic shape", relativeMode: "Object" },
                    constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
                },
            ];
        },
        dragEnter(args) {
            const node = args.element; // Retrieve the dragged node
            // Update the tooltip content based on the shape
            node.tooltip.content = `New ${node.shape.shape} node`;
        },
    },
});
