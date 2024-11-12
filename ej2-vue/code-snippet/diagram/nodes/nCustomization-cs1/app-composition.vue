<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [
  {
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 270,
    offsetY: 170,
    zIndex: 2,
    annotations: [
      {
        content: 'Node 1',
      },
    ],
    style: {
      fill: 'yellow',
      strokeColor: 'green',
      strokeWidth: 3,
    },
  },
  {
    id: 'end',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 200,
    zIntex: 1,
    annotations: [
      {
        content: 'Node 2',
      },
    ],
    style: {
      fill: 'yellow',
      strokeColor: 'green',
      strokeWidth: 3,
    },
  },
];

const width = "100%";
const height = "700px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
