<template>
  <div id="app">
    <ejs-button v-on:click="sendBackward">Send BackWard </ejs-button>
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
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

let nodes = [
  {
    id: 'node1',
    width: 90,
    height: 70,
    offsetX: 120,
    offsetY: 100,
  },
  {
    id: 'node2',
    width: 90,
    height: 70,
    offsetX: 150,
    offsetY: 120,
  },
  {
    id: 'node3',
    width: 90,
    height: 70,
    offsetX: 170,
    offsetY: 150,
  },
];

export default {
  name: 'App',
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-button': ButtonComponent,
  },
  data() {
    return {
      width: '100%',
      height: '600px',
      nodes: nodes,
    };
  },
  methods: {
    sendBackward: function () {
      var diagramInstance = this.$refs.diagram.ej2Instances;
      diagramInstance.sendBackward();
    },
  },
};
</script>
<style>
@import '../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css';
</style> 
