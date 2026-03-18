<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
            :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
  id: 'Start',
  width: 140,
  height: 50,
  offsetX: 300,
  offsetY: 100,
  annotations: [{
      id: 'label1',
      content: 'Start'
  }],
  shape: {
      type: 'Flow',
      shape: 'Terminator'
  }
},
{
  id: 'Init',
  width: 140,
  height: 50,
  offsetX: 300,
  offsetY: 300,
  shape: {
      type: 'Flow',
      shape: 'Process'
  },
  annotations: [{
      content: 'var i = 0;'
  }]
}];
const connectors = [{
id: "connector1",
 // Name of the connector
 id: "connector1",
 // ID of the source and target nodes
 sourceID: "Start",
 targetID: "Init",
 connectorSpacing: 7,
 type: 'Orthogonal'
}]

const width = "100%";
const height = "450px";
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
