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
import { DiagramComponent, NodeConstraints } from '@syncfusion/ej2-vue-diagrams';
let nodes = [
  {
    id: 'Node1',
    offsetX: 100,
    offsetY: 100,
    height: 100,
    width: 100,
    annotations: [{ content: 'Select disabled' }],
    shape: {type: 'Basic', shape: 'Ellipse'},
    constraints: NodeConstraints.Default & ~NodeConstraints.Select,
  },
  {
    id: 'Node2',
    offsetX: 250,
    offsetY: 100,
    height: 100,
    width: 100,
    annotations: [{ content: 'Rotate disabled' }],
    shape: {type: 'Basic', shape: 'Ellipse'},
    constraints: NodeConstraints.Default & ~NodeConstraints.Rotate,
  },
  {
    id: 'Node3',
    offsetX: 400,
    offsetY: 100,
    height: 100,
    width: 100,
    annotations: [{ content: 'Resize disabled' }],
    shape: {type: 'Basic', shape: 'Ellipse'},
    constraints: NodeConstraints.Default & ~NodeConstraints.Resize,
  },
  {
    id: 'Node4',
    offsetX: 550,
    offsetY: 100,
    height: 100,
    width: 100,
    annotations: [{ content: 'Drag disabled' }],
    shape: {type: 'Basic', shape: 'Ellipse'},
    constraints: NodeConstraints.Default & ~NodeConstraints.Drag,
  },
  {
    id: 'Node5',
    offsetX: 700,
    offsetY: 100,
    height: 100,
    width: 100,
    annotations: [{ content: 'Tooltip enabled' }],
    shape: {type: 'Basic', shape: 'Ellipse'},
    constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
    tooltip: { content: 'Node Tooltip', relativeMode: 'Object' },
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
