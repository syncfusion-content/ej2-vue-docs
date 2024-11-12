<template>
<div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
        :getNodeDefaults='getNodeDefaults'></ejs-diagram>
</div>
</template>
<script>

import { DiagramComponent,
  ConnectorConstraints, } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
  id: 'Start',
  offsetX: 250,
  offsetY: 150,
  annotations: [{ content: 'Start' }],
},
{
  id: 'End',
  offsetX: 450,
  offsetY: 300,
  annotations: [{ content: 'End' }],
},
];
let connectors = [{
  id: 'connector1',
  style: {
    strokeColor: '#6BA5D7',
    fill: '#6BA5D7',
    strokeWidth: 2,
  },
  segments: [
    {
      type: 'Bezier',
      point1: { x: 450, y: 150 },
      point2: { x: 250, y: 250 },
    },
  ],
  //Prevent segment reset whil moving source or target node.
  bezierSettings: { allowSegmentsReset: false },
  targetDecorator: { shape: 'None' },
  // ID of the source and target nodes
  sourceID: 'Start',
  targetID: 'End',
  type: 'Bezier',
  constraints :
      ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb
},
];
export default {
name: "App",
components: {
    "ejs-diagram": DiagramComponent
},
data() {
    return {
        width: "100%",
        height: "550px",
        nodes: nodes,
        connectors: connectors,
        getNodeDefaults: (node) => {
            node.height = 100;
            node.width = 100;
            node.style.fill = '#6BA5D7';
            node.style.strokeColor = 'white';
            return node;
        },
    }
}
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
