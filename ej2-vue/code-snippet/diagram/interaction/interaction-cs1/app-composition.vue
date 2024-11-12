<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :selectedItems="selectedItems"></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    height: 100,
    width: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
  },
];

const width = "100%";
const height = "350px";
const selectedItems = { canToggleSelection: true }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
