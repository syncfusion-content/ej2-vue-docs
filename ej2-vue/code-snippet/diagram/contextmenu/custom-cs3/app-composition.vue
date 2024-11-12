<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
            :contextMenuSettings='contextMenuSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DiagramComponent as EjsDiagram, DiagramContextMenu } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = [{
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    annotations: [{
        id: 'label1',
        content: 'Rectangle1',
    }]
},
{
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    annotations: [{
        id: 'label2',
        content: 'Rectangle2',
    }]
}
];
const connectors = [{
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    type: 'Straight',
}]

const width = "100%";
const height = "350px";
const contextMenuSettings = {
   show: true,
        items: [
          {
            text: "Google.com",
            id: "google",
            target: ".e-diagramcontent",
            url: "https://www.google.co.in/",
          },
          {
            text: "w3schools.com",
            id: "W3Schools",
            target: ".e-diagramcontent",
            url: "https://www.w3schools.com/",
          },
          {
            text: "stackoverflow.com",
            id: "stackoverflow",
            target: ".e-diagramcontent",
            url: "https://stackoverflow.com/",
          },
        ],
        showCustomMenuOnly: true,
};


provide('diagram', [DiagramContextMenu]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/fabric.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
</style>
