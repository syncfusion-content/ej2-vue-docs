<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :rotateChange="rotateChange"
    ></ejs-diagram>
  </div>
</template>
<script>
import {
  DiagramComponent
} from '@syncfusion/ej2-vue-diagrams';

let nodes = [
  {
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 250,
    offsetY: 200,
    annotations: [
      {
        content: 'Rotate node',
      },
    ],
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
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
      rotateChange: (args) => {
        if (args.state === 'Completed') {
          console.log('Rotate Changed');
        }
      },
    };
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
