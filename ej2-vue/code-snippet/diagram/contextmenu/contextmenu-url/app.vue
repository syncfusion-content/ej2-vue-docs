<template>
  <div id="app">
    <ejs-diagram id="diagram" ref="diagram" :width="width" :height="height" :nodes="nodes"
      :contextMenuSettings="contextMenuSettings" :contextMenuBeforeItemRender="contextMenuBeforeItemRender">
    </ejs-diagram>
  </div>
</template>
<script>
import {
  DiagramComponent,
  DiagramContextMenu,
} from "@syncfusion/ej2-vue-diagrams";

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

const itemBeforeRender = (args) => {
  args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
}

export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent,
  },
  data() {
    return {
      width: "100%",
      height: "350px",
      nodes: nodes,
      contextMenuSettings: {
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
      },
      contextMenuBeforeItemRender: itemBeforeRender
    };
  },
  provide: {
    diagram: [DiagramContextMenu],
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
