<template>
<div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors' :nodes='nodes' :click='click'></ejs-diagram>
</div>
</template>
<script>
import { DiagramComponent,Node,Connector } from '@syncfusion/ej2-vue-diagrams';
let nodes = [
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
let connectors = [
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
export default {
name: "App",
components: {
    "ejs-diagram": DiagramComponent
},
 data() {
    return {
        width: "100%",
        height: "350px",
        connectors: connectors,
        nodes:nodes,
        click: (args) => {
          let element = 'Diagram';
          if (args.actualObject instanceof Node) {
            element = 'Node';
          } else if (args.actualObject instanceof Connector) {
            element = 'Connector';
          }
          alert(element + ' Clicked');
        },
    }
}
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
