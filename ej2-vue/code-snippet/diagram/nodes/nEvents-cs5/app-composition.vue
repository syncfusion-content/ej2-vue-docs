<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :rotateChange="rotateChange"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [
  {
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 250,
    offsetY: 200,
    annotations: [
      {
        content: 'Rotate node',
      },
    ],
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
  },
];

const width = "100%";
const height = "700px";
const rotateChange = function () {
        if (args.state === 'Completed') {
          console.log('Rotate Changed');
        }
      }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
