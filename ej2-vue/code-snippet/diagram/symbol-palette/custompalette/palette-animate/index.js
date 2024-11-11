import Vue from 'vue';
import { SymbolPalettePlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
new Vue({
    el: '#app',
    template: `
  <div id="app">
    <label>Enable animation</label>
    <input style="margin-left: 5px" id="enableAnimation" type="checkbox" v-model="enableAnimation"/>
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes" :enableAnimation="enableAnimation" />
  </div>
  `,
    data() {
        return {
            enableAnimation: true,
            palettes: [
                {
                    id: 'basic',
                    symbols: this.getBasicShapes(),
                    title: 'Basic Shapes',
                    iconCss: 'e-ddb-icons e-basic',
                },
            ],
        };
    },
    methods: {
        getBasicShapes() {
            return [
                {
                    id: 'rectangle',
                    shape: {
                        type: 'Basic',
                        shape: 'Rectangle',
                    },
                },
                {
                    id: 'plus',
                    shape: {
                        type: 'Basic',
                        shape: 'Plus',
                    },
                },
                {
                    id: 'triangle',
                    shape: {
                        type: 'Basic',
                        shape: 'RightTriangle',
                    },
                },
            ];
        },
    },
});
