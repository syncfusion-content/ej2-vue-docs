<template>
  <div id="app">
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" width="100%" height="100%" :expandMode="expandMode"
      :enableSearch="true" :palettes="palettes" :symbolHeight="80" :symbolWidth="80" :symbolPreview="symbolPreview"
      @paletteExpanding="paletteExpanding">
    </ejs-symbolpalette>
  </div>
</template>

<script>
import { SymbolPaletteComponent } from "@syncfusion/ej2-vue-diagrams";

export default {
  name: "App",
  components: {
    'ejs-symbolpalette': SymbolPaletteComponent,
  },
  data() {
    return {
      expandMode: "Multiple", // Allows multiple palettes to be expanded
      palettes: [{
        id: "flow",
        expanded: true,
        symbols: this.getFlowShapes(),
        title: "Flow Shapes",
        iconCss: "e-ddb-icons e-flow",
      },
      {
        id: "basic",
        expanded: true,
        symbols: this.getBasicShapes(),
        title: "Basic Shapes",
        iconCss: "e-ddb-icons e-basic",
      }],
      symbolPreview: [
        {
          height: 100,
          width: 100,
        },
      ],
    };
  },
  methods: {
    paletteExpanding(args) {
      if (args.palette.id === "basic") {
        // Basic shapes panel does not collapse
        args.cancel = true;
      } else {
        // Flow shapes panel collapses and expands
        args.cancel = false;
      }
    },
    getBasicShapes() {
      return [
        {
          id: "Rectangle",
          shape: { type: "Basic", shape: "Rectangle" },
        },
        {
          id: "Ellipse",
          shape: { type: "Basic", shape: "Ellipse" },
        },
        {
          id: "Hexagon",
          shape: { type: "Basic", shape: "Hexagon" },
        },
      ];
    },
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
      ];
    },
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