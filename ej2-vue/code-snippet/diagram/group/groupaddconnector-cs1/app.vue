<template>
  <div id="app">
    <ejs-diagram id="diagram" width="1000px" height="600px" :nodes="nodes" :connectors="connectors" />
  </div>
</template>

<script>
import { DiagramComponent } from "@syncfusion/ej2-vue-diagrams";

export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent,
  },
  data() {
    return {
      connectors: [
        {
          id: "connector1",
          type: "Orthogonal",
          sourceID: "node1",
          targetID: "node2",
        },
      ],
      nodes: [
        {
          id: "node1",
          height: 100,
          width: 100,
          offsetX: 100,
          offsetY: 100,
          annotations: [{ content: "Node1" }],
        },
        {
          id: "node2",
          height: 100,
          width: 100,
          offsetX: 300,
          offsetY: 100,
          annotations: [{ content: "Node2" }],
        },
        // Defining group having connector children
        {
          id: "group",
          children: ["node1", "node2", "connector1"],
          style: { strokeWidth: 0 },
        },
      ],
    };
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>
