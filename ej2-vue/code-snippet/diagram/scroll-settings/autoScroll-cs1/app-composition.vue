<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :scrollSettings='scrollSettings'
         :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, ConnectorConstraints, ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
  id: 'node1',
  width: 100,
  height: 60,
  offsetX: 200,
  offsetY: 300,
  annotations: [
    { content: 'Drag or resize the node to activate autoscroll' },
  ],
}];
const connectors = [{
  id: 'con1',
  type: 'Bezier',
  segments: [{ type: 'Bezier', point: { x: 150, y: 100 } }],
  sourcePoint: { x: 100, y: 100 },
  targetPoint: { x: 300, y: 100 },
  annotations: [
    {
      content: 'Adjust control point or end point to autoScroll',
      alignment: 'After',
    },
  ],
  constraints:
    ConnectorConstraints.Default |
    ConnectorConstraints.DragSegmentThumb,
}]
const width = "750px";
const height = "700px";
const rulerSettings = { showRulers: true };
const scrollSettings = {
    canAutoScroll: true,
    scrollLimit: 'Infinity',
    autoScrollBorder: {
        left: 100,
        right: 100,
        top: 100,
        bottom: 100
    }
}
provide('diagram', [ConnectorEditing]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
