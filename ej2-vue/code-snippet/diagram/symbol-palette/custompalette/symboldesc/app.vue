<template>
  <div id='app'>
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes" :getSymbolInfo="getSymbolInfo">
    </ejs-symbolpalette>
  </div>
</template>

<script>
import { SymbolPaletteComponent, NodeConstraints } from "@syncfusion/ej2-vue-diagrams";

export default {
  name: "App",
  components: {
    'ejs-symbolpalette': SymbolPaletteComponent,
  },
  data() {
    return {
      palettes: [
        {
          id: "basic",
          symbols: this.getBasicShapes(),
          title: "Basic Shapes",
          iconCss: "e-ddb-icons e-basic",
        },
      ],
    };
  },
  methods: {
    // Initialize the basic shapes for the symbol palette
    getBasicShapes() {
      return [
        {
          id: "rectangle",
          shape: {
            type: "Basic",
            shape: "Rectangle",
          },
          // Defines the tooltip for the shape
          tooltip: { content: "Rectangle Basic shape", relativeMode: "Object" },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        },
        {
          id: "plus",
          shape: {
            type: "Basic",
            shape: "Plus",
          },
          // Defines the tooltip for the shape
          tooltip: { content: "Plus Basic shape", relativeMode: "Object" },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        },
        {
          id: "triangle",
          shape: {
            type: "Basic",
            shape: "RightTriangle",
          },
          // Defines the tooltip for the shape
          tooltip: { content: "RightTriangle Basic shape", relativeMode: "Object" },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        },
      ];
    },
    // Sets the description of a symbol
    getSymbolInfo(symbol) {
      return {
        width: 50,
        height: 50,
        description: {
          // Defines the description text for the symbol
          text: symbol.id,
        },
      };
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