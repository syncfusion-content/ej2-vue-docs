<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'  :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [
  {
    id:'node1',
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    zIndex:2,
    annotations:[{content:'Node1'}],
    style:{fill:'white',strokeColor:'black'}

  },
  {
    id:'node2',
    // Position of the node
    offsetX: 270,
    offsetY: 270,
    // Size of the node
    width: 100,
    height: 100,
    zIndex:1,
    annotations:[{content:'Node2'}],
    style:{fill:'white',strokeColor:'black'}
  },
];

 const getNodeDefaults = (obj) => {
    obj.style = {fill:'yellow',strokeColor:'green',strokeWidth:3}
 };

const width = "100%";
const height = "700px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
