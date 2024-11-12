<template>
    <div id="app">
       <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors' :positionChange='positionChange'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram ,ConnectorConstraints,ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';
const  connectors = [
{
  // Unique name for the connector
  id: 'connector1',
  sourceID: 'Start',
  sourcePoint: {
    x: 100,
    y: 100,
  },
  targetPoint: {
    x: 200,
    y: 200,
  },
  constraints :ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb
},
]
provide('diagram', [ConnectorEditing]);
const width = "100%";
const height = "350px";
const  segmentCollectionChange  = (args) => {
  if (args.type === 'Addition') {
    console.log('segmentCollectionChange');
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
