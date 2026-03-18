<template>
    <div id="app">
        <button id="removeBasicShape" @click="removeBasicShape">Remove BasicShape</button>
        <button id="removeFlowShape" @click="removeFlowShape">Remove FlowShape</button>
        <ejs-symbolpalette ref="symbolPaletteRef" id="symbolpalette" width="100%" height="100%" :expandMode="expandMode"
            :palettes="palettes" :symbolHeight="symbolHeight" :symbolWidth="symbolWidth">
        </ejs-symbolpalette>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { SymbolPaletteComponent as EjsSymbolpalette } from "@syncfusion/ej2-vue-diagrams";
  let symbolPaletteInstance;
  const expandMode = ref('Multiple');
  const symbolWidth = ref(50);
  const symbolHeight = ref(50);
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
  
  // Reference to symbol palette instance
  const symbolPaletteRef = ref(null);
  
  // Functions to get shapes
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
  // On mounted lifecycle hook to get the symbolPalette instance
  onMounted(() => {
    symbolPaletteInstance = symbolPaletteRef.value.ej2Instances;
  });
  
  function removeBasicShape() {
    const id = symbolPaletteInstance.palettes[0].symbols[0].id;
    /**
     * parameter 1 - The ID of the palette where the shape to be removed.
     * parameter 2 - ID of the shape to be removed
     */
    symbolPaletteInstance.removePaletteItem("basic", id);
  }
  
  function removeFlowShape() {
    const id = symbolPaletteInstance.palettes[1].symbols[0].id;
    /**
     * parameter 1 - The ID of the palette where the shape to be removed.
     * parameter 2 - ID of the shape to be removed
     */
    symbolPaletteInstance.removePaletteItem("flow", id);
  }
  </script>
  
  <style>
  @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  </style>