<template>
  <div id="app">
    <label>Size Option</label><select id="sizeChange" ref="sizeChange" v-on:change="onSizeChange()">
      <option value="Width">Width</option>
      <option value="Height">Height</option>
      <option value="Size">size</option>
    </select>
    <ejs-diagram
      id="diagram"
      ref="diagramObj"
      :width="width"
      :height="height"
      :nodes="nodes"
    ></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent } from "@syncfusion/ej2-vue-diagrams";

let nodes = [
  {
    id: "node1",
    width: 100,
    height: 80,
    offsetX: 140,
    offsetY: 100,
    annotations: [{ content: "Node1" }],
  },
  {
    id: "node2",
    width: 100,
    height: 60,
    offsetX: 140,
    offsetY: 200,
    annotations: [{ content: "Node2" }],
  },
  {
    id: "node3",
    width: 200,
    height: 30,
    offsetX: 140,
    offsetY: 300,
    annotations: [{ content: "Node3" }],
  },
];
export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent,
  },
  data() {
    return {
      width: "1000px",
      height: "350px",
      nodes: nodes,
    };
  },
  methods: {
    onSizeChange: function () {
      let diagramInstance = this.$refs.diagramObj.ej2Instances;
      let objects = diagramInstance.nodes;
      var size = this.$refs.sizeChange.value;
      diagramInstance.sameSize(size, objects);
    },
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
