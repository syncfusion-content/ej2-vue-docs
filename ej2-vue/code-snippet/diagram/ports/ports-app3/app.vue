<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
    ></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent, PortVisibility } from "@syncfusion/ej2-vue-diagrams";

let nodes = [
  {
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    ports: [
      {
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: PortVisibility.Visible,
        width: 15,
        height: 15,
        // Sets the shape of the port as Circle
        shape: "Circle",
      },
      {
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: PortVisibility.Visible,
        width: 15,
        height: 15,
        // Sets the shape of the port as Square
        shape: "Square",
      },
      {
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: PortVisibility.Visible,
        width: 15,
        height: 15,
        // Sets the shape of the port as X
        shape: "X",
      },
      {
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: PortVisibility.Visible,
        width: 25,
        height: 25,
        // Sets the shape of the port as Custom
        shape: "Custom",
        pathData:
          "M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z",
      },
    ],
  },
];

export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent,
  },
  data() {
    return {
      width: "100%",
      height: "350px",
      nodes: nodes,
    };
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
