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
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 100 },
    ports: [
      {
        offset: 0.5,
        visibility: PortVisibility.Visible,
      },
    ],
  },
  {
    id: "connector2",
    sourcePoint: { x: 100, y: 200 },
    targetPoint: { x: 300, y: 220 },
    type: "Orthogonal",
    ports: [
      {
        offset: 0.5,
        visibility: PortVisibility.Visible,
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
