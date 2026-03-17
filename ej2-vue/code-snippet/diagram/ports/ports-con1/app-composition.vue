<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
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

const diagram = ref(null);

const connectors = [
  {
    id: "connector1",
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 100 },
    ports: [
      {
        offset: 0.5,
        visibility: PortVisibility.Visible,
      },
    ],
  },
  {
    id: "connector2",
    sourcePoint: { x: 100, y: 200 },
    targetPoint: { x: 300, y: 220 },
    type: "Orthogonal",
    ports: [
      {
        offset: 0.5,
        visibility: PortVisibility.Visible,
      },
    ],
  },
];

const width = "100%";
const height = "600px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
