<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :getNodeDefaults="getNodeDefaults"
    ></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [
  {
    id:'node1',
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    zIndex:2,
    annotations:[{content:'Node1'}],
    style:{fill:'white',strokeColor:'black'}

  },
  {
    id:'node2',
    // Position of the node
    offsetX: 270,
    offsetY: 270,
    // Size of the node
    width: 100,
    height: 100,
    zIndex:1,
    annotations:[{content:'Node2'}],
    style:{fill:'white',strokeColor:'black'}
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
      getNodeDefaults: (obj) => {
        obj.style = {fill:'yellow',strokeColor:'green',strokeWidth:3}
      },
    
    };
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
