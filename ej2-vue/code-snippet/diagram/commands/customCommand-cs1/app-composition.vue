<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :scrollSettings="scrollSettings"
      :nodes="nodes"
      :commandManager="commandManager"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram, Keys, KeyModifiers } from '@syncfusion/ej2-vue-diagrams';

// Refs for the diagram component and instances
const diagram = ref(null);
let diagramInstance;

// Reactive properties
const width = "700px";
const height = "350px";
const scrollSettings = { scrollLimit: 'Infinity' };

const nodes = ref([
  {
    id: 'node1',
    offsetX: 100,
    offsetY: 100,
    width: 70,
    height: 40,
    style: { fill: '#64abbb' },
  }
]);

const commandManager = ref({
  commands: [
    {
      name: 'clone',
      canExecute: () => {
        return diagramInstance.selectedItems.nodes.length > 0;
      },
      execute: () => {
        diagramInstance.copy();
        diagramInstance.paste();
      },
      gesture: {
        key: Keys.G,
        keyModifiers: null,
      },
    },
    {
      name: 'color',
      canExecute: () => {
        return diagramInstance.selectedItems.nodes.length > 0;
      },
      execute: () => {
        const selectedNode = diagramInstance.selectedItems.nodes[0];
        // Toggle the node color
        selectedNode.style.fill =
          selectedNode.style.fill === '#64abbb' ? 'yellow' : '#64abbb';
        diagramInstance.dataBind();
      },
      gesture: {
        key: Keys.G,
        keyModifiers: KeyModifiers.Shift | KeyModifiers.Alt,
      },
    }
  ]
});

onMounted(() => {
  // Assign the Diagram instance when the component is mounted
  diagramInstance = diagram.value.ej2Instances;
});
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
