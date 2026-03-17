<template>
    <div id="app">
      <button @click="right">Right</button>
      <button @click="left">Left</button>
      <button @click="up">Up</button>
      <button @click="down">Down</button>
        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagramObj = ref(null);
const nodes = [ {
    id: 'node1',
    offsetX: 100,
    offsetY: 100,
    width: 70,
    height: 40,
  },];

const width = "100%";
const height = "350px";

const right = function () {
  let diagramInstance = diagramObj.value.ej2Instances;
  diagramInstance.nudge('Right');
}
const left = function () {
  let diagramInstance = diagramObj.value.ej2Instances;
  diagramInstance.nudge('Left');
};
const up = function () {
  let diagramInstance = diagramObj.value.ej2Instances;
  diagramInstance.nudge('Up');
};
const down = function () {
  let diagramInstance = diagramObj.value.ej2Instances;
  diagramInstance.nudge('Down');
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
