<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :connectors="connectors"
      :contextMenuSettings="contextMenuSettings"
      :contextMenuOpen="contextMenuOpen"
      :contextMenuClick="contextMenuClick"
    ></ejs-diagram>
  </div>
</template>
<script>
import {DiagramComponent,DiagramContextMenu} from "@syncfusion/ej2-vue-diagrams";

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
            text: "Change fill",
            id: "applyFill",
            target: ".e-diagramcontent",
            iconCss: "e-icons e-paint-bucket",
          },
          {
            text: "Change stroke",
            id: "applyStroke",
            target: ".e-diagramcontent",
            iconCss: "e-icons e-edit",
          },
          {
            text: "Select All",
            id: "selectAll",
            target: ".e-diagramcontent",
          },
        ],
        showCustomMenuOnly: true,
      },
      contextMenuOpen: (args) => {
        var diagram = this.$refs.diagram.ej2Instances;
        let hiddenItems = [];
        let selectedNode = diagram.selectedItems.nodes[0];
        let selectedConnector = diagram.selectedItems.connectors[0];
        if (selectedNode || selectedConnector) {
          hiddenItems.push("selectAll");
        } else {
          hiddenItems = ["applyFill", "applyStroke"];
        }
        args.hiddenItems = hiddenItems;
      },
      contextMenuClick: (args) => {
        var diagram = this.$refs.diagram.ej2Instances;
        let selectedNode = diagram.selectedItems.nodes[0];
        let selectedConnector = diagram.selectedItems.connectors[0];
        if (selectedNode || selectedConnector) {
          if (selectedNode) {
            if (args.item.id === "applyFill") {
              selectedNode.style.fill =
                selectedNode.style.fill === "#6BA5D7" ? "green" : "#6BA5D7";
            } else if (args.item.id === "applyStroke") {
              selectedNode.style.strokeColor =
                selectedNode.style.strokeColor === "black" ? "yellow" : "black";
            }
          }
          if (selectedConnector) {
            if (args.item.id === "applyFill") {
              selectedConnector.targetDecorator.style.fill =
                selectedConnector.targetDecorator.style.fill === "yellow"
                  ? "black"
                  : "yellow";
            }
            selectedConnector.style.strokeColor =
              selectedConnector.style.strokeColor === "black"
                ? "yellow"
                : "black";
          }
        } else {
          diagram.selectAll();
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
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
