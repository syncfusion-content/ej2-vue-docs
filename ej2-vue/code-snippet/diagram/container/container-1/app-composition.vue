<template>
  <div id="app">
    <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="500px" :nodes="nodes" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

// Define a collection of nodes used in the diagram
const nodes = [
  // First rectangle node
  {
    id: 'node1',
    // Margin from the left and top
    margin: { left: 50, top: 30 },
    width: 100, height: 100,
    style: { fill: 'white', strokeColor: '#2546BB', strokeWidth: 1 },
    shape: { type: 'Basic', shape: 'Rectangle', cornerRadius: 4 },
    annotations: [{ content: 'Node 1' }]
  },
  // Second rectangle node
  {
    id: 'node2',
    // Margin from the left and top
    margin: { left: 200, top: 130 },
    width: 100, height: 100,
    style: { fill: 'white', strokeColor: '#2546BB', strokeWidth: 1 },
    shape: { type: 'Basic', shape: 'Rectangle', cornerRadius: 4 },
    annotations: [{ content: 'Node 2' }]
  },
  // Container node configuration to contain node1 and node2
  {
    id: 'container',
    width: 350, height: 280, // Width and height of the container
    offsetX: 250, offsetY: 250, // Position of the container
    shape: {
      // Define the type as a container
      type: 'Container',
      // Includes node1 and node2 as children
      children: ['node1', 'node2'],
    },
    // Style properties for the container
    style: { fill: '#E9EEFF', strokeColor: '#2546BB', strokeWidth: 1 }
  },
];


const diagramRef = ref(null);

onMounted(() => {
  // Retrieve the diagram instance
  const diagramInstance = diagramRef.value.ej2Instances;
  diagramInstance.select([diagramInstance.getObject("container")]);
});
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>