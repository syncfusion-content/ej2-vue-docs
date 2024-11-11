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
import {
  DiagramComponent as EjsDiagram,
  Keys,
  KeyModifiers,
} from "@syncfusion/ej2-vue-diagrams";

// Refs for the diagram component and instances
const diagram = ref(null);
let diagramInstance;

// Reactive properties
const width = "700px";
const height = "350px";
const scrollSettings = { scrollLimit: "Infinity" };

const nodes = ref([
  {
    id: "node1",
    offsetX: 100,
    offsetY: 100,
    width: 70,
    height: 40,
    style: { fill: "#64abbb" },
  },
]);

const commandManager = ref({
  commands: [
    {
      //Preventing default cut command
      name: "cut",
      canExecute: function () {
        return false;
      },
      execute: null,
      gesture: {
        key: Keys.X,
        keyModifiers: KeyModifiers.Control,
      },
    },
    {
      //Preventing default delete command
      name: "delete",
      canExecute: function () {
        return false;
      },
      execute: null,
      gesture: {
        key: Keys.Delete,
      },
    },
    {
      //Modifying copy command to clone node
      name: "clone",
      canExecute: function () {
        let execute = diagramInstance.selectedItems.nodes.length > 0;
        return execute;
      },
      execute: function () {
        diagramInstance.copy();
        diagramInstance.paste();
      },
      gesture: {
        //Press CTRL+C to clone node
        key: Keys.C,
        keyModifiers: KeyModifiers.Control,
      },
    },
  ],
});

onMounted(() => {
  // Assign the Diagram instance when the component is mounted
  diagramInstance = diagram.value.ej2Instances;
});
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
