<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, BpmnDiagrams, Diagram } from '@syncfusion/ej2-vue-diagrams';

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
  type: 'Orthogonal',
  //Sets type as Bpmn, flow as Sequence, and sequence as Default
  shape: {
      type: 'Bpmn',
      flow: 'Sequence',
      sequence: 'Default'
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
  type: 'Orthogonal',
  //Sets type as Bpmn, flow as Sequence, and sequence as Normal
  shape: {
      type: 'Bpmn',
      flow: 'Sequence',
      sequence: 'Normal'
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
  type: 'Orthogonal',
  //Sets type as Bpmn, flow as Sequence, and sequence as Conditional
  shape: {
      type: 'Bpmn',
      flow: 'Sequence',
      sequence: 'Conditional'
  },
},]

const width = "100%";
const height = "600px";

provide('diagram', [BpmnDiagrams]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
