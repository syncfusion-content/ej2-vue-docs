<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :selectedItems="selectedItems" :connectors="connectors"></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 250,
    height: 100,
    width: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
  },
];
const connectors = [
  {
    id: 'con1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 150 },
  },
];

const width = "100%";
const height = "350px";
const selectedItems = { handleSize: 40 }
onMounted(function () {
    const diagramInstance = this.$refs.diagram.ej2Instances;
    diagramInstance.select([diagramInstance.nodes[0]]);
});
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
