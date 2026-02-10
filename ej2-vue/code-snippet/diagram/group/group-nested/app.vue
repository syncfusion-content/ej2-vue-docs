<template>
  <div id="app">
    <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="600px" :nodes="nodes" />
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
      nodes: [
        {
          id: "node1",
          width: 100,
          height: 100,
          offsetX: 100,
          offsetY: 100,
          annotations: [{ content: "Node1" }],
        },
        {
          id: "node2",
          width: 100,
          height: 100,
          offsetX: 200,
          offsetY: 200,
          annotations: [{ content: "Node2" }],
        },
        {
          id: "node3",
          width: 100,
          height: 100,
          offsetX: 300,
          offsetY: 350,
          annotations: [{ content: "Node3" }],
        },
        {
          id: "node4",
          width: 100,
          height: 100,
          offsetX: 500,
          offsetY: 350,
          annotations: [{ content: "Node4" }],
        },
        {
          id: "group1",
          children: ["node1", "node2"],
          padding: { left: 20, right: 20, top: 20, bottom: 20 },
          style: { fill: "green" },
        },
        {
          id: "group2",
          children: ["node3", "node4"],
          padding: { left: 20, right: 20, top: 20, bottom: 20 },
          style: { fill: "skyblue" },
        },
        // Nested Group
        {
          id: "group3",
          children: ["group1", "group2"],
          padding: { left: 20, right: 20, top: 20, bottom: 20 },
          style: { fill: "yellow" },
        },
      ],
    };
  },
  mounted() {
    const diagramInstance = this.$refs.diagramRef.ej2Instances;
    diagramInstance.select([diagramInstance.getObject("group3")]);
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
