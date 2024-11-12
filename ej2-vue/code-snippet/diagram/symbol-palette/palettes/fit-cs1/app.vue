<template>
  <div id="app">
    <ejs-symbolpalette id="symbolpalette" width="100%" height="700px" :symbolHeight="80" :symbolWidth="80"
      :expandMode="expandMode" :palettes="palettes" :getSymbolInfo="getSymbolInfo" />
  </div>
</template>

<script>
import { SymbolPaletteComponent } from '@syncfusion/ej2-vue-diagrams';

export default {
  name: 'AppComponent',
  components: {
    'ejs-symbolpalette': SymbolPaletteComponent,
  },
  data() {
    return {
      expandMode: 'Multiple',
      palettes: [
        {
          id: 'basic',
          expanded: true,
          symbols: this.getBasicShapes(),
          title: 'Basic Shapes',
          iconCss: 'e-ddb-icons e-basic',
        },
      ],
    };
  },
  methods: {
    getBasicShapes() {
      return [
        {
          id: 'Rectangle',
          width: 200,
          shape: {
            type: 'Basic',
            shape: 'Rectangle',
          },
        },
        {
          id: 'Ellipse',
          width: 200,
          shape: {
            type: 'Basic',
            shape: 'Ellipse',
          },
        },
        {
          id: 'Hexagon',
          width: 200,
          shape: {
            type: 'Basic',
            shape: 'Hexagon',
          },
        },
      ];
    },
    getSymbolInfo() {
      // Enables to fit the content into the specified palette item size
      return {
        fit: true,
      };
      // When it is set as false, the element is rendered with actual node size
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
