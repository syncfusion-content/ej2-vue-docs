<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, BpmnDiagrams } from '@syncfusion/ej2-vue-diagrams';

const connectors = [{
  // Position of the node
  sourcePoint: {
      x: 100,
      y: 100
  },
  targetPoint: {
      x: 300,
      y: 100
  },
  //Sets type of the connector as Orthogonal
  type: 'Orthogonal',
  //Sets type as Bpmn, shflowape as Association and association as BiDirectional
  shape: {
      type: 'Bpmn',
      flow: 'Association',
      association: 'BiDirectional'
  },
},
{
  // Position of the node
  sourcePoint: {
      x: 100,
      y: 200
  },
  targetPoint: {
      x: 300,
      y: 200
  },
  //Sets type of the connector as Orthogonal
  type: 'Orthogonal',
  //Sets type as Bpmn, shflowape as Association and association as Directional
  shape: {
      type: 'Bpmn',
      flow: 'Association',
      association: 'Directional'
  },
},
{
  // Position of the node
  sourcePoint: {
      x: 100,
      y: 300
  },
  targetPoint: {
      x: 300,
      y: 300
  },
  //Sets type of the connector as Orthogonal
  type: 'Orthogonal',
  //Sets type as Bpmn, shflowape as Association and association as Default
  shape: {
      type: 'Bpmn',
      flow: 'Association',
      association: 'Default'
  },
}]
const width = "100%";
const height = "600px";

provide('diagram', [BpmnDiagrams]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
