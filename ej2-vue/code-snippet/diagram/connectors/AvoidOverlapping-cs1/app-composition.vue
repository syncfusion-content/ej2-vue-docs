<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
            :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
  id: 'Start',
  offsetX: 250,
  offsetY: 150,
  annotations: [{ content: 'Start' }],
},
{
  id: 'End',
  offsetX: 350,
  offsetY: 200,
  annotations: [{ content: 'End' }],
},
];
const connectors = [{
   id: 'connector1',
  style: {
    strokeColor: '#6BA5D7',
    fill: '#6BA5D7',
    strokeWidth: 2,
  },
  targetDecorator: { shape: 'None' },
  // ID of the source and target nodes
  sourceID: 'Start',
  targetID: 'End',
  type: 'Bezier',
  constraints :
        ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb
}]

const width = "100%";
const height = "550px";
const getNodeDefaults = (node) => {
    node.height = 100;
    node.width = 100;
    node.style.fill = '#6BA5D7';
    node.style.strokeColor = 'white';
    return node;
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>