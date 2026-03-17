<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    // Sets the annotation for the node
    annotations: [{
        content: 'Annotation visibility true',
        // Sets the style for the text to be displayed
        style: {
            color: 'blue',
            bold: true,
            italic: true,
            fontSize: 15,
            fontFamily: 'TimesNewRoman',
            fill: 'orange',
            opacity: 0.6,
        },
        visibility:true
    },
    {
        content: 'Annotation visibility false',
        offset: { x: 0.5, y: 1 },
        style: {
          color: 'blue',
          bold: true,
          italic: true,
          fontSize: 15,
          fontFamily: 'TimesNewRoman',
          fill: 'orange',
          whiteSpace: 'PreserveAll',
          opacity: 0.6,
        },
        visibility: false,
    }
    ]
}];

const width = "750px";
const height = "350px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
