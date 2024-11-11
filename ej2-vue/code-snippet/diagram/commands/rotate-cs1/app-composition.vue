<template>
    <div id="app">
       <button @click="clock">Rotate Clock Wise</button>
        <button @click="antiClock">Rotate AntiClock Wise</button>
        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagramObj = ref(null);
const nodes = [{
    id: 'node1',
    offsetX: 100,
    offsetY: 100,
    width: 70,
    height: 40,
    annotations: [{ content: 'Node 1' }],
  },];

const width = "100%";
const height = "350px";

const clock = function () {
  let diagramInstance = diagramObj.value.ej2Instances;
  let node = diagramInstance.nodes[0];
      /**
       * paramter 1 - Rotate item
       * paramter 2 - angle to be rotated
       */
      diagramInstance.rotate(node, 45);
};
const antiClock = function () {
  let diagramInstance = diagramObj.value.ej2Instances;
  let node = diagramInstance.nodes[0];
      /**
       * paramter 1 - Rotate item
       * paramter 2 - angle to be rotated
       */
      diagramInstance.rotate(node, -45);
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
