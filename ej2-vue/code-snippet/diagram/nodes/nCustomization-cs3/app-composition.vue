<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const linearGradient = {
  //Start point of linear gradient
  x1: 0,
  y1: 0,
  //End point of linear gradient
  x2: 50,
  y2: 50,
  //Sets an array of stop objects
  stops: [
    { color: 'white', offset: 0 },
    { color: '#6BA5D7', offset: 100 },
  ],
  type: 'Linear',
};

const nodes = [
  {
    // Position of the node
    offsetX: 200,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: { gradient: linearGradient, strokeColor: 'white' },
    // Text(label) added to the node
  },

];

const width = "100%";
const height = "700px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
