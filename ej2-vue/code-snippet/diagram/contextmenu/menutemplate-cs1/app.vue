<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :contextMenuSettings="contextMenuSettings"
      :contextMenuClick="contextMenuClick"
      :contextMenuBeforeItemRender="contextMenuBeforeItemRender"
    ></ejs-diagram>
  </div>
</template>
<script>
import {DiagramComponent, DiagramContextMenu,} from "@syncfusion/ej2-vue-diagrams";
import { createElement } from "@syncfusion/ej2-base";

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
            text: "Cut",
            id: "Cut",
            target: ".e-diagramcontent",
            iconCss: "e-cut e-icons",
          },
          {
            text: "Copy",
            id: "Copy",
            target: ".e-diagramcontent",
            iconCss: "e-icons e-copy",
          },
          {
            text: "Paste",
            id: "Paste",
            target: ".e-diagramcontent",
            iconCss: "e-icons e-paste",
          },
        ],
        showCustomMenuOnly: true,
      },
      contextMenuBeforeItemRender: (args) => {
        // To render template in li.
        let shortCutSpan = createElement("span");
        let text = args.item.text;
        let shortCutText =
          text === "Cut"
            ? " Ctrl + X"
            : text === "Copy"
            ? " Ctrl + C"
            : " Ctrl + V";
        shortCutSpan.textContent = shortCutText;
        shortCutSpan.setAttribute("class", "shortcut");
        args.element.appendChild(shortCutSpan);
      },
      contextMenuClick: (args) => {
        var diagram = this.$refs.diagram.ej2Instances;
        let selectedNode = diagram.selectedItems.nodes[0];
        if (selectedNode) {
          if (args.item.text === "Cut") {
            diagram.cut();
          } else if (args.item.text === "Copy") {
            diagram.copy();
          }
        }
        if (args.item.text === "Paste") {
          diagram.paste();
        }
      },
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
