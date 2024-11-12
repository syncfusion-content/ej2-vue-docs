<template>
    <div id="app">
      <ejs-button v-on:click='bringLayerForward'>Bring Layer Forward</ejs-button>
      <ejs-button v-on:click='sendLayerBackward'>Send Layer Backward</ejs-button>
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
    offsetX: 130,
    offsetY: 130,
    annotations: [{ content: 'Layer 2 Object' }],
  },
  {
    id: 'node3',
    width: 100,
    height: 100,
    offsetX: 160,
    offsetY: 160,
    annotations: [{ content: 'Layer 3 Object' }],
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
        objects: ['node1'],
      },
      {
        id: 'layer2',
        objects: ['node2'],
      },
      {
        id: 'layer3',
        objects: ['node3'],
      },
];
const bringLayerForward = function() {
    /**
     * Move the layer forward
     * Parameter 1 -A string representing the id of the layer to be moved forward.
     */
    diagramInstance.bringLayerForward('layer1');
}

const sendLayerBackward = function() {
    /**
     * Move the layer Backward
     * Parameter 1 - A string representing the id of the layer to be  moved backward.
     */
    diagramInstance.sendLayerBackward('layer1');
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
