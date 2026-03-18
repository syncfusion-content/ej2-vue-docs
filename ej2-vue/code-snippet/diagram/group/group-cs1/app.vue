<template>
  <div id="app">
    <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="600px" :getNodeDefaults="getNodeDefaults"
      :nodes="nodes" />
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
          id: "rectangle1",
          offsetX: 100,
          offsetY: 100,
          width: 100,
          height: 100,
          style: {
            strokeColor: "#6BA5D7",
            fill: "#6BA5D7",
          },
          annotations: [
            {
              content: "rectangle1",
            },
          ],
        },
        {
          id: "rectangle2",
          offsetX: 200,
          offsetY: 200,
          width: 100,
          height: 100,
          style: {
            strokeColor: "#6BA5D7",
            fill: "#6BA5D7",
          },
          annotations: [
            {
              content: "rectangle2",
            },
          ],
        },
        {
          id: "group",
          children: ["rectangle1", "rectangle2"],
        },
      ],
    };
  },
  methods: {
    getNodeDefaults(node) {
      node.height = 100;
      node.width = 100;
      node.style.strokeColor = "White";
      return node;
    },
  },
  mounted() {
    // Retrieve the diagram instance
    const diagramInstance = this.$refs.diagramRef.ej2Instances;
    diagramInstance.select([diagramInstance.getObject("group")]);
  },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>
