<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :connectors="connectors"
      :click="click"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

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
];

const width = "100%";
const height = "700px";
const click = function () {
        let element = 'Diagram';
        if (args.actualObject instanceof Node) {
          element = 'Node';
        } else if (args.actualObject instanceof Connector) {
          element = 'Connector';
        }
        alert(element + ' is clicked');
      }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
