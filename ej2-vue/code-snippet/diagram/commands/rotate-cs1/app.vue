<template>
  <div id="app">
    <ejs-button v-on:click="clock">Rotate ClockWise </ejs-button>
    <ejs-button v-on:click="antiClock">Rotate AntiClockWise </ejs-button>
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
    annotations: [{ content: 'Node 1' }],
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
    clock: function () {
      var diagramInstance = this.$refs.diagram.ej2Instances;
      let node = diagramInstance.nodes[0];
      /**
       * paramter 1 - Rotate item
       * paramter 2 - angle to be rotated
       */
      diagramInstance.rotate(node, 45);
    },
    antiClock: function () {
      var diagramInstance = this.$refs.diagram.ej2Instances;
      let node = diagramInstance.nodes[0];
      /**
       * paramter 1 - Rotate item
       * paramter 2 - angle to be rotated
       */
      diagramInstance.rotate(node, -45);
    },
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
