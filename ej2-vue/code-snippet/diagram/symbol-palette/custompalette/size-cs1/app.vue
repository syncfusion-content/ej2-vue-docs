<template>
  <div id='app'>
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" width="100%" height="700px" :symbolHeight="80"
      :symbolWidth="80" :expandMode="expandMode" :palettes="palettes" :symbolMargin="symbolMargin">
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
      expandMode: 'Multiple',
      palettes: [{
        id: "basic",
        expanded: true,
        symbols: this.getBasicShapes(),
        title: "Basic Shapes",
        iconCss: "e-ddb-icons e-basic",
      }],
      //Sets the space to be left around a symbol
      symbolMargin: {
        left: 15,
        right: 15,
        top: 15,
        bottom: 15,
      },
    };
  },
  methods: {
    getBasicShapes() {
      return [
        {
          id: "Rectangle",
          shape: {
            type: "Basic",
            shape: "Rectangle",
          },
        },
        {
          id: "Ellipse",
          shape: {
            type: "Basic",
            shape: "Ellipse",
          },
        },
        {
          id: "Hexagon",
          shape: {
            type: "Basic",
            shape: "Hexagon",
          },
        },
      ];
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