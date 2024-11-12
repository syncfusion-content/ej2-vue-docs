<template>
    <div id="app">
      <ejs-button v-on:click='removeLayer'>Remove layer</ejs-button>
      <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :layers='layers'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide, ref, onMounted } from "vue";
import { DiagramComponent as EjsDiagram,} from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

let diagramInstance;
const diagram = ref(null);
const nodes = [
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


const width = "100%";
const height = "350px";

onMounted(function () {
    diagramInstance = diagram.value.ej2Instances;
});

const layers =[
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
];
const removeLayer = function() {
     var layerId = 'layer1';
      /**
       * Remove the layer from the existing diagram layer collection
       * layerId - representing the id of the layer to be removed from the diagram.
       */
      diagramInstance.removeLayer(layerId);
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
