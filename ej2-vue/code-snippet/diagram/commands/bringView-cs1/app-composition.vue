<template>
  <div id="app">
    <button @click="bringIntoView">Bring into View</button>
    <ejs-diagram
      id="diagram"
      ref="diagramObj"
      :width="width"
      :height="height"
      :nodes="nodes"
      :scrollSettings="scrollSettings"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram,Rect } from "@syncfusion/ej2-vue-diagrams";

const diagramObj = ref(null);
const nodes = [
  {
    id: "node1",
    offsetX: 1000,
    offsetY: 100,
    width: 70,
    height: 40,
  },
];

const width = "700px";
const height = "350px";
const scrollSettings = {
  scrollLimit: "Infinity",
};

const bringIntoView = function () {
  let diagramInstance = diagramObj.value.ej2Instances;
  let nodeBounds = diagramInstance.nodes[0].wrapper.bounds;
  let bounds = new Rect(
    nodeBounds.x,
    nodeBounds.y,
    nodeBounds.width,
    nodeBounds.height
  );
  /**
   * parameter - bounds of region to bring into view
   */
  diagramInstance.bringIntoView(bounds);
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
