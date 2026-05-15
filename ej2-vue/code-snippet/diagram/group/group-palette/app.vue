<template>
  <div id="app">
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :expandMode="expandMode" width="20%" :palettes="palettes">
    </ejs-symbolpalette>
    <ejs-diagram ref="diagram" id="diagram" width="80%" height="645px" :nodes="nodes" @created="onCreated">
    </ejs-diagram>
  </div>
</template>

<script>
import { DiagramComponent, SymbolPaletteComponent } from "@syncfusion/ej2-vue-diagrams";

export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent,
    "ejs-symbolpalette": SymbolPaletteComponent,
  },
  data() {
    return {
      expandMode: "Multiple",
      nodes: [
        {
          offsetX: 250,
          offsetY: 250,
          width: 100,
          height: 100,
          visible: true,
          style: { fill: "#6AA8D7", strokeWidth: 1 },
        },
      ],
      palettes: [
        {
          id: "palette1",
          title: "Basic Shapes",
          symbols: this.getSymbols(),
          expanded: true,
        },
      ],
    };
  },
  methods: {
    getSymbols() {
      return [
        {
          id: "n1",
          height: 50,
          width: 50,
          offsetX: 50,
          offsetY: 50,
          style: { fill: "green" },
        },
        {
          id: "n2",
          height: 50,
          width: 50,
          offsetX: 100,
          offsetY: 100,
          style: { fill: "yellow" },
        },
        {
          id: "group1",
          children: ["n1", "n2"],
          padding: { left: 10, right: 10, top: 10, bottom: 10 },
        },
        {
          id: "n3",
          height: 50,
          width: 50,
          offsetX: 100,
          offsetY: 100,
          style: { fill: "pink" },
        },
        {
          id: "n4",
          height: 50,
          width: 50,
          offsetX: 100,
          offsetY: 170,
          style: { fill: "orange" },
        },
        {
          id: "group2",
          children: ["n3", "n4"],
          padding: { left: 10, right: 10, top: 10, bottom: 10 },
        },
      ];
    },
    onCreated() {
      const diagram = this.$refs.diagram.ej2Instances;
      diagram.fitToPage({ mode: "Width" });
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