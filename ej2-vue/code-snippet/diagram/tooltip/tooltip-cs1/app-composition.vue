<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'  :nodes='nodes' :connectors='connector' :selectedItems='selectedItems'
        ></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, SelectorConstraints } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
  id:'node1',
  offsetX: 350,
  offsetY: 150,
  width: 100,
  height: 100,
  style: {
      fill: '#6BA5D7',
      strokeColor: 'white'
  },
  annotations: [{
    content: 'Default tooltip disabled',
}]
}];

const connector =
[ { id: "connector1",
type:'Straight',
sourcePoint: {x: 100,y: 100},
targetPoint: { x: 200,y: 200},
annotations: [
  {
    content: 'Default tooltip disabled',
    visibility:true
  },
],
}];
//disable default tooltip
const selectedItems = { constraints: SelectorConstraints.All & ~SelectorConstraints.ToolTip }
const width = "100%";
const height = "350px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
