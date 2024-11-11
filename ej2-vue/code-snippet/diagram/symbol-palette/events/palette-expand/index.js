import Vue from 'vue';
import { SymbolPalettePlugin, DiagramPlugin, NodeConstraints } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
Vue.use(DiagramPlugin);

new Vue({
    el: '#app',
    template: `
  <div id="app">
    <ejs-symbolpalette id="symbolpalette" :palettes="palettes"
      :symbolHeight="50" :symbolWidth="70"
      @paletteExpanding="paletteExpanding">
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
        paletteExpanding(args) {
            if (args.isExpanded) {
                alert("Palette expanded");
            } else {
                alert("Palette collapsed");
            }
        },
    },
});
