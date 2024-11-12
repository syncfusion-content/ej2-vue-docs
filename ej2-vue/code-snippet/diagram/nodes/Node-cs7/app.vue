<template>
  <div id="app">
    <button @click="size">Change Size</button>
    <button @click="color">Change Color</button>
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
    size() {
      if (this.$refs.diagram.ej2Instances.nodes[0].width === 100) {
        this.$refs.diagram.ej2Instances.nodes[0].width = 200;
      } else {
        this.$refs.diagram.ej2Instances.nodes[0].width = 100;
      }
    },
    color() {
      if (this.$refs.diagram.ej2Instances.nodes[0].style.fill === '#6BA5D7') {
        this.$refs.diagram.ej2Instances.nodes[0].style.fill = 'orange';
      } else {
        this.$refs.diagram.ej2Instances.nodes[0].style.fill = '#6BA5D7';
      }
    },
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
