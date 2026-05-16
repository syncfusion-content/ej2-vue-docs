<template>
  <div id='app'>
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes" :symbolDragSize="symbolDragSize">
    </ejs-symbolpalette>
    <ejs-diagram id="diagram" width="1000px" height="500px">
    </ejs-diagram>
  </div>
</template>

<script>
import { SymbolPaletteComponent, DiagramComponent } from "@syncfusion/ej2-vue-diagrams";

export default {
  name: "App",
  components: {
    'ejs-symbolpalette': SymbolPaletteComponent,
    'ejs-diagram': DiagramComponent
  },
  data() {
    return {
      palettes: [{
        id: "basic",
        expanded: true,
        symbols: this.getBasicShapes(),
        title: "Basic Shapes",
      }],
      // Defines the size of the shape while dragging it from the palette to the diagram canvas
      symbolDragSize: { height: 30, width: 40 },
    };
  },
  methods: {
    getBasicShapes() {
      return [
        {
          id: "rectangle",
          shape: {
            type: "Basic", shape: "Rectangle",
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