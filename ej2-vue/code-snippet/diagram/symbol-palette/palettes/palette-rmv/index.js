import Vue from 'vue';
import { SymbolPalettePlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
let symbolPaletteInstance;
new Vue({
    el: '#app',
    template: `
  <div id='app'>
    <button id="removePalette" @click="removePalette">Remove Palette</button>
    <button id="removePalettes" @click="removePalettes">Remove Palettes</button>
    <ejs-symbolpalette ref="symbolPaletteRef" id="symbolpalette" :palettes="palettes"
      :enablePersistence="enablePersistence" />
  </div>
  `,
    data() {
        return {
            enablePersistence: false,
            palettes: [
                {
                    id: 'flow',
                    symbols: this.getFlowShapes(),
                    title: 'Flow Shapes',
                },
                {
                    id: 'basic',
                    symbols: this.getBasicShapes(),
                    title: 'Basic Shapes',
                },
                {
                    id: 'connectors',
                    symbols: this.getConnectors(),
                    title: 'Connectors',
                },
            ],
        };
    },
    mounted() {
        symbolPaletteInstance = this.$refs.symbolPaletteRef.ej2Instances;
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
        getFlowShapes() {
            return [
                {
                    id: "process",
                    shape: {
                        type: "Flow",
                        shape: "Process",
                    },
                },
                {
                    id: "document",
                    shape: {
                        type: "Flow",
                        shape: "Document",
                    },
                },
                {
                    id: "predefinedprocess",
                    shape: {
                        type: "Flow",
                        shape: "PreDefinedProcess",
                    },
                },
            ];
        },
        getConnectors() {
            return [
                {
                    id: "Link1",
                    type: "Orthogonal",
                    sourcePoint: { x: 0, y: 0 },
                    targetPoint: { x: 60, y: 60 },
                    style: { strokeWidth: 1, strokeColor: "#757575" },
                    targetDecorator: {
                        shape: "Arrow",
                        style: { strokeColor: "#757575", fill: "#757575" },
                    },
                },
                {
                    id: "link3",
                    type: "Orthogonal",
                    sourcePoint: { x: 0, y: 0 },
                    targetPoint: { x: 60, y: 60 },
                    targetDecorator: { shape: "None" },
                    style: { strokeWidth: 1, strokeColor: "#757575" },
                },
                {
                    id: "Link21",
                    type: "Straight",
                    sourcePoint: { x: 0, y: 0 },
                    targetPoint: { x: 60, y: 60 },
                    style: { strokeWidth: 1, strokeColor: "#757575" },
                    targetDecorator: {
                        shape: "Arrow",
                        style: { strokeColor: "#757575", fill: "#757575" },
                    },
                },
                {
                    id: "link23",
                    type: "Straight",
                    sourcePoint: { x: 0, y: 0 },
                    targetPoint: { x: 60, y: 60 },
                    targetDecorator: { shape: "None" },
                    style: { strokeWidth: 1, strokeColor: "#757575" },
                },
                {
                    id: "link33",
                    type: "Bezier",
                    sourcePoint: { x: 0, y: 0 },
                    targetPoint: { x: 60, y: 60 },
                    targetDecorator: { shape: "None" },
                    style: { strokeWidth: 1, strokeColor: "#757575" },
                },
            ];
        },
        removePalette() {
            let paletteToRemove = 'basic';
            /**
             * parameter - The ID of palette to be removed in symbol palette.
             */
            symbolPaletteInstance.removePalette(paletteToRemove);
            symbolPaletteInstance.refresh();
        },

        removePalettes() {
            let palettesToRemove = ['flow', 'connectors'];
            /**
             * parameter - The ID array of palettes to be removed in symbol palette.
             */
            symbolPaletteInstance.removePalettes(palettesToRemove);
            symbolPaletteInstance.refresh();
        }
    },
});

