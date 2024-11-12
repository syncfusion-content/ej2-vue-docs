<template>
  <div id="app">
    <label>Ctrl + G </label><button @click="group">Group</button>
    <label>Ctrl + Shift + U </label><button @click="unGroup">Un Group</button>
    <ejs-diagram
      id="diagram"
      ref="diagramObj"
      :width="width"
      :height="height"
      :nodes="nodes"
      :connectors="connectors"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

const diagramObj = ref(null);
const nodes = [
  {
    id: "node1",
    width: 100,
    height: 70,
    offsetX: 100,
    offsetY: 100,
  },
  {
    id: "node2",
    width: 100,
    height: 70,
    offsetX: 300,
    offsetY: 100,
  },
  {
    id: "node3",
    width: 100,
    height: 70,
    offsetX: 200,
    offsetY: 200,
  },
  {
    id: "group",
    children: ["node1", "node2", "node3", "connector1"],
  },
];
const connectors = [
  {
    id: "connector1",
    sourceID: "node1",
    targetID: "node2",
  },
];

const width = "100%";
const height = "350px";

const group = function () {
  let diagramInstance = diagramObj.value.ej2Instances;
  diagramInstance.group();
};
const unGroup = function () {
  let diagramInstance = diagramObj.value.ej2Instances;
  diagramInstance.unGroup();
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
