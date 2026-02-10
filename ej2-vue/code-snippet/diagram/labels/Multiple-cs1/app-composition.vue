<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: 'node1',
    // Position of the node
    offsetX: 450,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // Sets the multiple annotation for the node
    annotations: [{
        content: 'Left',
        offset: {
            x: 0.12,
            y: 0.1
        }
    },
    {
        content: 'Center',
        offset: {
            x: 0.5,
            y: 0.5
        }
    },
    {
        content: 'Right',
        offset: {
            x: 0.82,
            y: 0.9
        }
    }
    ]
}];

const connectors = [{
  id: 'connector',
  type: 'Orthogonal',
  sourcePoint: { x: 200, y: 200 },
  targetPoint: { x: 300, y: 300 },
  // Sets the multiple annotation for the node
  annotations: [
    {
      content: 'Top',
      offset: 0.2,
    },
    {
      content: 'Center',
      offset: 0.6,
    },
    {
      content: 'Bottom',
      offset: 0.8,
    },
  ],
}]

const width = "750px";
const height = "600px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
