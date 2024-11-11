<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :elementDraw="elementDraw"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, DiagramTools } from '@syncfusion/ej2-vue-diagrams';

const width = "100%";
const height = "700px";
const elementDraw = function () {
        if (args.state === 'Completed') {
          // Example of alerting when a rectangle is drawn
          alert('Element draw - Rectangle');
        }
      }
onMounted(function () {
    const diagramInstance = this.$refs.diagram.ej2Instances;
    let drawingshape = { type: 'Basic', shape: 'Rectangle' };
    let node = {
        shape: drawingshape
    };
    diagramInstance.drawingObject = node;
    //To draw an object once, activate draw once
    diagramInstance.tool = DiagramTools.ContinuousDraw;
    diagramInstance.dataBind();
});
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
