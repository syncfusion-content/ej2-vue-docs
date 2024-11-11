import Vue from 'vue';
import { SymbolPalettePlugin, DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
Vue.use(DiagramPlugin);

new Vue({
    el: '#app',
    template: `
  <div id='app'>
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :symbolHeight="80" :symbolWidth="80"
      :expandMode="expandMode" :palettes="palettes" :getSymbolInfo="getSymbolInfo"
      :symbolMargin="symbolMargin" :symbolPreview="symbolPreview">
    </ejs-symbolpalette>
    <ejs-diagram id="diagram" width="1000px" height="500px"></ejs-diagram>
  </div>
  `,
    data() {
        return {
            expandMode: 'Multiple',
            palettes: [{
                id: "basic",
                expanded: true,
                symbols: this.getBasicShapes(),
                title: "Basic Shapes",
                iconCss: "e-ddb-icons e-basic",
            }],
            symbolMargin: {
                left: 15,
                right: 15,
                top: 15,
                bottom: 15,
            },
            symbolPreview: {
                height: 100,
                width: 100,
                offset: {
                    x: 1,
                    y: 0.5,
                },
            },
        };
    },
    methods: {
        getBasicShapes() {
            return [
                {
                    id: "Rectangle",
                    shape: {
                        type: "Basic",
                        shape: "Rectangle",
                    },
                },
                {
                    id: "Ellipse",
                    shape: {
                        type: "Basic",
                        shape: "Ellipse",
                    },
                },
                {
                    id: "Hexagon",
                    shape: {
                        type: "Basic",
                        shape: "Hexagon",
                    },
                },
            ];
        },
        getSymbolInfo() {
            return {
                fit: true, // Enables to fit the content into the specified palette item size
            };
        },
    },
});
