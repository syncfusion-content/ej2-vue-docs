<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
      :getNodeDefaults='getNodeDefaults'>
    </ejs-diagram>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, ConnectorEditing, ConnectorConstraints ,BezierSmoothness,PortVisibility} from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: 'Start',
    offsetX: 250,
    offsetY: 150,
    annotations: [{ content: 'Start' }],
    ports: [{
    id: 'StartPort',
    visibility: PortVisibility.Visible,
    shape: 'Circle',
    offset: { x: 1, y: 0.5 },
    style: { strokeColor: '#366F8C', fill: '#366F8C' }
    }]},
    {
    id: 'End',
    offsetX: 250,
    offsetY: 350,
    annotations: [{ content: 'End' }],
    ports: [{
    id: 'EndPort',
    visibility: PortVisibility.Visible,
    shape: 'Circle',
    offset: { x: 0, y: 0.5 },
    style: { strokeColor: '#366F8C', fill: '#366F8C' }
    }]
}];

let connectors = [{
    id: "connector1",
    targetDecorator: { shape: 'None' },
    // ID of the source and target nodes
    sourceID: 'Start',
    sourcePortID: 'StartPort',
    targetID: 'End',
    targetPortID: 'EndPort',
    type: 'Bezier',
    // Configuring settings for bezier interactions
    bezierSettings: {
    smoothness: BezierSmoothness.SymmetricAngle,
    segmentEditOrientation: 'FreeForm',
    },constraints :
    ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb
}];

const width = "100%";
const height = "600px";
const getNodeDefaults = (node) => {
  node.height = 100;
  node.width = 100;
  node.shape = { type: 'Basic', shape: 'Rectangle' }
  node.style.fill = '#6BA5D7';
  node.style.strokeColor = 'white';
  return node;
}
provide('diagram', [ConnectorEditing]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>