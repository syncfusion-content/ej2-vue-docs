<template>
  <div id="app">
    <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="580px" />
  </div>
</template>

<script>
import { DiagramComponent } from "@syncfusion/ej2-vue-diagrams";
const group = [
  { id: "rectangle1", offsetX: 100, offsetY: 100, width: 100, height: 100, annotations: [{ content: "node1" }] },
  { id: "rectangle2", offsetX: 200, offsetY: 200, width: 100, height: 100, annotations: [{ content: "node2" }] },
  { id: "group", children: ["rectangle1", "rectangle2"] },
  { id: "rectangle3", offsetX: 400, offsetY: 400, width: 100, height: 100, annotations: [{ content: "node1" }] },
  { id: "rectangle4", offsetX: 500, offsetY: 500, width: 100, height: 100, annotations: [{ content: "node2" }] },
  { id: "group2", children: ["rectangle3", "rectangle4"], padding: { left: 10, right: 10, top: 10, bottom: 10 } },
];
export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent,
  },
  data() {
    return {

    };
  },
  mounted() {
    const diagram = this.$refs.diagramRef.ej2Instances;
    // Add the group collection into the diagram
    diagram.addElements(group);
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>
