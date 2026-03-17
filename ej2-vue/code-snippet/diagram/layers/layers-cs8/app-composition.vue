<template>
  <div id="app">
    <ejs-button v-on:click="cloneLayer">Clone Layer</ejs-button>
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :layers="layers"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { onMounted,provide, ref } from "vue";
import { DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

let diagramInstance;
const diagram = ref(null);
const nodes = [
  {
    id: "node1",
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    annotations: [{ content: "Layer 1 Object" }],
  },
  {
    id: "node2",
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 130,
    annotations: [{ content: "Layer 1 Object" }],
  },
  {
    id: "node3",
    width: 100,
    height: 100,
    offsetX: 160,
    offsetY: 360,
    annotations: [{ content: "Layer 2 Object" }],
  },
];

const width = "100%";
const height = "600px";

onMounted(function () {
    diagramInstance = diagram.value.ej2Instances;
});

const layers = [
  {
    id: "layer1",
    objects: ["node1", "node2"],
  },
  {
    id: "layer2",
    objects: ["node3"],
  },
];
const cloneLayer = function () {
      /**
       * To Clone the layer
       * Parameter 1 - A string representing the name of the layer to be cloned.
       */
      diagramInstance.cloneLayer('layer1');
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
