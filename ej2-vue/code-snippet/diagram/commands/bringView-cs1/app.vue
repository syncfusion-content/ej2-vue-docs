<template>
  <div id="app">
    <ejs-button v-on:click="clock">Bring Into View </ejs-button>

    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :scrollSettings="scrollSettings"
    ></ejs-diagram>
  </div>
</template>
<script>
import {
  DiagramComponent,
  Rect,
} from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

let nodes = [
  {
    id: 'node1',
    offsetX: 1000,
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
      scrollSettings: {
        scrollLimit: 'Infinity',
      },
    };
  },
  methods: {
    clock: function () {
      var diagramInstance = this.$refs.diagram.ej2Instances;
      let nodeBounds = diagramInstance.nodes[0].wrapper.bounds;
      let bounds = new Rect(
        nodeBounds.x,
        nodeBounds.y,
        nodeBounds.width,
        nodeBounds.height
      );
      /**
       * parameter - bounds of region to bring into view
       */
      diagramInstance.bringIntoView(bounds);
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
