<template>
<div id="app">
    <ejs-diagram id="diagram" :width='width' :connectors='connector' :height='height' :nodes='nodes' :tooltip='tooltip'
        :constraints='constraints'>
    </ejs-diagram>
</div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram,  ConnectorConstraints,NodeConstraints } from '@syncfusion/ej2-vue-diagrams';

let nodes = [
{
  id: 'node1',
  width: 100,
  height: 100,
  annotations: [
    {
      id: 'label',
      content: 'Rectangle',
      offset: {
        x: 0.5,
        y: 0.5,
      },
      style: {
        color: 'white',
      },
    },
  ],
  offsetX: 200,
  offsetY: 200,
  style: {
    strokeColor: '#6BA5D7',
    fill: '#6BA5D7',
  },
  //To inherit diagram tooltip
  constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
  //Defines mouse over tooltip for a node
  tooltip: {
    //Sets the content of the tooltip
    content: 'Node',
  },
},]
let connector = [{
  id: 'con1',
  sourcePoint: { x: 300, y: 150 },
  targetPoint: { x: 400, y: 250 },
  tooltip: { content: 'connector' },
  constraints: ConnectorConstraints.Default | ConnectorConstraints.Tooltip,
}]
const width = "100%";
const height = "350px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
