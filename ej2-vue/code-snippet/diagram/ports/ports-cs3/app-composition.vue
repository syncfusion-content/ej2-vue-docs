<template>
  <div id="app">
    <ejs-button v-on:click="updateConnectionDirection">updateConnectionDirection</ejs-button>
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
    id: "node1",
    offsetX: 450,
    offsetY: 200,
    width: 100,
    height: 100,
    ports: [
      {
        id: "port1",
        offset: {
          x: 0,
          y: 0,
        },
        visibility: PortVisibility.Visible,
      },
    ],
  },
  {
    id: "node2",
    offsetX: 270,
    offsetY: 300,
    width: 100,
    height: 100,
    ports: [
      {
        id: "port3",
        offset: { x: 0.5, y: 0.5 },
        visibility: PortVisibility.Visible,
        //Sets the connection direction as Left
        connectionDirection: "Left",
      },
    ],
  },
];

const connectors = [
  {
    id: "connector1",
    sourceID: "node2",
    targetID: "node1",
    type: "Orthogonal",
    sourcePortID: "port3",
    targetPortID: "port1",
  },
];

const width = "100%";
const height = "600px";

onMounted(function () {
  diagramInstance = diagram.value.ej2Instances;
});

const updateConnectionDirection = function () {
    let port1 = diagramInstance.nodes[0].ports[0];
    port1.connectionDirection = "Top";
    diagramInstance.dataBind();
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
