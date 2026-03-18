<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :selectedItems="selectedItems"
    ></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
let nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    height: 100,
    width: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
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
      selectedItems: { canToggleSelection: true },
    };
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
