import Vue from 'vue';
import { SymbolPalettePlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
new Vue({
    el: '#app',
    template: `
  <div id='app'>
    <ejs-symbolpalette
      ref="symbolPalette"
      id="symbolpalette"
      :palettes="palettes"
      :getSymbolInfo="getSymbolInfo"
    />
  </div>
  `,
    data() {
        return {
            palettes: [
                {
                    id: 'basic',
                    symbols: this.getBasicShapes(),
                    title: 'Basic Shapes',
                },
            ],
        };
    },
    methods: {
        getBasicShapes() {
            return [
                {
                    id: 'Rectangle-symbol',
                    shape: {
                        type: 'Basic',
                        shape: 'Rectangle',
                    },
                },
                {
                    id: 'Ellipse-symbol',
                    shape: {
                        type: 'Basic',
                        shape: 'Ellipse',
                    },
                },
                {
                    id: 'Hexagon-symbol',
                    shape: {
                        type: 'Basic',
                        shape: 'Hexagon',
                    },
                },
            ];
        },
        getSymbolInfo(symbol) {
            return {
                width: 50,
                height: 50,
                description: {
                    text: symbol.id,
                    wrap:
                        symbol.id === 'Rectangle-symbol' || symbol.id === 'Ellipse-symbol'
                            ? 'NoWrap'
                            : 'WrapWithOverflow',
                    overflow: symbol.id === 'Rectangle-symbol' ? 'Ellipsis' : 'Clip',

                },
            };
        },
    },
});
