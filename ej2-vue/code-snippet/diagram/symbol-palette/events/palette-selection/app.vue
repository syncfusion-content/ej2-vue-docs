<template>
  <div id="app">
    <ejs-symbolpalette id="symbolpalette" :palettes="palettes" :symbolHeight="50" :symbolWidth="70"
      @paletteSelectionChange="paletteSelectionChange">
    </ejs-symbolpalette>
  </div>
</template>

<script>
import { SymbolPaletteComponent } from "@syncfusion/ej2-vue-diagrams";

export default {
  name: "App",
  components: {
    "ejs-symbolpalette": SymbolPaletteComponent,
  },
  data() {
    return {
      palettes: [
        {
          id: "basic",
          symbols: this.getBasicShapes(),
          title: "Basic Shapes",
        },
      ],
    };
  },
  methods: {
    getBasicShapes() {
      return [
        {
          id: "rectangle",
          shape: {
            type: "Basic",
            shape: "Rectangle",
          },
        },
        {
          id: "plus",
          shape: {
            type: "Basic",
            shape: "Plus",
          },
        },
        {
          id: "triangle",
          shape: {
            type: "Basic",
            shape: "RightTriangle",
          },
        },
      ];
    },
    // Handle palette selection change event
    paletteSelectionChange(args) {
      // Log the selected symbol
      console.log(args.newValue);
    },
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>
