<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :connectors="connectors"
    ></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent, DiagramTools } from '@syncfusion/ej2-vue-diagrams';
let nodes = [
    {
      id: 'Start',
      width: 140,
      height: 50,
      offsetX: 100,
      offsetY: 100,
      annotations: [
        {
          id: 'label1',
          content: 'Start',
        },
      ],
      shape: {
        type: 'Flow',
        shape: 'Terminator',
      },
    },
    {
      id: 'Init',
      width: 140,
      height: 50,
      offsetX: 300,
      offsetY: 300,
      annotations: [
        {
          id: 'label2',
          content: 'End',
        },
      ],
      shape: {
        type: 'Flow',
        shape: 'Process',
      },
    },
  ];
  
  let connectors = [{
    // Name of the connector
    id: 'connector1',
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
      strokeWidth: 2,
    },
    targetDecorator: {
      style: {
        fill: '#6BA5D7',
        strokeColor: '#6BA5D7',
      },
    },
    // ID of the source and target nodes
    sourceID: 'Start',
    targetID: 'Init',
    type: 'Orthogonal',
  }];
export default {
  name: 'App',
  components: {
    'ejs-diagram': DiagramComponent,
  },
  data() {
    return {
      width: '100%',
      height: '350px',
      nodes: nodes,
      connectors: connectors
    };
  },
  mounted: function () {
    const diagramInstance = this.$refs.diagram.ej2Instances;
    //To draw an object once, activate draw once
    diagramInstance.tool = DiagramTools.ZoomPan;
    diagramInstance.dataBind();
  },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
