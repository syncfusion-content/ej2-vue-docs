import Vue from 'vue';
import { SymbolPalettePlugin, DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
Vue.use(DiagramPlugin);

new Vue({
    el: '#app',
    template: `
  <div id='app'>
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes" :symbolDragSize="symbolDragSize">
    </ejs-symbolpalette>
    <ejs-diagram id="diagram" width="1000px" height="500px">
    </ejs-diagram>
  </div>
  `,
    data() {
        return {
            palettes: [{
                id: "basic",
                expanded: true,
                symbols: this.getBasicShapes(),
                title: "Basic Shapes",
            }],
            // Defines the size of the shape while dragging it from the palette to the diagram canvas
            symbolDragSize: { height: 30, width: 40 },
        };
    },
    methods: {
        getBasicShapes() {
            return [
                {
                    id: "rectangle",
                    shape: {
                        type: "Basic", shape: "Rectangle",
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
