<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

const nodes = [
  {
    id: "node1",
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    style: { fill: "#6BA5D7", strokeColor: "white" },
    shape: {
      type: "HTML",
      content: this.template("node1"), // Use template method with the node id
    },
  },
  {
    id: "node2",
    offsetX: 450,
    offsetY: 250,
    width: 100,
    height: 100,
    style: { fill: "#6BA5D7", strokeColor: "white" },
    shape: {
      type: "HTML",
      content: this.template("node2"), // Use template method with the node id
    },
  },
];
const width = "750px";
const height = "500px";
const template = function (nodeId) {
  let background = "#6BA5D7";
  let name = "button";
  if (nodeId === "node1") {
    background = "yellow";
    name = "YELLOW";
  } else {
    name = "BLUE";
  }
  return `<div style="background:${background};height:100%;width:100%;">
              <button type="button" style="width:100px"> ${name}</button>
            </div>`;
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
