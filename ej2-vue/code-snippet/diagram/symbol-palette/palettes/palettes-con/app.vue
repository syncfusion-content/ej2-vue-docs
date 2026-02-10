<template>
  <div id="app">
    <ejs-symbolpalette id="symbolpalette" width="100%" height="100%" :expandMode="expandMode" :palettes="palettes"
      :symbolHeight="80" :symbolWidth="80">
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
      //Expands only one palette at a time
      expandMode: 'Single',
      palettes: [
        {
          id: "connectors",
          expanded: true,
          symbols: this.getConnectors(),
          title: "Connectors",
          iconCss: "e-ddb-icons e-connector",
        },
      ],
    };
  },
  methods: {
    getConnectors() {
      return [
        {
          id: "Straight",
          type: "Straight",
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 60, y: 60 },
          targetDecorator: {
            shape: "Arrow",
            style: { strokeColor: "#757575", fill: "#757575" },
          },
          style: { strokeWidth: 1, strokeColor: "#757575" },
        },
        {
          id: "Orthogonal",
          type: "Orthogonal",
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 60, y: 60 },
          targetDecorator: {
            shape: "Arrow",
            style: { strokeColor: "#757575", fill: "#757575" },
          },
          style: { strokeWidth: 1, strokeColor: "#757575" },
        },
        {
          id: "Bezier",
          type: "Bezier",
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 60, y: 60 },
          targetDecorator: {
            shape: "Arrow",
            style: { strokeColor: "#757575", fill: "#757575" },
          },
          style: { strokeWidth: 1, strokeColor: "#757575" },
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
