<template>
  <div id="app">
    <button id="addBasicShape" @click="addBasicShape">Add BasicShape</button>
    <button id="addFlowShape" @click="addFlowShape">Add FlowShape</button>
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" width="100%" height="100%" :expandMode="expandMode"
      :palettes="palettes" :symbolHeight="50" :symbolWidth="50">
    </ejs-symbolpalette>
  </div>
</template>

<script>
import { SymbolPaletteComponent, randomId } from "@syncfusion/ej2-vue-diagrams";
let symbolPaletteInstance;
export default {
  name: "App",
  components: {
    'ejs-symbolpalette': SymbolPaletteComponent,
  },
  data() {
    return {
      expandMode: 'Multiple',
      palettes: [
        {
          id: "basic",
          expanded: true,
          symbols: this.getBasicShapes(),
          title: "Basic Shapes",
        },
        {
          id: "flow",
          expanded: true,
          symbols: this.getFlowShapes(),
          title: "Flow Shapes",
        },
      ],
    };
  },
  methods: {
    getBasicShapes() {
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
        },
      ];
    },
    getFlowShapes() {
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
        },
      ];
    },
    addBasicShape() {
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
    },
    addFlowShape() {
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
    },
  },
  mounted() {
    // Set up the reference once the component is mounted
    symbolPaletteInstance = this.$refs.symbolPalette.ej2Instances;
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>