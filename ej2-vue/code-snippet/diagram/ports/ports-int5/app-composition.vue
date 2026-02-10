<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :connectors="connectors"
      :click="click"
      :elementDraw="elementDraw"
      :positionChange="positionChange"
      :connectionChange="connectionChange"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import {DiagramComponent as EjsDiagram,PortVisibility,PortConstraints, Connector} from "@syncfusion/ej2-vue-diagrams";

const diagram = ref(null);

const nodes = [
{
  id: "node1",
  offsetX: 250,
  offsetY: 250,
  annotations: [
    { content: "draw port", offset: { x: 0, y: 0.7 } },
    { content: "drag port", offset: { x: 1, y: 0.7 } },
  ],
  width: 100,
  height: 100,
  ports: [
    {
      id: "p1",
      offset: { x: 0, y: 0.5 },
      visibility: PortVisibility.Visible,
      constraints: PortConstraints.Default | PortConstraints.Draw,
    },
    {
      id: "p2",
      offset: { x: 1, y: 0.5 },
      visibility: PortVisibility.Visible,
      constraints: PortConstraints.Default | PortConstraints.Drag,
    },
  ],
},
];

const connectors = [
{
  id: "connector1",
  sourcePoint: { x: 100, y: 100 },
  targetPoint: { x: 300, y: 120 },
  type: "Orthogonal",
  annotations: [
    {
      content: "draw port",
      alignment: "After",
      displacement: { x: 0, y: 10 },
    },
    {
      content: "drag port",
      alignment: "After",
      offset: 0.7,
      displacement: { x: 0, y: 10 },
    },
  ],
  ports: [
    {
      id: "p1",
      offset: 0.5,
      visibility: PortVisibility.Visible,
      constraints: PortConstraints.Default | PortConstraints.Draw,
    },
    {
      id: "p2",
      offset: 0.8,
      visibility: PortVisibility.Visible,
      constraints: PortConstraints.Default | PortConstraints.Drag,
    },
  ],
},
];

const width = "100%";
const height = "600px";

const click = () => { console.log("Clicked"); }
const elementDraw = (args) => { console.log('Element draw event'); }
const positionChange = (args) => { console.log("Position changed"); }
const connectionChange = (args) => { console.log("Connection changed"); }


</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
