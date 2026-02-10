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
    <input id="showTooltip" @click="showTooltip" checked type="checkbox" />Show
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
function getFlowShapes() {
  return [
    { id: "Terminator", shape: { type: "Flow", shape: "Terminator" } },
    { id: "Process", shape: { type: "Flow", shape: "Process" } },
    { id: "Decision", shape: { type: "Flow", shape: "Decision" } },
    { id: "Document", shape: { type: "Flow", shape: "Document" } },
    { id: "PreDefinedProcess", shape: { type: "Flow", shape: "PreDefinedProcess" } },
    { id: "DirectData", shape: { type: "Flow", shape: "DirectData" } },
    { id: "SequentialData", shape: { type: "Flow", shape: "Card" } },
    { id: "Sort", shape: { type: "Flow", shape: "Collate" } },
  ];
}
function getBasicShapes() {
  return [
    { id: "Rectangle", shape: { type: "Basic", shape: "Rectangle" } },
    { id: "Ellipse", shape: { type: "Basic", shape: "Ellipse" } },
    { id: "Hexagon", shape: { type: "Basic", shape: "Triangle" } },
    { id: "Star", shape: { type: "Basic", shape: "Hexagon" } },
    { id: "Pentagon", shape: { type: "Basic", shape: "Parallelogram" } },
    { id: "Diamond", shape: { type: "Basic", shape: "Diamond" } },
    { id: "Pentagon", shape: { type: "Basic", shape: "Pentagon" } },
    { id: "Heptagon", shape: { type: "Basic", shape: "Heptagon" } },
  ];
}
function getSymbolInfo(symbol) {
  return { showTooltip: true };
}
function getNodeDefaults(symbol) {
  symbol.style.fill = "#6495ED";
  symbol.style.strokeColor = "#6495ED";
}
function showTooltip(args) {
  var checkBox = document.getElementById("showTooltip");
  symbolPaletteInstance.getSymbolInfo = function (symbol) {
    return {
      showTooltip: checkBox.checked,
    };
  };
  symbolPaletteInstance.dataBind();
}
onMounted(() => {
  symbolPaletteInstance = symbolPaletteRef.value.ej2Instances;
});
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>