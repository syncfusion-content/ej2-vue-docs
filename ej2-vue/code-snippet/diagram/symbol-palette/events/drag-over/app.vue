<template>
  <div id="app">
    <ejs-symbolpalette id="symbolpalette" :palettes="palettes" :symbolHeight="50" :symbolWidth="70">
    </ejs-symbolpalette>
    <ejs-diagram ref="diagram" id="diagram" width="1000" height="500px" :getNodeDefaults="getNodeDefaults"
      @dragOver="dragOver">
    </ejs-diagram>
  </div>
</template>

<script>
import { SymbolPaletteComponent, DiagramComponent, NodeConstraints } from "@syncfusion/ej2-vue-diagrams";

export default {
  name: "App",
  components: {
    "ejs-symbolpalette": SymbolPaletteComponent,
    "ejs-diagram": DiagramComponent,
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
    getNodeDefaults(node) {
      node.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
    },
    dragOver(args) {
      if (args.target) {
        // Target shape id
        console.log(args.target.id);
      }
      // Dragged symbol
      console.log(args.element.id);
      // Customize as needed
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
