<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :collectionChange="collectionChange"
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
        content: 'Node',
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
const add = function () {
    diagram.value.ej2Instances.add(nodes[0]);
}
const collectionChange = function () {
          if (args.state === 'Changed') {
          alert('Collection changed');
            }
      }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
