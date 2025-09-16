import Vue from 'vue';
import { SymbolPalettePlugin, DiagramPlugin, NodeConstraints } from '@syncfusion/ej2-vue-diagrams';

Vue.use(SymbolPalettePlugin);
Vue.use(DiagramPlugin);
let symbolPaletteInstance;
let checkBoxInstance;
new Vue({
    el: '#app',
    template: `
        <div id="app">
            <ejs-symbolpalette
                id="symbolpalette"
                ref="symbolPalette"
                width="700px"
                height="300px"
                :expandMode="expandMode"
                :palettes="palettes"
                :symbolHeight="70"
                :symbolWidth="70"
                :symbolPreview="symbolPreview"
                :symbolMargin="symbolMargin"
                :getSymbolInfo="getSymbolInfo"
                :getNodeDefaults="getNodeDefaults"
            ></ejs-symbolpalette>
            <input id="showTooltip" ref="checkBox" @click="showTooltip" checked type="checkbox" />Show
            Tooltip
        </div>`,
    data() {
        return {
            expandMode: "Multiple",
            symbolPreview: { height: 80, width: 80 },
            symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
            palettes: [
                {
                    id: "flow",
                    expanded: true,
                    symbols: this.getFlowShapes(),
                    title: "Flow Shapes",
                },
                {
                    id: "basic",
                    expanded: true,
                    symbols: this.getBasicShapes(),
                    title: "Basic Shapes",
                },
            ],
        };
    },
    methods: {
        // Initialize the flow shapes for the symbol palette.
        getFlowShapes() {
            return [
                { id: "Terminator", shape: { type: "Flow", shape: "Terminator" } },
                { id: "Process", shape: { type: "Flow", shape: "Process" } },
                { id: "Decision", shape: { type: "Flow", shape: "Decision" } },
                { id: "Document", shape: { type: "Flow", shape: "Document" } },
                { id: "PreDefinedProcess", shape: { type: "Flow", shape: "PreDefinedProcess" } },
                { id: "DirectData", shape: { type: "Flow", shape: "DirectData" } },
                { id: "Card", shape: { type: "Flow", shape: "Card" } },
                { id: "Collate", shape: { type: "Flow", shape: "Collate" } },
            ];
        },
        // Initialize the basic shapes for the symbol palette.
        getBasicShapes() {
            return [
                { id: "Rectangle", shape: { type: "Basic", shape: "Rectangle" } },
                { id: "Ellipse", shape: { type: "Basic", shape: "Ellipse" } },
                { id: "Triangle", shape: { type: "Basic", shape: "Triangle" } },
                { id: "Hexagon", shape: { type: "Basic", shape: "Hexagon" } },
                { id: "Parallelogram", shape: { type: "Basic", shape: "Parallelogram" } },
                { id: "Diamond", shape: { type: "Basic", shape: "Diamond" } },
                { id: "Pentagon", shape: { type: "Basic", shape: "Pentagon" } },
                { id: "Heptagon", shape: { type: "Basic", shape: "Heptagon" } },
            ];
        },
        getSymbolInfo: function (symbol) {
            return {  showTooltip: checkBoxInstance && checkBoxInstance.checked };
        },
        getNodeDefaults: function (symbol) {
            symbol.style.fill = "#6495ED";
            symbol.style.strokeColor = "#6495ED";
            return symbol;
        },
        showTooltip: function (args) {
            symbolPaletteInstance.refresh();
        },
    },
    mounted() {
        symbolPaletteInstance = this.$refs.symbolPalette.ej2Instances;
        checkBoxInstance = this.$refs.checkBox;
    },
});
