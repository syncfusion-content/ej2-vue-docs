<template>
  <div id="app">
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
    visible: true,
    style: {
      fill: '#6AA8D7',
      strokeColor: 'white',
      strokeWidth: 5,
      strokeDashArray: '3',
      opacity: 0.7,
    },
    // Text(label) added to the node
  },
  {
    // Position of the node
    offsetX: 450,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    visible: false,
    style: {
      fill: '#6AA8D7',
      strokeColor: 'white',
      strokeWidth: 5,
      strokeDashArray: '3',
      opacity: 0.7,
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
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
