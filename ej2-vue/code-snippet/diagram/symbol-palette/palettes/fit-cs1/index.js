import Vue from 'vue';
import { SymbolPalettePlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" width="100%" height="700px" :symbolHeight="80" :symbolWidth="80"
            :expandMode="expandMode" :palettes="palettes" :getSymbolInfo="getSymbolInfo" />
    </div>
  `,
    data() {
        return {
            expandMode: 'Multiple',
            palettes: [
                {
                    id: 'basic',
                    expanded: true,
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
                    id: 'Rectangle',
                    width: 200,
                    shape: {
                        type: 'Basic',
                        shape: 'Rectangle',
                    },
                },
                {
                    id: 'Ellipse',
                    width: 200,
                    shape: {
                        type: 'Basic',
                        shape: 'Ellipse',
                    },
                },
                {
                    id: 'Hexagon',
                    width: 200,
                    shape: {
                        type: 'Basic',
                        shape: 'Hexagon',
                    },
                },
            ];
        },
        getSymbolInfo() {
            return {
                fit: true,
            };
        },
    },
});

