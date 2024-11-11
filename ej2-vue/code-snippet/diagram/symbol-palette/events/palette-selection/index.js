import Vue from 'vue';
import { SymbolPalettePlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);

new Vue({
    el: '#app',
    template: `
  <div id="app">
    <ejs-symbolpalette id="symbolpalette" :palettes="palettes"
      :symbolHeight="50" :symbolWidth="70"
      @paletteSelectionChange="paletteSelectionChange">
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
        paletteSelectionChange(args) {
            console.log(args.newValue);
        },
    },
});
