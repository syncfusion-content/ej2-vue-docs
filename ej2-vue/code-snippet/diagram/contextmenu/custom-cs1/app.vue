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
        //Enables the context menu
        show: true,
        items: [
          {
            // Text to be displayed
            text: "Fill",
            items: [
              { id: "red", text: "Red" },
              { id: "yellow", text: "Yellow" },
              { id: "green", text: "Green" },
              { id: "blue", text: "Blue" },
            ],
            //Sets the id for the item
            id: "fill",
            target: ".e-elementcontent",
            // Sets the css icons for the item
            iconCss: "e-icons e-paint-bucket",
          },
          {
            text: "Annotation color",
            id: "annotationColor",
            items: [
              { id: "pink", text: "Pink" },
              { id: "orange", text: "Orange" },
              { id: "violet", text: "Violet" },
              { id: "brown", text: "Brown" },
            ],
            target: ".e-elementcontent",
            iconCss: "e-icons e-font-color",
          },
          {
            text: "Clone",
            id: "clone",
            target: ".e-elementcontent",
            iconCss: "e-icons e-copy",
          },
        ],
        // Hides the default context menu items
        showCustomMenuOnly: true,
      },
      contextMenuClick: (args) => {
        var diagram = this.$refs.diagram.ej2Instances;
        let selectedNode = diagram.selectedItems.nodes[0];
        if (
          selectedNode &&
          args.item.id !== "fill" &&
          args.item.id !== "annotationColor"
        ) {
          if (
            args.item.text === "Red" ||
            args.item.text === "Blue" ||
            args.item.text === "Yellow" ||
            args.item.text === "Green"
          ) {
            selectedNode.style.fill = args.item.text;
            diagram.dataBind();
          } else if (
            args.item.text === "Pink" ||
            args.item.text === "Violet" ||
            args.item.text === "Orange" ||
            args.item.text === "Brown"
          ) {
            selectedNode.annotations[0].style.fill = args.item.text;
            diagram.dataBind();
          } else {
            diagram.copy();
            diagram.paste();
          }
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
