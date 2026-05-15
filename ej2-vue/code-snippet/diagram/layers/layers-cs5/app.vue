<template>
<div id="app">
  <ejs-button v-on:click='removeLayer'>Remove Layer</ejs-button>
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
    height: "350px",
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
  removeLayer: function() {
    var layerId = 'layer1';
    /**
     * Remove the layer from the existing diagram layer collection
     * layerId - representing the id of the layer to be removed from the diagram.
     */
    diagramInstance.removeLayer(layerId);
  }
}
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
