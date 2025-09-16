<template>
  <div id="app">
    <ejs-symbolpalette
      id="symbolpalette"
      ref="symbolPaletteRef"
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
  </div>
</template>

<script setup>

import { ref } from "vue";
import {
  SymbolPaletteComponent as EjsSymbolpalette,
  DiagramComponent as EjsDiagram,
  NodeConstraints,
} from "@syncfusion/ej2-vue-diagrams";

let symbolPaletteInstance;
let checkBoxInstance;
const expandMode = ref("Multiple");
const symbolPreview = ref({
  height: 80,
  width: 80,
});
const symbolMargin = ref({
  left: 15,
  right: 15,
  top: 15,
  bottom: 15,
});
const palettes = ref([
  {
    id: "flow",
    expanded: true,
    symbols: getFlowShapes(),
    title: "Flow Shapes",
  },
  {
    id: "basic",
    expanded: true,
    symbols: getBasicShapes(),
    title: "Basic Shapes",
  },
]);
const symbolPaletteRef = ref(null);
const checkBox = ref(null);

// Initialize the flow shapes for the symbol palette.
function getFlowShapes() {
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
}

// Initialize the basic shapes for the symbol palette.
function getBasicShapes() {
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
}
function getSymbolInfo(symbol) {
  return { showTooltip: checkBoxInstance && checkBoxInstance.checked };
}
function getNodeDefaults(symbol) {
  symbol.style.fill = "#6495ED";
  symbol.style.strokeColor = "#6495ED";
  return symbol;
}
function showTooltip(args) {
  symbolPaletteInstance.refresh();
}
onMounted(() => {
  symbolPaletteInstance = symbolPaletteRef.value.ej2Instances;
  checkBoxInstance = checkBox.value;
});
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-base/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/fabric.css";
</style>