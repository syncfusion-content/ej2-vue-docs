import Vue from 'vue';
import { SymbolPalettePlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);

let palettes = [{
    id: "connectors",
    expanded: true,
    symbols: getConnectors(),
    title: "Connectors",
    iconCss: "e-ddb-icons e-connector",
}];

function getConnectors() {
    return [
        {
            id: "Straight",
            type: "Straight",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: "Arrow",
                style: { strokeColor: "#757575", fill: "#757575" },
            },
            style: { strokeWidth: 1, strokeColor: "#757575" },
        },
        {
            id: "Orthogonal",
            type: "Orthogonal",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: "Arrow",
                style: { strokeColor: "#757575", fill: "#757575" },
            },
            style: { strokeWidth: 1, strokeColor: "#757575" },
        },
        {
            id: "Bezier",
            type: "Bezier",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: "Arrow",
                style: { strokeColor: "#757575", fill: "#757575" },
            },
            style: { strokeWidth: 1, strokeColor: "#757575" },
        },
    ];
}

new Vue({
    el: '#app',
    template: `
        <div id="app">
            <ejs-symbolpalette id="symbolpalette" width="100%" height="100%" :expandMode="'Single'" :palettes="palettes" :symbolHeight="80" :symbolWidth="80">
            </ejs-symbolpalette>
        </div>
    `,
    data() {
        return {
            palettes: palettes,
        };
    },
    methods: {
        getConnectors,
    }
});
