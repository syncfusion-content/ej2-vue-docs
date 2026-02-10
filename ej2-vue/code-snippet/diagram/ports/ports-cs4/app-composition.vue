<template>
  <div id="app">
    <ejs-button v-on:click="getInEdges">Get InEdges</ejs-button>
    <ejs-button v-on:click="getOutEdges">Get OutEdges</ejs-button>
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
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    ports: [
      {
        id: "port1",
        offset: { x: 0, y: 0.5 },
        visibility: PortVisibility.Visible,
      },
      {
        id: "port2",
        offset: { x: 0.5, y: 0 },
        visibility: PortVisibility.Visible,
      }
    ],
  },
  {
    id: "node2",
    offsetX: 250,
    offsetY: 400,
    width: 100,
    height: 100,
    ports: [
      {
        id: "port3",
        offset: { x: 0, y: 0.5},
        visibility: PortVisibility.Visible,
      },
      {
        id: "port4",
        offset: { x: 0.5, y: 1},
        visibility: PortVisibility.Visible,
      }
    ],
  },
];
const connectors = [
  {
      id: 'connector1',
      sourceID: 'node1',
      targetID: 'node2',
      type: 'Orthogonal',
      sourcePortID: 'port1',
      targetPortID: 'port3',
      annotations: [{ content: 'connector1' }],
    },
    {
      id: 'connector2',
      sourceID: 'node2',
      targetID: 'node1',
      type: 'Orthogonal',
      sourcePortID: 'port4',
      targetPortID: 'port2',
      annotations: [{ content: 'connector2' }],
    },
];

const width = "100%";
const height = "600px";

onMounted(function () {
  diagramInstance = diagram.value.ej2Instances;
});

const getInEdges = function () {
    let port1 = diagramInstance.nodes[0].ports[1];
    console.log(port1.inEdges[0]);
};

const getOutEdges = function () {
    let port1 = diagramInstance.nodes[0].ports[0];
    console.log(port1.outEdges[0]);
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
