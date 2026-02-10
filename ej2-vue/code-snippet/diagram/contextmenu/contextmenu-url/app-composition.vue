<template>
  <div id="app">
    <ejs-diagram id="diagram" ref="diagram" :width="width" :height="height" :nodes="nodes"
      :contextMenuSettings="contextMenuSettings" :contextMenuBeforeItemRender="itemBeforeRender">
    </ejs-diagram>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, DiagramContextMenu } from '@syncfusion/ej2-vue-diagrams';

const width = "100%";
const height = "350px";

let nodes = [
  {
    id: "node1",
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    annotations: [
      {
        id: "label1",
        content: "Rectangle1",
      },
    ],
  },
  {
    id: "node2",
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    annotations: [
      {
        id: "label2",
        content: "Rectangle2",
      },
    ],
  },
];

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

const itemBeforeRender = (args) => {
  args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
}

provide('diagram', [DiagramContextMenu]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-icons/styles/tailwind3.css';
</style>
