<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
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
const nodes = [
  {
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    ports: [
      {
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: PortVisibility.Visible,
        width: 15,
        height: 15,
        // Sets the shape of the port as Circle
        shape: "Circle",
      },
      {
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: PortVisibility.Visible,
        width: 15,
        height: 15,
        // Sets the shape of the port as Square
        shape: "Square",
      },
      {
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: PortVisibility.Visible,
        width: 15,
        height: 15,
        // Sets the shape of the port as X
        shape: "X",
      },
      {
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: PortVisibility.Visible,
        width: 25,
        height: 25,
        // Sets the shape of the port as Custom
        shape: "Custom",
        pathData:
          "M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z",
      },
    ],
  },
];

const width = "100%";
const height = "350px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
