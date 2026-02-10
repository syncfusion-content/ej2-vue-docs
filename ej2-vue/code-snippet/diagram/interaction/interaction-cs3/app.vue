<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :connectors="connectors"
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
    offsetY: 250,
    height: 100,
    width: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
  },
];
let connectors = [
  {
    id: 'con1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 150 },
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
      connectors: connectors,
      selectedItems: { handleSize: 40 },
    };
  },
  mounted: function () {
    const diagramInstance = this.$refs.diagram.ej2Instances;
    diagramInstance.select([diagramInstance.nodes[0]]);
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
