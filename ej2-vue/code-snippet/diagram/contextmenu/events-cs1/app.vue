<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :connectors="connectors"
      :contextMenuSettings="contextMenuSettings"
      :contextMenuOpen="contextMenuOpen"
      :contextMenuBeforeItemRender="contextMenuBeforeItemRender"
      :contextMenuClick="contextMenuClick"
    ></ejs-diagram>
  </div>
</template>
<script>
import {DiagramComponent,DiagramContextMenu,Diagram} from "@syncfusion/ej2-vue-diagrams";

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

let connectors = [
  {
    id: "connector1",
    sourceID: "node1",
    targetID: "node2",
    type: "Straight",
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
      connectors: connectors,
      contextMenuSettings: {
        show: true,
        items: [
          {
            text: "menu item 1",
            id: "item1",
          },
          {
            text: "menu item 2",
            id: "item2",
          },
        ],
        showCustomMenuOnly: true,
      },
      contextMenuBeforeItemRender:function (args) {
        //Triggers for each menu item
        console.log("context menu before item render");
      },
      contextMenuOpen: function (args) {
        //Triggers when the menu is openned
        console.log("context menu openned");
      },
      contextMenuClick: function (args) {
        //Triggers when the item is clicked
        console.log("context menu clicked");
      },
    };
  },
  provide: {
    diagram: [DiagramContextMenu],
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
