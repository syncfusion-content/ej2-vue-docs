<template>
    <div id="app">
         <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors' :segmentChange='segmentChange'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram,ConnectorEditing,
  ConnectorConstraints, } from '@syncfusion/ej2-vue-diagrams';

const connectors = [
{
  id: 'connector1',
  type: 'Straight',
  constraints:
    ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
  sourcePoint: {
    x: 100,
    y: 100,
  },
  targetPoint: {
    x: 200,
    y: 200,
  },
  segments: [
    {
      type: 'Straight',
      point: {
        x: 170,
        y: 150,
      },
    },
  ],
},
]

const width = "100%";
const height = "350px";
const  segmentChange  = (args) => {
    console.log('segmentChange');
}
provide('diagram', [ConnectorEditing]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>