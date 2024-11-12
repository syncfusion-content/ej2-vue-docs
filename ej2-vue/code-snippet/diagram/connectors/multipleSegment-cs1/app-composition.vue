<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, ConnectorConstraints, ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';

let connectors = [
{
  id: 'connector1',
  type: 'Orthogonal',
  // Defines multile segemnts for the connectors
  segments: [
    {
      type: 'Orthogonal',
      direction: 'Bottom',
      length: 150,
    },
    {
      type: 'Orthogonal',
      direction: 'Right',
      length: 150,
    },
    {
      type: 'Orthogonal',
      direction: 'Top',
      length: 100,
    },
    {
      type: 'Orthogonal',
      direction: 'Left',
      length: 100,
    },
  ],
  sourcePoint: {
    x: 300,
    y: 100,
  },
  targetPoint: {
    x: 350,
    y: 150,
  },
  constraints:
    ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
}, {
  id: 'connector2',
  type: 'Bezier',
  constraints:
    ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
  segments: [
    { point: { x: 150, y: 150 }, type: 'Bezier' },
    { point: { x: 250, y: 250 }, type: 'Bezier' },
  ],
  sourcePoint: { x: 100, y: 100 },
  targetPoint: { x: 300, y: 300 },
}, {
  id: 'connector3',
  type: 'Straight',
  constraints:
    ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
  segments: [
    { point: { x: 500, y: 200 }, type: 'Straight' },
    { point: { x: 600, y: 300 }, type: 'Straight' },
  ],
  sourcePoint: { x: 600, y: 100 },
  targetPoint: { x: 800, y: 300 },
},
]

const width = "100%";
const height = "350px";

provide('diagram', [ConnectorEditing]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>