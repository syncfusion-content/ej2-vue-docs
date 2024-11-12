<template>
  <div id="app">
    <ejs-button v-on:click="removePorts">Remove Ports</ejs-button>
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import {
  DiagramComponent as EjsDiagram,
  PortVisibility,
} from "@syncfusion/ej2-vue-diagrams";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

let diagramInstance;
const diagram = ref(null);
const nodes = [
  {
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    ports: [
      {
        id: "port1",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: PortVisibility.Visible,
      },
      {
        id: "port2",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: PortVisibility.Visible,
      },
      {
        id: "port3",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: PortVisibility.Visible,
      },
      {
        id: "port4",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: PortVisibility.Visible,
      },
    ],
  },
];

const width = "100%";
const height = "600px";

onMounted(function () {
  diagramInstance = diagram.value.ej2Instances;
});

const removePorts = function () {
    // Method to remove ports from a node at runtime
    // Parameters:
    // - node: The node to which the port will be removed from.
    // - port: The port collection to be removed from the node.
    diagramInstance.removePorts(diagramInstance.nodes[0], diagramInstance.nodes[0].ports);
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
