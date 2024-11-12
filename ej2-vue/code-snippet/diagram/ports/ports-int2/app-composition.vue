<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :connectors="connectors"
      :getConnectorDefaults="getConnectorDefaults"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import {DiagramComponent as EjsDiagram,PortVisibility,PortConstraints} from "@syncfusion/ej2-vue-diagrams";

const diagram = ref(null);

const nodes = [
  {
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    ports: [
      {
        offset: { x: 1, y: 0.5 },
        visibility: PortVisibility.Visible,
        constraints:
          PortConstraints.Default |
          PortConstraints.Draw,
      },
    ],
  },
];

const connectors = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 120 },
    ports: [
      {
        offset: 0.5,
        visibility: PortVisibility.Visible,
        constraints:
          PortConstraints.Default | PortConstraints.Draw,
      },
    ],
  },
];

const getConnectorDefaults = (connector) => {
  connector.type = 'Bezier';
  return connector;
};

const width = "100%";
const height = "600px";

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
