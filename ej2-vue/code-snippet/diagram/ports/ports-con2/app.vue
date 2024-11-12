<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :connectors="connectors"
    ></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent, PortVisibility } from "@syncfusion/ej2-vue-diagrams";

let connectors = [
  {
    id: "connector1",
    sourcePoint: { x: 100, y: 200 },
    targetPoint: { x: 300, y: 220 },
    type: "Orthogonal",
    ports: [
      {
        offset: 0.5,
        visibility: PortVisibility.Visible,
        alignment: "Before",
      },
    ],
  },
  {
    id: "connector2",
    sourcePoint: { x: 320, y: 200 },
    targetPoint: { x: 500, y: 220 },
    type: "Orthogonal",
    ports: [
      {
        offset: 0.5,
        visibility: PortVisibility.Visible,
        alignment: "Center",
      },
    ],
  },
  {
    id: "connector3",
    sourcePoint: { x: 520, y: 200 },
    targetPoint: { x: 700, y: 220 },
    type: "Orthogonal",
    ports: [
      {
        offset: 0.5,
        visibility: PortVisibility.Visible,
        alignment: "After",
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
      height: "600px",
      connectors: connectors,
    };
  },
};
</script>



<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
