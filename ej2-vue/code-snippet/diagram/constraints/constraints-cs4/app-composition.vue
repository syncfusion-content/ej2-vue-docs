<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, AnnotationConstraints,
} from '@syncfusion/ej2-vue-diagrams';
const nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    width: 300,
    height: 200,
    annotations: [
      {
        content: 'Interaction enabled',
        offset: { x: 0.5, y: 0.1 },
        constraints: AnnotationConstraints.Interaction,
      },
      {
        content: 'ReadOnly enabled',
        offset: { x: 0.2, y: 0.5 },
        constraints: AnnotationConstraints.ReadOnly,
      },
      {
        content: 'Select and drag enabled',
        offset: { x: 0.8, y: 0.5 },
        constraints: AnnotationConstraints.Select | AnnotationConstraints.Drag,
      },
      {
        content: 'Select and rotate enabled',
        offset: { x: 0.5, y: 0.9 },
        constraints:
          AnnotationConstraints.Select | AnnotationConstraints.Rotate,
      },
    ],
  },
];

const width = "100%";
const height = "700px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
