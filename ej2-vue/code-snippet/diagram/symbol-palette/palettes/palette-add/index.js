import Vue from 'vue';
import { SymbolPalettePlugin, randomId } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);

new Vue({
    el: '#app',
    template: `
  <div id='app'>
    <button id="addPalette" @click="addPalette">Add Palette</button>
    <ejs-symbolpalette ref="symbolPaletteRef" id="symbolpalette" :palettes="palettes"
      :enablePersistence="enablePersistence" />
  </div>
  `,
    data() {
        return {
            enablePersistence: false,
            palettes: [
                {
                    id: "flow",
                    symbols: this.getFlowShapes(),
                    title: "Flow Shapes",
                },
                {
                    id: "connectors",
                    symbols: this.getConnectors(),
                    title: "Connectors",
                },
            ],
        };
    },
    methods: {
        getFlowShapes() {
            return [
                {
                    id: "process",
                    shape: { type: "Flow", shape: "Process" },
                },
                {
                    id: "document",
                    shape: { type: "Flow", shape: "Document" },
                },
                {
                    id: "predefinedprocess",
                    shape: { type: "Flow", shape: "PreDefinedProcess" },
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
        addPalette() {
            let newPaletteShapes = [
                {
                    id: "rectangle" + randomId(),
                    shape: { type: "Basic", shape: "Rectangle" },
                },
                {
                    id: "plus" + randomId(),
                    shape: { type: "Basic", shape: "Plus" },
                },
            ];

            let newPalette = [
                {
                    id: "basic" + randomId(),
                    symbols: newPaletteShapes,
                    title: "New Shapes",
                },
            ];
            this.$refs.symbolPaletteRef.ej2Instances.addPalettes(newPalette);
        },
    },
});

