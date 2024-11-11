<template>
  <div id="app">
    <ejs-button v-on:click="right">Right </ejs-button>
    <ejs-button v-on:click="left">Left </ejs-button>
    <ejs-button v-on:click="up">Up </ejs-button>
    <ejs-button v-on:click="down">Down </ejs-button>
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
    offsetX: 100,
    offsetY: 100,
    width: 70,
    height: 40,
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
    right: function () {
      var diagramInstance = this.$refs.diagram.ej2Instances;
      diagramInstance.nudge('Right');
    },
    left: function () {
      var diagramInstance = this.$refs.diagram.ej2Instances;
      diagramInstance.nudge('Left');
    },
    up: function () {
      var diagramInstance = this.$refs.diagram.ej2Instances;
      diagramInstance.nudge('Up');
    },
    down: function () {
      var diagramInstance = this.$refs.diagram.ej2Instances;
      diagramInstance.nudge('Down');
    },
  },
};
</script>
<style>
@import '../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css';
</style>
