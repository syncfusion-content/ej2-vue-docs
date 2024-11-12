<template>
  <div id="app">
    <button @click="clone">Clone</button>
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
    ></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [
  {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    // Text(label) added to the node
  },
];

export default {
  name: 'App',
  components: {
    'ejs-diagram': DiagramComponent,
  },
  data() {
    return {
      width: '100%',
      height: '700px',
      nodes: nodes,
    };
  },
  methods: {
    clone() {
      const selectedNode =
        this.$refs.diagram.ej2Instances.selectedItems.nodes.length > 0
          ? this.$refs.diagram.ej2Instances.selectedItems.nodes[0]
          : this.$refs.diagram.ej2Instances.nodes[0];
      this.$refs.diagram.ej2Instances.select([
        this.$refs.diagram.ej2Instances.nodes[0],
      ]);
      this.$refs.diagram.ej2Instances.copy();
      this.$refs.diagram.ej2Instances.paste();
    },
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
