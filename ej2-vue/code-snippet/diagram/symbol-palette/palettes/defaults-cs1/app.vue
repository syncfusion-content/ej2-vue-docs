<template>
  <div id='app'>
    <ejs-symbolpalette id="symbolpalette" width="100%" height="100%" :palettes="palettes"
      :getNodeDefaults="getNodeDefaults" :getConnectorDefaults="getConnectorDefaults" />
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
      palettes: [
        {
          id: "flow",
          symbols: this.getFlowShapes(),
          title: "Flow Shapes",
          iconCss: "e-ddb-icons e-flow",
        },
        {
          id: "connectors",
          symbols: this.getConnectors(),
          title: "Connectors",
          iconCss: "e-ddb-icons e-connector",
        },
      ],
    };
  },
  methods: {
    getFlowShapes() {
      return [
        {
          id: "process",
          shape: {
            type: "Flow",
            shape: "Process",
          },
        },
        {
          id: "document",
          shape: {
            type: "Flow",
            shape: "Document",
          },
        },
        {
          id: "predefinedprocess",
          shape: {
            type: "Flow",
            shape: "PreDefinedProcess",
          },
        },
      ];
    },
    getConnectors() {
      return [
        {
          id: "Link1",
          type: "Orthogonal",
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 60, y: 60 },
          style: { strokeWidth: 1, strokeColor: "#757575" },
          targetDecorator: {
            shape: "Arrow",
            style: { strokeColor: "#757575", fill: "#757575" },
          },
        },
        {
          id: "link3",
          type: "Orthogonal",
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 60, y: 60 },
          targetDecorator: { shape: "None" },
          style: { strokeWidth: 1, strokeColor: "#757575" },
        },
        {
          id: "Link21",
          type: "Straight",
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 60, y: 60 },
          style: { strokeWidth: 1, strokeColor: "#757575" },
          targetDecorator: {
            shape: "Arrow",
            style: { strokeColor: "#757575", fill: "#757575" },
          },
        },
        {
          id: "link23",
          type: "Straight",
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 60, y: 60 },
          targetDecorator: { shape: "None" },
          style: { strokeWidth: 1, strokeColor: "#757575" },
        },
        {
          id: "link33",
          type: "Bezier",
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 60, y: 60 },
          targetDecorator: { shape: "None" },
          style: { strokeWidth: 1, strokeColor: "#757575" },
        },
      ];
    },
    //Returns the default properties of node
    getNodeDefaults(node) {
      node.style.fill = "yellow";
      return node;
    },
    //Returns the default properties of connector
    getConnectorDefaults(connector) {
      connector.targetDecorator.shape = "DoubleArrow";
      return connector;
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