<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :selectedItems="selectedItems"></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  pivot: {
      x: 0,
      y: 0
  },
  style: {
      fill: '#6BA5D7',
      strokeColor: 'white'
  },
  // Text(label) added to the node
}];

const width = "100%";
const height = "350px";
onMounted(function () {
    const diagramInstance = this.$refs.diagram.ej2Instances;
    diagramInstance.select([diagramInstance.nodes[0]]);
});
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
