<template>
  <div id="app">
    <ejs-diagram id="diagram" ref="diagram" :width="width" :height="height" :nodes="nodes"
      :snapSettings="snapSettings"></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent, SnapConstraints, Snapping } from '@syncfusion/ej2-vue-diagrams';
let nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    height: 100,
    width: 100,
    annotations: [{ content: 'Node 1' }],
  },
  {
    id: 'Node2',
    offsetX: 400,
    offsetY: 200,
    height: 100,
    width: 100,
    annotations: [{ content: 'Node 2' }],
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
      snapSettings: {
        constraints: SnapConstraints.ShowHorizontalLines | SnapConstraints.SnapToObject,
      },
    };
  },
  provide: {
    diagram: [Snapping]
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
