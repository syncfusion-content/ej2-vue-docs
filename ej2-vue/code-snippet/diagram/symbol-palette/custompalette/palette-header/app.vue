<template>
  <div id="app">
    <ejs-symbolpalette id="symbolpalette" width="100%" height="700px" :expandMode="expandMode" :palettes="palettes"
      :symbolHeight="80" :symbolWidth="80" />
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
          //Sets the id of the palette
          id: 'flow',
          //Sets whether the palette expands/collapse its children
          expanded: true,
          //Adds the palette items to palette
          symbols: this.getFlowShapes(),
          //Sets the header text of the palette
          title: 'Flow Shapes',
          //Sets the header icon of the palette
          iconCss: 'e-ddb-icons e-flow'
        },
        {
          id: 'basic',
          expanded: true,
          symbols: this.getBasicShapes(),
          title: 'Basic Shapes',
          iconCss: 'e-ddb-icons e-basic',
        },
        {
          id: 'connectors',
          expanded: true,
          symbols: this.getConnectors(),
          title: 'Connectors',
          iconCss: 'e-ddb-icons e-connector',
        },
      ]
    };
  },
  methods: {
    getBasicShapes() {
      return [
        {
          id: 'Rectangle',
          shape: { type: 'Basic', shape: 'Rectangle' }
        },
        {
          id: 'Ellipse',
          shape: { type: 'Basic', shape: 'Ellipse' }
        },
        {
          id: 'Hexagon',
          shape: { type: 'Basic', shape: 'Hexagon' }
        }
      ];
    },
    getFlowShapes() {
      return [
        {
          id: 'process',
          shape: { type: 'Flow', shape: 'Process' }
        },
        {
          id: 'document',
          shape: { type: 'Flow', shape: 'Document' }
        },
        {
          id: 'predefinedprocess',
          shape: { type: 'Flow', shape: 'PreDefinedProcess' }
        },
      ];
    },
    getConnectors() {
      return [
        {
          id: 'Link1',
          type: 'Orthogonal',
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 40, y: 40 },
          targetDecorator: { shape: 'Arrow' }
        },
        {
          id: 'Link21',
          type: 'Straight',
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 40, y: 40 },
          targetDecorator: { shape: 'Arrow' }
        },
        {
          id: 'link33',
          type: 'Bezier',
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 40, y: 40 },
          style: { strokeWidth: 2 },
          targetDecorator: { shape: 'None' }
        },
      ];
    },
  },

};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-base/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/fabric.css";
</style>
