<template>
  <div id="app">
    <button @click="rotate">Rotate</button>
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

const diagram = ref(null);
const nodes = [
  {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
      fill: "#6BA5D7",
      strokeColor: "white",
    },
    // Text(label) added to the node
  },
];

const width = "100%";
const height = "700px";
const rotate = function () {
  this.$refs.diagram.ej2Instances.rotate(this.$refs.diagram.ej2Instances.nodes[0], this.$refs.diagram.ej2Instances.nodes[0].rotateAngle + 15);
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
