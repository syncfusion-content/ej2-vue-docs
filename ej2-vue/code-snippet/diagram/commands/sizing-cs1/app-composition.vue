<template>
    <div id="app">
 
        <label >Size Option </label>
        <select id="sizeChange" ref="sizeChange" v-on:change="sizeChangeFunction">
            <option value="Width">Width</option>
            <option value="Height">Height</option>
            <option value="Size">Size</option>
        </select>
 
        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes"
          ></ejs-diagram>
 
    </div>
</template>
 
<script setup>
import {ref } from "vue";
import { DiagramComponent as EjsDiagram, SnapConstraints, PrintAndExport, Rect } from '@syncfusion/ej2-vue-diagrams';
 
const diagramObj = ref(null);
const sizeChange = ref(null);

//Initialize nodes
let nodes = [
    {
    id: "node1",
    width: 100,
    height: 80,
    offsetX: 140,
    offsetY: 100,
    annotations: [{ content: "Node1" }],
  },
  {
    id: "node2",
    width: 100,
    height: 60,
    offsetX: 140,
    offsetY: 200,
    annotations: [{ content: "Node2" }],
  },
  {
    id: "node3",
    width: 200,
    height: 30,
    offsetX: 140,
    offsetY: 300,
    annotations: [{ content: "Node3" }],
  },
];
 
const width = "1000px";
const height = "590px";
const snapSettings = { constraints: SnapConstraints.None };
 
const sizeChangeFunction = function () {
  debugger;
  let diagramInstance = diagramObj.value.ej2Instances;
  let objects = diagramInstance.nodes;
  var size = sizeChange.value.value;
  diagramInstance.sameSize(size, objects);
};
</script>
 
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>