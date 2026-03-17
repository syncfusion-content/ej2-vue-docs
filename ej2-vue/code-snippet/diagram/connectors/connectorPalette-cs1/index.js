import Vue from 'vue';
import { DiagramPlugin, SymbolPalettePlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
Vue.use(SymbolPalettePlugin);
let connectorSymbols = [{
    id: 'orthogonal',
    type: 'Orthogonal',
    sourcePoint: {
        x: 0,
        y: 0
    },
    targetPoint: {
        x: 40,
        y: 40
    },
},
{
    id: 'straight',
    type: 'Straight',
    sourcePoint: {
        x: 0,
        y: 0
    },
    targetPoint: {
        x: 40,
        y: 40
    },
},
{
    id: 'bezier',
    type: 'Bezier',
    sourcePoint: {
        x: 0,
        y: 0
    },
    targetPoint: {
        x: 40,
        y: 40
    },
    targetDecorator: {
        shape: 'None'
    }
}
];

new Vue({
    el: '#app',
    template: `
    <div id="app">
    <ejs-symbolpalette id="symbolpalette" :palettes='palettes' :width='palettewidth'
    :height='paletteheight' :symbolHeight='symbolHeight' :symbolWidth='symbolWidth'></ejs-symbolpalette>
    <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'></ejs-diagram>
    </div>
`,
    name: 'app',
     data() {
        return {
            width: "100%",
            height: "350px",
            palettewidth: "100%",
            paletteheight: "150px",
            palettes: [
                {
                    id: "connector",
                    symbols: connectorSymbols,
                    title: "connectorSymbols"
                },
            ],
            symbolHeight: 60,
            symbolWidth: 60,

        }
    }

});