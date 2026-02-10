<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :snapSettings="snapSettings"></ejs-diagram>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, SnapConstraints, Snapping } from '@syncfusion/ej2-vue-diagrams';
const nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    height: 100,
    width: 100,
    annotations: [{ content: 'Node 1' }],
  },
  {
    id: 'Node2',
    offsetX: 400,
    offsetY: 200,
    height: 100,
    width: 100,
    annotations: [{ content: 'Node 2' }],
  },
];

const width = "100%";
const height = "700px";
const snapSettings = {
  constraints: SnapConstraints.ShowHorizontalLines | SnapConstraints.SnapToObject,
}
provide('diagram', [Snapping])
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
