import Vue from 'vue';
import { SymbolPalettePlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
new Vue({
    el: '#app',
    template: `
  <div id='app'>
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" width="100%" height="700px"
      :symbolHeight="80" :symbolWidth="80" :expandMode="expandMode" :palettes="palettes"
      :symbolMargin="symbolMargin">
    </ejs-symbolpalette>
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
    },
});
