<template>
<div id="app">
<ejs-button v-on:click='addLayer'>Add layer</ejs-button>
  <ejs-diagram
    id="diagram"
    ref="diagram"
    :width="width"
    :height="height"
    :nodes="nodes"
    :layers="layers"
  ></ejs-diagram>
</div>
</template>
<script>
import { DiagramComponent } from "@syncfusion/ej2-vue-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

let diagramInstance;
let nodes = [
    // Layer 1 Nodes
    {
      id: 'node1',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 100,
      annotations: [{ content: 'Layer 1 Object' }],
    },
  
    // Layer 2 Nodes
  
    {
      id: 'node2',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 300,
      annotations: [{ content: 'Layer 2 Object' }],
    },
];


export default {
name: "App",
components: {
  "ejs-diagram": DiagramComponent,
  "ejs-button": ButtonComponent
},
data() {
  return {
    width: "100%",
    height: "450px",
    nodes: nodes,
    layers: [
        {
          id: 'layer1',
          //Layer 1 objects
          objects: ['node1'],
        },
        {
          id: 'layer2',
          //Layer 2 objects
          objects: ['node2'],
        },
    ],
  };
},
mounted: function () {
   diagramInstance = this.$refs.diagram.ej2Instances;
},
methods: {
  addLayer() {
    let newLayer = {
      id: 'newlayer',
      visible: true,
      lock: false,
    };
    let layerObject = [
      {
        id: 'con1',
        type: 'Straight',
        sourceID: 'node1',
        targetID: 'node2',
      },
    ];
    /**
     * Add the layers to the existing diagram layer collection
     * newLayer - representing the layer to be added to the diagram.
     * layerObject -  An optional array of objects associated with the layer.
     */
    diagramInstance.addLayer(newLayer, layerObject);
  }
}
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
