<template>
  <div id="app">
    <button id="addBasicShape" @click="addBasicShape">Add BasicShape</button>
    <button id="addFlowShape" @click="addFlowShape">Add FlowShape</button>
    <ejs-symbolpalette ref="symbolPaletteRef" id="symbolpalette" width="100%" height="100%" :expandMode="expandMode"
      :palettes="palettes" :symbolHeight="50" :symbolWidth="50">
    </ejs-symbolpalette>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette, randomId } from "@syncfusion/ej2-vue-diagrams";

let symbolPaletteInstance;
const expandMode = ref('Multiple');
const palettes = ref([
  {
    id: "basic",
    expanded: true,
    symbols: getBasicShapes(),
    title: "Basic Shapes",
  },
  {
    id: "flow",
    expanded: true,
    symbols: getFlowShapes(),
    title: "Flow Shapes",
  }
]);

const symbolPaletteRef = ref(null);

function getBasicShapes() {
  return [
    {
      id: "Rectangle",
      shape: { type: "Basic", shape: "Rectangle" },
      style: { strokeWidth: 2 },
    },
    {
      id: "Ellipse",
      shape: { type: "Basic", shape: "Ellipse" },
      style: { strokeWidth: 2 },
    }
  ];
}

function getFlowShapes() {
  return [
    {
      id: "Process",
      shape: { type: "Flow", shape: "Process" },
      style: { strokeWidth: 2 },
    },
    {
      id: "Document",
      shape: { type: "Flow", shape: "Document" },
      style: { strokeWidth: 2 },
    }
  ];
}

function addBasicShape() {
  const node = {
    id: "Plus" + randomId(),
    shape: { type: "Basic", shape: "Plus" },
    style: { strokeWidth: 2 },
  };
  /**
 * parameter 1 - The ID of the palette where the new shape is to be added.
 * parameter 2 - node/connector to be added
 */
  symbolPaletteInstance.addPaletteItem("basic", node);
}

function addFlowShape() {
  const node = {
    id: "Decision" + randomId(),
    shape: { type: "Flow", shape: "Decision" },
    style: { strokeWidth: 2 },
  };
  /**
 * parameter 1 - The ID of the palette where the new shape is to be added.
 * parameter 2 - node/connector to be added
 */
  symbolPaletteInstance.addPaletteItem("flow", node);
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
