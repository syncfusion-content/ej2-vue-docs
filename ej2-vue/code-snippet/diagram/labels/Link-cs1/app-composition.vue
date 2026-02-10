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
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    // Sets the annotation for the Node
    annotations: [{
        hyperlink: {
            link: 'https://stackoverflow.com/',
            //Set the link to open in the current tab
            hyperlinkOpenState: 'NewWindow'
        }
    }]
}]

const connectors = [{
    sourcePoint: { x: 300, y: 200 },
    targetPoint: { x: 500, y: 300 },
    type: 'Orthogonal',
    //Path annotation offset
    annotations: [
      {
        hyperlink: {
          link: 'https://google.com',
          hyperlinkOpenState: 'NewWindow',
          content: 'Google',
          color: 'orange',
          textDecoration: 'Underline',
        },
      },
    ],
}]

const width = "750px";
const height = "350px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
