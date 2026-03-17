<template>
  <div id="app">
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes" :symbolWidth="80" :symbolHeight="80"
      :enableSearch="true" :enableAnimation="false" :locale="locale">
    </ejs-symbolpalette>
  </div>
</template>

<script>
import { SymbolPaletteComponent } from "@syncfusion/ej2-vue-diagrams";
import { L10n, setCulture } from "@syncfusion/ej2-base";

// Set culture to German
setCulture("de");

// Load locale text for the SearchShapes
L10n.load({
  "de-DE": {
    SymbolPalette: {
      SearchShapes: "Formen suchen",
    },
  },
});

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
      // Set default locale
      locale: "de-DE",
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