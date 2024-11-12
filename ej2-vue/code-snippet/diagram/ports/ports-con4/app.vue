<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :connectors="connectors"
    ></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent, PortVisibility } from "@syncfusion/ej2-vue-diagrams";



let nodes = [
  {
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    ports: [
      {
        id: 'nodePort',
        offset: { x: 1, y: 0.5 },
        visibility: PortVisibility.Visible,
      },
    ],
  },
];

let connectors = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 120 },
    type: 'Orthogonal',
    ports: [
      {
        id: 'connectorPort',
        offset: 0.5,
        visibility: PortVisibility.Visible,
      },
    ],
  },
  {
    id: 'connector2',
    sourceID: 'node1',
    //connector id
    targetID: 'connector1',
    sourcePortID: 'nodePort',
    //Connector port id
    targetPortID: 'connectorPort',
    type: 'Orthogonal',
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
      nodes:nodes,
      connectors: connectors,
    };
  },

};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
