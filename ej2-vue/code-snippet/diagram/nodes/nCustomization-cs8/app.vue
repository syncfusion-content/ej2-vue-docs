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
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 270,
    offsetY: 170,
    zIndex: 2,
    annotations: [
      {
        content: 'Node 1',
      },
    ],
  },
  {
    id: 'end',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 200,
    zIntex: 1,
    annotations: [
      {
        content: 'Node 2',
      },
    ],
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
