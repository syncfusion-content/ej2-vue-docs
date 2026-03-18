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
<script>
import {DiagramComponent,PortVisibility,PortConstraints,Connector} from "@syncfusion/ej2-vue-diagrams";


let nodes = [
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

let connectors = [
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

export default {
name: "App",
components: {
  "ejs-diagram": DiagramComponent,
},
data() {
  return {
    width: "100%",
    height: "600px",
    nodes: nodes,
    connectors: connectors,
    click: function () {
      console.log("clicked");
    },
    elementDraw: function (args) {
      //Prevents connector drawn from connector port
      if (
        args.state === "Start" &&
        args.source instanceof Connector
      ) {
        args.cancel = true;
      }
    },
    positionChange: function () {
      console.log("Position change");
    },
    connectionChange: function () {
      console.log("Connection change");
    },
  };
},
};
</script>



<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
