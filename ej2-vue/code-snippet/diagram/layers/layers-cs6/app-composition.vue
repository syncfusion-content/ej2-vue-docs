<template>
    <div id="app">
      <ejs-button v-on:click='moveObjects'>Move Objects</ejs-button>
      <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :layers='layers'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted,provide, ref } from "vue";
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

  {
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 300,
    annotations: [{ content: 'Layer 1 Object' }],
  },

  // Layer 2 Nodes

  {
    id: 'node3',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 300,
    annotations: [{ content: 'Layer 2 Object' }],
  },
];


const width = "100%";
const height = "600px";

onMounted(function () {
    diagramInstance = diagram.value.ej2Instances;
});

const layers =[
       {
        id: 'layer1',
        //Layer 1 objects
        objects: ['node1', 'node2'],
      },
      {
        id: 'layer2',
        //Layer 2 objects
        objects: ['node3'],
      },
];
const moveObjects = function() {
    /**
     * Move objects from one layer to another layern
     * Parameter 1 - An array of object IDs represented as strings to be moved
     * parameter 2 -  The ID of the target layer to which the objects should be moved.
     */
    diagramInstance.moveObjects(['node1'], 'layer2');
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
