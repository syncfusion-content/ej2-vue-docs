<template>
  <div id="app">
    <button @click="bringToFront">Bring To Front</button>
    <ejs-diagram
      id="diagram"
      ref="diagramObj"
      :width="width"
      :height="height"
      :nodes="nodes"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

const diagramObj = ref(null);

const nodes = [
  {
    id: "node1",
    width: 90,
    height: 70,
    offsetX: 120,
    offsetY: 100,
  },
  {
    id: "node2",
    width: 90,
    height: 70,
    offsetX: 150,
    offsetY: 120,
  },
  {
    id: "node3",
    width: 90,
    height: 70,
    offsetX: 170,
    offsetY: 150,
  },
];

const width = "100%";
const height = "600px";

const bringToFront = function () {
  let diagramInstance = diagramObj.value.ej2Instances;
  diagramInstance.bringToFront();
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
