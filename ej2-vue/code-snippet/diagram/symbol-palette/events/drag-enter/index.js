import Vue from 'vue';
import { SymbolPalettePlugin, DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
Vue.use(DiagramPlugin);

new Vue({
    el: '#app',
    template: `
  <div id="app">
    <ejs-symbolpalette id="symbolpalette" :palettes="palettes"
      :symbolHeight="50" :symbolWidth="70">
    </ejs-symbolpalette>
    <ejs-diagram ref="diagram" id="diagram" width="1000" height="500px"
      @dragEnter="dragEnter">
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
        dragEnter(args) {
            // Dragged symbol
            console.log(args.element.id);
            // Customize
            args.element.style.fill = "yellow";
            this.$refs.diagram.dataBind();
        },
    },
});
