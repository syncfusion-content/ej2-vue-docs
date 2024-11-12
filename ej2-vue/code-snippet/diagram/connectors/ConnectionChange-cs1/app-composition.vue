<template>
    <div id="app">
          <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors' :nodes='nodes' :connectionChange ='connectionChange' ></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
const nodes = [
  {
    id: 'node1',
    offsetX: 200,
    offsetY: 200,
    width: 120,
    height: 60,
    style: { fill: 'skyblue' },
  },
  {
    id: 'node2',
    offsetX: 500,
    offsetY: 200,
    width: 120,
    height: 60,
    style: { fill: 'skyblue' },
  },
];
const connectors = [
  {
    // Name of the connector
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
  },
];

const width = "100%";
const height = "350px";
const connectionChange =(args) => {
  if (args.state === 'Changed') {
    console.log('connectionChange ');
      //Customize
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
