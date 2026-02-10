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
  offsetX: 450,
  offsetY: 300,
  annotations: [{ content: 'End' }],
},
];
const connectors =  [{
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
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>