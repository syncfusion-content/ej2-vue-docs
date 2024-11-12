<template>
    <div id="app">
       <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors' :nodes='nodes' :click='click'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram,Connector,Node } from '@syncfusion/ej2-vue-diagrams';

const nodes = [
  {
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [
      {
        content: 'Click node',
      },
    ],
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
  },
];
const connectors = [
{
  // Unique name for the connector
  id: 'connector1',
  sourceID: 'Start',
  targetPoint: { x: 300, y: 200 },
  type: 'Orthogonal',
  annotations: [
    {
      content: 'Click Connector',
    },
  ],
},
]

const width = "100%";
const height = "350px";
const click =(args) => {
          let element = 'Diagram';
          if (args.actualObject instanceof Node) {
            element = 'Node';
          } else if (args.actualObject instanceof Connector) {
            element = 'Connector';
          }
          alert(element + ' Clicked');
        };
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
