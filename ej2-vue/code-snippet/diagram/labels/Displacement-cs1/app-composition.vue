<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const connectors = [{
  sourcePoint: { x: 200, y: 100 },
  targetPoint: { x: 500, y: 100 },
  type: 'Straight',
  //Path annotation offset
  annotations: [
    { 
      content: 'annotation', 
      alignment: 'After',
      displacement: { x: 50, y: 50 },
    }
  ],
}];

const width = "750px";
const height = "500px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
